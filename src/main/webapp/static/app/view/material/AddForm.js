/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.AddForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addForm',
    defaultType: 'textfield',
    frame: true,
    fieldDefaults: {
        labelAlign: 'right',
        msgTarget: 'side'
    },
    items: [
        {
            id:'materialCode',
            fieldLabel: '物料编号',
//            allowBlank: true,
            require:true,
            name: 'materialCode'
        },
        {
            fieldLabel: '物料描述',
            allowBlank: true,
            name: 'materialDesc'
        },
        {
            fieldLabel: '文件上传',
            allowBlank: true,
            xtype: 'filefield',
            name: 'file',
            buttonText: '选择文件'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'state',
            valueField: 'materialCode',
            displayField: 'materialDesc',
            loadingText: 'loading',
            editable: false, // 是否编辑
            mode: 'remote', //默认远程数据加载 
            emptyText: 'Select a state...',
            store:Ext.create('App.store.StatesStore')
        }
    ],
    initComponent: function() {
        Ext.apply(this, {
            buttonAlign: 'center',
            buttons: [{
                    text: '重置',
                    scope: this,
                    handler: this.onResetClick
                }, {
                    name: 'submit',
                    text: '提交',
                    scope: this
                }]
        });
        console.info('MaterialForm.initComponent');
        this.callParent();
    },
    onResetClick: function() {
        console.info('reset');
        this.getForm().reset();
    }
});