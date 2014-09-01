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
    width: 280,
    initComponent: function() {
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
                nodeParam: 'parentId',
                proxy: {
                    method: 'GET',
                    type: 'ajax',
                    url: 'testMenu',
                    reader: {
                        type: 'json',
                        root: 'menuList'
                    }
                },
                root: {
                    text: '根节点',
                    id: '-1',
                    parentId: '-1',
                    leaf:false,
                    expanded: false
                }
            })
        });
        this.callParent();
    },
    border: false
});