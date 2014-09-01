/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.controller.TreeMenuController', {
    extend: 'Ext.app.Controller',
    views: [
        'App.view.TreeMenuView'
    ],
//    stores: [
//        'App.store.TreeMenuStore'
//    ],
    init: function() {
        console.info("TreeMenuController.init");
        this.control({
            'mytree': {
                itemclick: function(view, record, item, index, e, eOpts) {
                    var recordid = record.raw.id;
                    var leaf = record.raw.leaf;
                    if(leaf){
                        console.log(recordid + ' is leaf');
                    }
                }
            }
        });
        function create(recordid){
            console.log('create : ' + recordid);
        };
    }
});