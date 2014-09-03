/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.MaterialController',{
    extend:'Ext.app.Controller',
    init: function() {
        console.log('MaterialController.init');
//        this.control({
//            'button[id=MaterialExceptionLog_SearchBtn]': {
//                click: function() {
//                    var materialCode = Ext.ComponentQuery.query("textfield[id=MaterialExceptionLog_materialCode]")[0].getValue();
//                    var store =  Ext.StoreManager.lookup('MaterialExceptionLogStore');
//                    store.getProxy().setExtraParam('materialCode',materialCode);
//                    store.load();
//                }
//            },
//            'button[id=MaterialExceptionLog_AddBtn]': {
//                click: function() {
//                    alert('add');
//                }
//            }
//        });
    },
    views: ['App.view.material.MaterialGrid'],
    stores: ['App.store.MaterialStore'],
    models: ['App.model.MaterialModel']
});