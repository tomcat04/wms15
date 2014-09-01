/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("app.view.TreeMenu", {
    extend: "Ext.tree.Panel",
    alias : 'widget.TreeMenu',
//    title: 'Simple Tree',
//    width: 200,
//    forceFit: true,
//    id: "treeMenu",
    heigth: 'auto',
    store: 'TreeMenuStore',
    rootVisible: false,
    constructor: function(config) {
        this.callParent(arguments); // calls Ext.tip.ToolTip's constructor
        //...
    },
    border: false
//    renderTo: Ext.getBody()
});