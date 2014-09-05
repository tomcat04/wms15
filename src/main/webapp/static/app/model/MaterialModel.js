/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("App.model.MaterialModel", {
    extend: "Ext.data.Model",
    fields: [
        {
            name: 'materialCode',
            type: 'string'
        }, {
            name: 'materialDesc',
            type: 'auto'
        }, {
            name: 'imagUrl',
            type: 'string'
        }]
//    idProperty: 'id'// 关系到表格修改数据的获取  
});