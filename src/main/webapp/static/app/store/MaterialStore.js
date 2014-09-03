/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.store.MaterialStore", {
    model: 'App.model.MaterialModel',
    extend: "Ext.data.Store",
    alias: 'widget.materialStore',
    pageSize: 20,
    proxy: {
        type: 'rest',
        //url: contextPath+'/materialList',
        url: 'materials',
        reader: 
            {
                type: 'json',
                root: 'materialList'

            }
//            , 
//            {
//                totalProperty: 'total',
//                root: 'count'
//            }
        ,
        writer: {
            type: 'json'
        }
    },
    autoLoad: true //表格自动加载
});