/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.view.TreeMenuView", {
    extend: "Ext.tree.Panel",
//    alias : 'widget.myTreeMenuView',
    requires:[
            "App.store.TreeMenuStore"
    ],
//    title: 'Simple Tree',
//    width: 200,
//    forceFit: true,
//    id: "treeMenu",
    heigth: 'auto',
    store: 'App.store.TreeMenuStore',
    rootVisible: false,
    initComponent: function() {
        console.info("TreeMenuView.initComponent");
//        Ext.apply(this,{
//            store:[Ext.create("App.store.TreeMenuStore",{id:'myTreeMenu'})]
//        });
    },
    border: false
//    renderTo: Ext.getBody()
});