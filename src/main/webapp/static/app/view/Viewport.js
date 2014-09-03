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
//            title: 'ExtJS',
            xtype: "panel",
            collapisble: true,
            region: 'north',
            height: 100,
            items: Ext.create('Ext.Toolbar', {
                items: [
                    {xtype: 'label', text: '全局搜索：'}, 
                    {xtype: 'textfield', id: 'KeyWord', emptyText: '输入关键字按Enter搜索'}, 
                    {text: '搜索', handler: function() 
                        {
                            alert("搜索");
                        }
                    }
                ]
            })
        }, {
            xtype: "userlist",
            region: 'east',
            width: 250,
            layout: 'fit'
        }, {
            bodyPadding: 20,
            id:'tabPanel',
            xtype:'tabpanel',
            minTabWidth:90,
            items:[
                {
                    xtype:'defaultMainTab'
                }
            ],
            layout: 'fit',
            region: 'center'
        },{
            title: '菜单栏',
            xtype: "mytree",
            region: 'west'
        }]
});
