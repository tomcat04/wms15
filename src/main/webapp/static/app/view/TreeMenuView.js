/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.view.TreeMenuView", {
    extend: "Ext.tree.Panel",
    alias : 'widget.mytree',
    heigth: 'auto',
    rootVisible: false,
    width: 200,
    store: 'Ext.data.TreeStore',
    initComponent: function() {
        this.store = Ext.widget('treeMenuStore');
        this.callParent();
    },
    border: false
});