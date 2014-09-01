/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.TreeMenuController', {
    extend: 'Ext.app.Controller',
//    alias : 'widget.TreeMenuController',
    views: [
        'TreeMenuView'
    ],
    stores: [
        'TreeMenuStore'
    ],
    init: function() {
        console.info("TreeMenuController.init");
        this.control({
            'TreeMenuView': {
                itemclick: function(view, record, item, index, e, eOpts) {
                    console.info('index: ' + index);
                }
            }
        });
    }
});