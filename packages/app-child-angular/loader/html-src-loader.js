const babel = require('@babel/core');
const cheerio = require('cheerio');

function transformTagUrl($, tag, attrKey, host, htmlText) {
    $(tag).each(function (_i, el) {
        //  情况 1: img src="assets/logo.png"
        let url = $(el).attr(attrKey);
        if (url) {
            // 忽略 img src="{{xxx}}" 情况
            if (url.includes('{{')) {
                return;
            }
            // javascript:void(0); 这种情况会被 new URL 自动处理掉
            const newUrl = new URL(url, host).href;
            htmlText = htmlText.replace(`${attrKey}="${url}"`, `${attrKey}="${newUrl}"`);
            htmlText = htmlText.replace(`${attrKey}='${url}'`, `${attrKey}="${newUrl}"`);
            return;
        }
        // 情况 2: img [src]="'assets/logo.png'"
        url = $(el).attr(`[${attrKey}]`);

        // 有 pipe 属性过滤掉
        if (!url || /\s+[|]\s+/.test(url)) {
            return;
        }
        const realUrl = url.replace(/[\r\n]+/g, '').trim();
        if (realUrl.startsWith(`'`)) { // 防止有换行情况
            const newUrl = new URL(realUrl.replace(/'|"/g, ''), host).href;
            htmlText = htmlText.replace(`[${attrKey}]="${url}"`, `[${attrKey}]="'${newUrl}'"`);
            htmlText = htmlText.replace(`[${attrKey}]='${url}'`, `[${attrKey}]="'${newUrl}'"`);
        }
    });
    return htmlText;
}

module.exports = function (content) {
    const publicPath = this._compiler.options.output.publicPath;
    const res = babel.transform(content, {
        compact: false,
        plugins: [
            {
                visitor: {
                    ExportDefaultDeclaration: {
                        enter(path) {
                            const { node } = path;

                            // 拿到 html 代码
                            const htmlText = node.declaration.value;

                            // https://www.npmjs.com/package/cheerio
                            // Similar to web browser contexts, load will introduce <html>, <head>, and <body> elements if they are not already present. You can set load's third argument to false to disable this.
                            const $ = cheerio.load(htmlText, {
                                xmlMode: true,
                                recognizeSelfClosing: false,
                                recognizeCDATA: false,
                                lowerCaseTags: false,
                                lowerCaseAttributeNames: false,
                                decodeEntities: false, // Decode HTML entities.
                                withStartIndices: true, // Add a `startIndex` property to nodes.
                                withEndIndices: true, // Add an `endIndex` property to nodes.
                            }, false); // 防止产出 head body 标签

                            let html = htmlText;

                            // 处理 img 标签 src
                            html = transformTagUrl($, 'img', 'src', publicPath, html);

                            // 处理 a 标签 href
                            html = transformTagUrl($, 'a', 'href', publicPath, html);
                            console.log(html);
                            node.declaration.value = html;
                        },
                    },
                },
            }
        ],
    });
    return res.code;
}
