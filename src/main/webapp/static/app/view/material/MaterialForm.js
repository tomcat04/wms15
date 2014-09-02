/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('App.view.material.MaterialForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.materialForm',
    frame: true,
    items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Your Name',
            labelStyle: 'font-weight:bold;padding:0',
            layout: 'hbox',
            defaultType: 'textfield',
            fieldDefaults: {
                labelAlign: 'top'
            },
            items: [{
                    flex: 1,
                    name: 'firstName',
                    fieldLabel: 'First',
                    allowBlank: false
                },
                {
                    width: 30,
                    name: 'middleInitial',
                    fieldLabel: 'MI',
                    margins: '0 0 0 5'
                },
                {
                    flex: 2,
                    name: 'lastName',
                    fieldLabel: 'Last',
                    allowBlank: false,
                    margins: '0 0 0 5'
                }]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Your Email Address',
            vtype: 'email',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Subject',
            allowBlank: false
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Message',
            labelAlign: 'top',
            height: 120,
            margin: '0',
            allowBlank: false
        }],
    buttons: [{
            text: 'Cancel'
        },
        {
            text: 'Send'
        }],
    initComponent: function() {
        console.info('MaterialForm.initComponent');
        this.callParent();
    }
});