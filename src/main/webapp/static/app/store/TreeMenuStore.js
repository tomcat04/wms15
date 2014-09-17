/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.store.TreeMenuStore", {
    extend: "Ext.data.TreeStore",
    requires:'App.model.TreeMenuModel',
    alias: 'widget.treeMenuStore',
    proxy: {
        type: 'rest',
        url: 'testMenu',
        reader: {
            type: 'json',
            root: 'menuList'
//            autoLoad:true
        }
    },
    root: {
        text: '根节点',
        id: '-1',
        parentId: '-1',
        expanded: true
    },
    autoLoad: false //表格自动加载
});