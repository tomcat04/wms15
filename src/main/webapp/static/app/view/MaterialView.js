/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.MaterialView', {
    extend: 'Ext.Panel',
    alias: 'widget.materialTab',
    items:[
        {
            xtype: 'materialForm',
            layout:'fit'
        },
        {
            xtype: 'materialGrid'
        }
    ]
});