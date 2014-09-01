/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.onReady(function(){
    var location = (window.location+'').split('/');  
    var basePath = location[0]+'//'+location[2]+'/'+location[3];
    console.info(basePath);
    console.info(location[3]);
    //开启悬浮提示功能
    Ext.QuickTips.init();
    //开启动态加载
    Ext.Loader.setConfig({
        enabled: true
    });
    //创建应用程序的实例
    Ext.application({
        //设定命名空间
        name: 'App',
        //指定配置选项，设置相应的路径
        appFolder: '/wms15/static/js/app',
        //加载控制器
        //controllers: ['Controller'],
        //自动加载和实例化Viewport文件
        autoCreateViewport: true
    });
});
