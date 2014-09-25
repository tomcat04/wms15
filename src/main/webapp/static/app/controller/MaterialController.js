/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.MaterialController', {
    extend: 'Ext.app.Controller',
    views: [
        'App.view.material.MaterialForm',
        'App.view.material.MaterialGrid',
        'App.view.material.AddForm'
    ],
    stores: ['MaterialStore'],
    models: ['App.model.MaterialModel'],
    init: function() {
        var win = Ext.create('Ext.window.Window',{
                        title: 'Hello',
                        height: 200,
                        width: 400,
                        layout: 'fit',
                        items:{
                            id:'addForm',
                            xtype:'addForm'
                        }
                    });
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
                    var params = form.items.items;
                    var store =  Ext.StoreManager.lookup('MaterialStore');
                    store.getProxy().setExtraParam('materialCode',form.getValues().materialCode);
                    store.getProxy().setExtraParam('materialDesc',form.getValues().materialDesc);
//                    store.getProxy().setExtraParam('material',Ext.JSON.encode(form.getValues()));
                    store.load();
                    /*if (form.isValid()) {
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
                    }*/
                }
            },
            'button[name=add]': {
                click: function() {
                    console.info('add button');
//                    var form = Ext.getCmp('addForm');
//                    form.reset();
                    win.show();
                }
            },
            'button[name=submit]': {
                click: function() {
                    var form = Ext.getCmp('addForm');
                    if (form.isValid()) {
                        form.submit({
                            clientValidation: true,
                            url: 'formSubmit',
                            type: 'rest',
                            waitTitle: '请稍等...',  
                            waitMsg: '正在提交信息...',  
                            success: function(form, action) {
                                if(action.result.success){
                                    console.info('shangchaun chenggong');
                                }else{
                                    console.info('shangchuan shibai');
                                }
                                //Ext.Msg.alert('Success', action.result.materialList);
                            },
                            failure: function(form, action) {
                                //Ext.Msg.alert('Failue', action.result.materialList);
                            }
                        });
                    }
                    win.hide();
                    var store =  Ext.StoreManager.lookup('MaterialStore');
                    store.reload();
                }
            }
        });
    }

});