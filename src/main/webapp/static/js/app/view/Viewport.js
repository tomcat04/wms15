/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.Viewport', {
    extend:'Ext.container.Viewport',
    //alias:'widget.myviewport',
//    requires:[
//            "App.view.TreeMenuView"
//        ],
    //布局方式：border
    layout: 'border',
    items: [{
        title:'ExtJS案例',
        xtype: "panel",
        collapisble: true,
        region:'north',
        height: 100,
        html: '1111111111111111111111'
    },{
        title: '功能菜单',
        xtype: "panel",
        region: 'west',
        //items:[Ext.create("App.view.TreeMenuView",{id:'myTreeMenu'})],
        width: 180,
        split: true,
        collapisble: true,
        layout:'fit',
        html:'33333'
    }, {
        id: 'mainContent',
        title: '主题内容显示',
        xtype: "panel",
        layout: 'fit',
        region: 'center',
        collapisble: true
    }]
});
