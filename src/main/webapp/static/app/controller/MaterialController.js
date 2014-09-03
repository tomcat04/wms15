/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.MaterialController', {
    extend: 'Ext.app.Controller',
    views: ['App.view.material.MaterialForm'],
    stores: ['MaterialStore'],
    models: ['App.model.MaterialModel'],
    init: function() {
        console.log('MaterialController.init');
        this.control({
            'button[name=searchMaterial]': {
                click: function() {
//                    var materialCode = Ext.ComponentQuery.query("textfield[id=MaterialExceptionLog_materialCode]")[0].getValue();
//                    var store =  Ext.StoreManager.lookup('MaterialExceptionLogStore');
//                    store.getProxy().setExtraParam('materialCode',materialCode);
//                    store.load();
                    console.log('MaterialController.search.click');
                    //var form = Ext.widget('materialForm');//Ext.getCmp('App.view.material.MaterialForm');
                    var form = Ext.getCmp('materialForm');
                    if (form.isValid()) {
                        form.submit({
                            clientValidation: true,
                            url: 'testFormSubmit',
                            type: 'rest',
//                waitTitle: '请稍等...',  
//                waitMsg: '正在提交信息...',  
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.materialList);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failue', action.result.materialList);
                            }
                        });
                    }
                }
            }
        });
    }

});