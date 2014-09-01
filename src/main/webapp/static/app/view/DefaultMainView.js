/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.DefaultMainView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.defaultMainTab',
    title: '默认首页-不可关闭',
    activeTab: 0,
    plain: true,
    html:'3333',
//    items: [
//    ],
    initComponent: function() {
        console.info('DefaultMainView.initComponent');
        this.callParent();
    }
});