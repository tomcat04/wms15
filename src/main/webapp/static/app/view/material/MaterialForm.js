/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.materialForm',
//    xtype: 'form',
//    fieldDefaults: {
//        labelAlign: 'left',
//        labelWidth: 100,
//        lableHigh: 300
//    },
    defaultType: 'textfield',
    frame: true,
    fieldDefaults: {
                labelAlign: 'right',
//                labelWidth: 90,
                msgTarget: 'qtip'
            },
            items: [
                {
                    fieldLabel: '物料编号',
                    allowBlank: true,
                    emptyText: '物料编号',
                    name: 'materialCode'
                },
                {
                    fieldLabel: '物料描述',
                    allowBlank: true,
                    emptyText: '物料描述',
                    name: 'materialDesc'
                },
                {
                    fieldLabel: '供应商代码',
                    allowBlank: true,
                    emptyText: '供应商代码',
                    name: 'vendorCode'
                }
            ],
    initComponent: function() {
        Ext.apply(this, {
//            width: 550,
            
            buttonAlign: 'left',
            buttons: [{
                    text: '重置',
                    scope: this,
                    handler: this.onResetClick
                }, {
                    name: 'searchMaterial',
                    text: '搜索',
                    scope: this
//                    handler: this.onSearchClick
                }]
        });
        console.info('MaterialForm.initComponent');
        this.callParent();
    },
    onResetClick: function() {
        console.info('reset');
        this.getForm().reset();
    },
    onSearchClick: function() {
        var form = this.getForm();
        if (form.isValid()) {
            this.getForm().submit({
                clientValidation: true,
                url: 'testFormSubmit',
                type: 'rest',
//                waitTitle: '请稍等...',  
//                waitMsg: '正在提交信息...',  
                success: function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failue', action.result.msg);
                }
            });
        }
    }
});