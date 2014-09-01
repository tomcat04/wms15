/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.DefaultMainController',{
    extend:'Ext.app.Controller',
    views:[
        'App.view.DefaultMainView'
    ],
    init:function(){
        console.info('DefaultMainController.init');
        this.control({
            'mytree': {
                
            }
        });
    },
    onPanelRendered:function(){
        console.info('DefaultMainController.onPanelRendered');
    }
});