const babel = require('@babel/core');
const cheerio = require('cheerio');

function transformTagUrl($, tag, attrKey, host) {
    $(tag).each(function (_i, el) {
        //  情况 1: img src="assets/logo.png"
        let url = $(el).attr(attrKey);
        if (url) {
            url = url.trim();
            // 忽略 img src="{{xxx}}" 情况
            if (url.startsWith('{{')) {
                return;
            }
            // javascript:void(0); 这种情况会被 new URL 自动处理掉
            const newUrl = new URL(url, host).href;
            console.log(newUrl);
            $(el).attr(attrKey, newUrl);
            return;
        }
        // 情况 2: img [src]="'assets/logo.png'"
        url = $(el).attr(`[${attrKey}]`);
        if (!url) {
            return;
        }
        url = url.trim();
        if (url.startsWith(`'`) || url.startsWith(`"`)) {
            const prefix = url[0];
            const newUrl = new URL(url.replace(/'|"/g, ''), host).href;
            console.log(newUrl);
            $(el).attr(`[${attrKey}]`, `${prefix}${newUrl}${prefix}`);
        }
    });
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
                            const $ = cheerio.load(htmlText, null, false); // 防止产出 head body 标签

                            // 处理 img 标签 src
                            transformTagUrl($, 'img', 'src', publicPath);

                            // 处理 a 标签 href
                            transformTagUrl($, 'a', 'href', publicPath);

                            const html = $.html();
                            node.declaration.value = html;
                        },
                    },
                },
            }
        ],
    });
    return res.code;
}
