/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.model.TreeMenuModel',{
    extend:'Ext.data.Model',
    fields:[
        {name:'id',type:'int'},
        {name:'pid',type:'int'},
        {name:'text',type:'varchar'},
        {name:'leaf',type:'boolean',defaultValue:true},
        {name:'url',type:'varchar'}
    ]
});