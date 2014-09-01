/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.store.TreeMenuStore", {
    extend: "Ext.data.TreeStore",
    nodeParam: 'parentId',
    proxy: {
        method: 'GET',
        type: 'ajax',
        url: 'testMenu',
        reader: {
            type: 'json',
            root: 'menuList'
        }
    },
    root: {
        text: '根节点',
        id: '-1',
        parentId: '-1',
        expanded: true,
        leaf: 'root'
    },
    autoLoad: true //表格自动加载
});