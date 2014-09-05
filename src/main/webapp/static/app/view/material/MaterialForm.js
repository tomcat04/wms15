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
    height : 5050,
    fieldDefaults: {
        labelAlign: 'right',
//        msgTarget: 'qtip'
        msgTarget: 'side'
//        anchor: 90
    },
    items: [
        {
            fieldLabel: '物料编号',
            allowBlank: true,
            name: 'materialCode'
        },
        {
            fieldLabel: '物料描述',
            allowBlank: true,
            name: 'materialDesc1'
        },
//        {
//            fieldLabel: '供应商代码',
//            allowBlank: true,
//            name: 'vendorCode'
//        },
        {
            fieldLabel: '文件上传',
            allowBlank: true,
            xtype: 'filefield',
            name: 'materialDesc',
            validator: function(value) {
                var arr = value.split('.');
                if (arr[arr.length - 1] != 'txt') {
                    value = null;
                    return '文件不合法！！！';
                } else {
                    return true;
                }
            },
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
//            typeAhead: true,
            mode: 'remote', //默认远程数据加载 
            emptyText: 'Select a state...',
            store: new Ext.data.Store({
                model: 'App.model.StatesModel',
                proxy: {
                    type: 'rest',
                    //url: contextPath+'/materialList',
                    url: 'materials',
                    reader:
                            {
                                type: 'json',
                                root: 'materialList',
                                totalProperty: 'count'
                            }
                },
                autoLoad: true //表格自动加载
            })
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            allowBlank: false,
            maxValue: new Date()
        }
    ],
    initComponent: function() {
        Ext.apply(this, {
//            width: 550,

            buttonAlign: 'center',
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