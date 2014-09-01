/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('app.controller.TreeMenuController', {
    extend: 'Ext.app.Controller',
    views: [
        'TreeMenu'
    ],
    stores: [
        'MenuStore'
    ],
    init: function() {
        this.control({
            'TreeMenuView': {
                itemclick: function(view, record, item, index, e, eOpts) {
                    console.info('index: ' + index);
                }
            }
        });
    }
});