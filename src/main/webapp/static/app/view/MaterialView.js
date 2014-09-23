/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.MaterialView', {
    extend: 'Ext.Panel',
    alias: 'widget.materialTab',
    bodyPadding: 20,
    items:[
        {
            id:'materialForm',
            bodyPadding: 20,
            xtype: 'materialForm',
            height:200
//            layout:'fit'
        },
        {
            xtype: 'materialGrid',
            layout:'fit'
        }
    ]
});