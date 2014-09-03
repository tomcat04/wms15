/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.materialGrid',
    frame: false,
    
    columns: [
        {text: '物料编码', dataIndex: 'materialCode'},
        {text: '物料描述', dataIndex: 'materialCode'},
        {text: '图片', dataIndex: 'imagUrl'}
    ],
    columnLines: true,
    forceFit: true,
    store: 'Ext.data.MaterialStore',
    initComponent: function() {
        this.store = Ext.widget('materialStore');
        console.info('MaterialGrid.initComponent');
        this.callParent();
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: this.store,   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],
});