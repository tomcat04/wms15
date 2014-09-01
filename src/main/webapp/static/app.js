//var location = (window.location+'').split('/');  
//var basePath = location[0]+'//'+location[2]+'/'+location[3];
//console.info(basePath);
//console.info(location[3]);
//开启动态加载
Ext.Loader.setConfig({enabled: true});
//开启悬浮提示功能
Ext.QuickTips.init();
Ext.application({
    name: 'App',
    appFolder: '/' + (window.location + '').split('/')[3] + '/static/app',
//    appFolder: '/wms15/static/js/app',
    controllers: [
        'App.controller.TreeMenuController',
        'App.controller.ViewportController',
        'App.controller.UserListController'
    ],
    //自动加载和实例化Viewport文件
    autoCreateViewport: true,
    launch: function() {
        console.info('application.launch');
//        Ext.create('App.view.Viewport',{
//            id:"mainViewport"
//        });
    }
});
