/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.MaterialView', {
    extend: 'Ext.Panel',
    alias: 'widget.materialTab',
    store: 'simpsonsStore',
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
    buttons: [{text: '登陆'}, {text: '取消'}],
    initComponent: function() {
        Ext.create('Ext.data.Store', {
            storeId: 'simpsonsStore',
            fields: ['id', 'text', 'target'],
            data: {'items': [
                    {'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"},
                    {'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234"},
                    {'name': 'Homer', "email": "home@simpsons.com", "phone": "555-222-1244"},
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