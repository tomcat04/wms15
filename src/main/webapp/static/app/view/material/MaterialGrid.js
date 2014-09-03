/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.materialGrid',
    frame: false,
    dock: 'top,bottom',
    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {text: 'Phone', dataIndex: 'phone'}
    ],
    columnLines: true,
    forceFit: true,
    store: 'Ext.data.MaterialStore',
    initComponent: function() {
        this.store = Ext.widget('materialStore');
        /*Ext.create('Ext.data.Store', {
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
         });*/
        console.info('MaterialGrid.initComponent');
        this.callParent();
    },
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
//            store: 'MaterialExceptionLogStore', // same store GridPanel is  using  
            dock: 'top',
            displayInfo: true
        }
    ]
});