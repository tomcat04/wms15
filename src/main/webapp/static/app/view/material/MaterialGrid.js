/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.materialGrid',
    frame: false,
    autoHeight : true,
    layout:'fit',
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            xtype: 'checkcolumn',
            width : 10
        },
        {
            text: '物料编码', 
            dataIndex: 'materialCode'
        },
        {
            text: '物料描述', 
            dataIndex: 'materialDesc'
        },
        {
            text: '图片', 
            dataIndex: 'imagUrl',
            autoHeight : true,
            renderer : function(value) {
                if(value)
                    return '<img src =  ' + value + '>99</img>';
                else
                    console.info(contextPath);
                    return '<a target="_blank" href="http://localhost:8091/wms15/app/xopera/testAjax">' + '测试文件下载路径' + '</a>';
            }
//            ,
//            listeners : { // 该项载入加载照片
//                'render' : function(_filed) {
//                       _filed.getEl().dom.src = "qing.jpg";//图片路径预先store读取赋给变量给
//                   }     //态显示图片
// }
        }
    ],
    columnLines: true,
    forceFit: true,
    store: 'MaterialStore',
    initComponent: function() {
        console.info('MaterialGrid.initComponent');
        this.callParent();
//        this.store.remove();
        this.store.clear;
//        this.store.reload();
        var s = this.store.getProxy().extraParams;
        console.info('s: ' + s);
        this.store.loadPage(1);
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            
            items: [
                { 
                    xtype: 'button', 
                    text: '添加数据',
                    name:'add'
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            store: 'MaterialStore',   // same store GridPanel is using
            dock: 'bottom',
            displayInfo: true
        },
        {
            xtype: 'pagingtoolbar',
            store: 'MaterialStore',   // same store GridPanel is using
            dock: 'top',
            displayInfo: true
        }
        
    ]
});