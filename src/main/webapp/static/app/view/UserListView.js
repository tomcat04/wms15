/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.UserListView', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',
    title: '预留区域',
    initComponent: function() {
//        this.store = {
//            fields: ['name', 'email'],
//            data: [
//                {name: 'Ed', email: 'ed@sencha.com'},
//                {name: 'Tommy', email: 'tommy@sencha.com'}
//            ]
//        };
//
        this.columns = [
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];
        this.callParent(arguments);
    }
});