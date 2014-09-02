/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.ViewportController', {
    extend: 'Ext.app.Controller',
    //将Viewport.js添加到控制器
    views:[
        'App.view.Viewport',
        'App.view.TreeMenuView',
        'App.view.material.MaterialForm',
        'App.view.material.MaterialGrid'
    ],
    stores:[
        'App.store.TreeMenuStore'
    ],
    models:[
        'App.model.TreeMenuModel'
    ],
    init: function() {
        console.info('ViewportController.init');
    }
});