/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.VendorView', {
    extend: 'Ext.Panel',
    alias: 'widget.vendorTab',
    activeTab: 0,
    items: [{
            xtype: 'textfield',
            fieldLabel: '这是啥',
            width: 350,
            name: 'username'
        }, {
            xtype: 'textfield',
            fieldLabel: '供应商啥的',
            width: 350,
            name: 'password'
        }],
    buttons: [{text: '登陆'}, {text: '取消'}],
    initComponent: function() {
        console.info('DefaultMainView.initComponent');
        this.callParent();
    }
});