/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.UserListController',{
    extend:'Ext.app.Controller',
    views:[
        'App.view.UserListView'
    ],
    init:function(){
        console.info('UserListController.init');
    },
    onPanelRendered:function(){
        console.info('UserListController.onPanelRendered');
    }
});