/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
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
            html: '说明栏'
        }, {
            title: '右侧栏',
            xtype: "panel",
            region: 'east',
            items:{
                xtype:'userlist'
            },
            width: 250,
            layout: 'fit'
        }, {
            xtype: "defaultMainTab",
            layout: 'fit',
            region: 'center'
        },{
            title: '菜单栏',
            xtype: "mytree",
            region: 'west'
        }]
});
