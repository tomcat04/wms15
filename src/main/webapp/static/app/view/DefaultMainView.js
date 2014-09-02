/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.DefaultMainView', {
    extend: 'Ext.Panel',
    alias: 'widget.defaultMainTab',
    activeTab: 0,
    title:'默认首页',
    items: [
        {
            authHeight: true,
            layout: 'fit',
            autoScroll: true,
            closable: false, //是否可关闭
            html: '....'
        }
    ],
    initComponent: function() {
        
        console.info('DefaultMainView.initComponent');
        this.callParent();
    }
});