class Shared {
    /**
     * 获取 Count
     */
    getCount() {
        return localStorage.getItem("count") || "";
    }

    /**
     * 设置 Count
     */
    setCount(count: any) {
        localStorage.setItem("count", count);
    }
}

class SharedModule {
    static shared = new Shared();

    /**
     * 重载 shared
     */
    static overloadShared(shared: any) {
        SharedModule.shared = shared;
    }

    /**
     * 获取 shared 实例
     */
    static getShared() {
        return SharedModule.shared;
    }
}

export default SharedModule;