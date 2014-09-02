/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.MaterialView', {
    extend: 'Ext.Panel',
    alias: 'widget.materialTab',
    activeTab: 0,
    items: [
        Ext.create("Ext.panel.Panel", {
            flex: 0.3,
            border: false,
            items: [
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: '资料等级'
                },
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: 'BOM清单'
                },
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: '检验规范'
                },
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: '检验卡片'
                }

            ]
        }),
        Ext.create("Ext.panel.Panel", {
            border: false,
            flex: 0.3,
            items: [
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: '规格书'
                },
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: '质量协议签订'
                },
                {
                    xtype: 'displayfield',
                    name: 'materialDesc',
                    value: '',
                    fieldLabel: 'PPAP资料'
                }
            ]

        }),
        Ext.create("Ext.panel.Panel", {
            flex: 0.3,
            border: false,
            items: [
            ]
        })

    ],
    buttons: [{text: '登陆'}, {text: '取消'}],
    initComponent: function() {
        console.info('DefaultMainView.initComponent');
        this.callParent();
    }
});