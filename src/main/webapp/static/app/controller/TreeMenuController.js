/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.TreeMenuController', {
    extend: 'Ext.app.Controller',
    views: [
        'App.view.TreeMenuView',
        'App.view.DefaultMainView',
        'App.view.MaterialView'
    ],
//    stores: [
//        'App.store.TreeMenuStore'
//    ],
    init: function() {
        console.info("TreeMenuController.init");
        this.control({
            'mytree': {
                itemclick: function(view, record, item, index, e, eOpts) {
                    var raw = record.raw;
                    var recordid = record.raw.id;
                    var leaf = record.raw.leaf;
                    if (leaf) {//是否是叶子
                        console.log(recordid + ' is leaf');
                        var tabs = Ext.getCmp('tabPanel');
                        var n = tabs.getComponent(recordid);
                        if (n) {//是否已打开
                            tabs.setActiveTab(recordid);
                        } else {
                            console.log('需要创建新tab');
                            console.log(record.raw);
                            this.openTab(tabs, raw.id, raw.text, raw.target, n);
                        }
                    }
                }
            }
        });
    },
    openTab: function(parentTabs, id, title, viewName, n) {
        var newtab = parentTabs.add({
            id: id,
            title: title,
            closable: true,
            items: [
                {
                    xtype: 'materialTab'
                },
                {
                    xtype: 'textfield'
                }
            ]
        });
        parentTabs.setActiveTab(newtab);
    }
});