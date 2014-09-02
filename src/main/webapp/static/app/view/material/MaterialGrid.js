/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.materialGrid',
    frame: true,
    store: 'simpsonsStore',
    tbar: [{
            xtype: 'button',
            text: '新增',
            iconCls: 'icon-add'
//            handler: add
        }, {
            xtype: 'button',
            text: '删除',
            iconCls: 'icon-delete'
//            handler: alter
        }, {
            xtype: 'button',
            text: '保存',
            iconCls: 'icon-save'
//            handler: otherDelete
        }, {
            xtype: 'button',
            text: '导出',
            iconCls: 'icon-excel'
//            handler: otherDelete
        }],
    dock: 'top,bottom',
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
    columnLines: true,
//    selModel: Ext.create('Ext.selection.RowModel',{mode:"MULTI"}),
    forceFit: true,
//    dockedItems: [{
//            xtype: 'tbar',
//            dock: 'bottom,top',
//            displayInfo: true
//        }],
    buttons: [{text: '登陆'}, {text: '取消'}],
    initComponent: function() {
        Ext.create('Ext.data.Store', {
            storeId: 'simpsonsStore',
            fields: ['name', 'email', 'phone'],
            data: {'items': [
                    {'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"},
                    {'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234"},
                    {'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244"},
                    {'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"},
                    {'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"}
                ]},
            proxy: {
//                method: 'GET',
//                type: 'ajax',
//                url: 'materials',
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        });
        console.info('MaterialView.initComponent');
        this.callParent();
    }
});