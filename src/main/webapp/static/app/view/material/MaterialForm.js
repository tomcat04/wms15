/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.materialForm',
    xtype:'form',
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 100,
        lableHigh:300
    },
    defaultType: 'textfield',
    frame: true,
    items: [
        {
            id:'materialCode',
            fieldLabel: '物料编号',
            allowBlank: true,
            emptyText: '物料编号',
            name:'materialCode'
        },
        {
            id:'materialDesc',
            fieldLabel: '物料描述',
            allowBlank: true,
            emptyText: '物料描述',
            name:'materialDesc'
        },
        {
            id:'vendorCode',
            fieldLabel: '供应商代码',
            allowBlank: true,
            emptyText: '供应商代码',
            name:'vendorCode'
        }
    ],
    buttonAlign:'left',
    buttons: [{
            text: '重置',
            scope: this,
            handler: this.onResetClick
        }, {
            text: '查询',
            scope: this,
            handler: this.onCompleteClick
        }],
    initComponent: function() {
        console.info('MaterialForm.initComponent');
        this.callParent();
    },
    onResetClick: function() {
        console.info('reset');
        this.getForm().reset();
    },
    onCompleteClick: function() {
        var form = this.getForm();
        if (form.isValid()) {
            Ext.MessageBox.alert('Submitted Values', form.getValues(true));
        }
    }
});