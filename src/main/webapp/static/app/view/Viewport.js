/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
//    requires: [
//        "App.view.TreeMenuView"
//    ],
    defaults: {
        split: true, //是否有分割线
        bodyStyle: 'padding:0px'
    },
    //布局方式：border
    layout: 'border',
    items: [{
            title: 'ExtJS案例',
            xtype: "panel",
            collapisble: true,
            region: 'north',
            height: 100,
            html: '1111111111111111111111'
        }, {
            region: 'west',
            title: '导航栏',
            xtype: "panel",
            //items: [Ext.create("App.view.TreeMenuView", {id: 'myTreeMenu'})],
            width: 250,
            layout: 'fit',
            html:'ddd'
        }, {
            id: 'mainContent',
            title: '主题内容显示',
            xtype: "panel",
            layout: 'fit',
            region: 'center'
//            collapisble: true
        }]
});
