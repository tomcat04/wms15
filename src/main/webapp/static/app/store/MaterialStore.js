/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.store.MaterialStore", {
    model: 'App.model.MaterialModel',
    extend: "Ext.data.Store",
    pageSize: 20,
    proxy: {
        type: 'rest',
        url: contextPath+'/materialList',
        reader: {
            type: 'json',
            root: 'materialList'
        },
        writer: {
            type: 'json'
        }
    },
    autoLoad: false //表格自动加载
});