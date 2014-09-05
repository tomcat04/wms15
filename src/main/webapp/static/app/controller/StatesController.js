/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.StatesController',{
    extend:'Ext.app.Controller',
    //stores: ['StatesStore'],
    models: ['App.model.StatesModel'],
    views:[
       // 'App.view.UserListView'
    ],
    init:function(){
        this.control({
            'combobox[name=state]': {
                change: function() {
                    console.info('states combobox change');
                }
            }
        });
        console.info('StatesController.init');
    }
});