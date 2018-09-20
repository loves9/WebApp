const routerManager = {
    push(url, options, { $core, $router, $routesMap }, needForResult) {
        const Core = $core;
        const VueRouter = $router;
        const RoutesMap = $routesMap;

        VueRouter.push({ path: url, query: options })
    },

    pop(options, { $core, $router, $options, $store }) {
        const Core = $core;
        const VueRouter = $router;

        if(!options.url) {
            VueRouter.go(options)
        }else{
            VueRouter.back();

        }

    }
}

export default routerManager
