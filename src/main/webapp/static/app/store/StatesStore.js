/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.store.StatesStore", {
    model: 'App.model.StatesModel',
    extend: 'Ext.data.Store',
    alias: 'widget.statesStore',
    storeId: 'states',
    proxy: {
        type: 'rest',
        url: 'states',
        reader: {
            type: 'json',
            root: 'materialList'
        }
    },
    fields: [ 'materialCode','materialDesc'],
    autoLoad: false //表格自动加载
});