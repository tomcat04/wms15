console.info("js start work!");
Ext.onReady(function() {
    var location = (window.location+'').split('/');  
    var basePath = location[0]+'//'+location[2]+'/'+location[3];
    var baseUrl = window.location.host;
    console.info("basePath : " + basePath);
    var button1 = Ext.create('Ext.Button', {
        text: 'Click me',
        handler: function() {
            Ext.Ajax.request({
                    url:'testAjax',
                    headers:{},
                    method:'GET',
                    success: function (response, options) {
                        Ext.MessageBox.alert('成功', '从服务端获取结果: ' + response.responseText);
                    },
                    failure: function (response, options) {
                        Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                    }
                });
        }
    });
    var tb = Ext.create('Ext.Toolbar',{
        items:[{xtype:'label',text:'请输入关键词：'},{xtype:'textfield',id:'KeyWord',emptyText:'输入关键字按Enter搜索'},{text:'搜索',handler:function(){alert("搜索");}}]
    });
    var pnNorth = Ext.create('Ext.Panel',{
        id:'pnNorth',
        //title: 'title test',
        autoWidth: true,
        heigth: 300,
        split: true,
        region: 'north',
        items: button1,//emptyText
        bodyStyle:"padding-right:80px",
        tbar:tb
    });
    var pnCenter = Ext.create('Ext.tab.Panel', {
        plain: true,
        region: 'center',
        activeTab: 0,
        items: [
            {
                title: '首页-不可关闭',
                authHeight: true,
                layout:'fit',
                autoScroll:true,
                closable: false, //是否可关闭
                html:'....'
            }
        ]
    });
    var store = Ext.create('Ext.data.TreeStore', {
        // 根节点的参数是parentId
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
            expanded: true,
            leaf:'root'
        }
    });
    var treePanelApp = Ext.create('Ext.tree.Panel', {
        title: '菜单',
        region: 'west',
        heigth: 'auto',
        width: 280,
        rootVisible: false,
        store : store
    });
    Ext.create('Ext.Viewport', {
        layout: "border",
        items: [
            pnNorth,
            treePanelApp,
            pnCenter
        ]
    });
    treePanelApp.on("itemclick", function(view,record,item,index,e) {
        console.info("------------------" + record.id);
        var n = pnCenter.getComponent(record.id);//判断面板中是否存在该页面
        if(n){
            pnCenter.setActiveTab(n);
        }
        if(!n && record.data.leaf && record.id === '5'){
            var  p =  new  fnPanel();  
            p.id = record.id;  
            p.title = record.data.text;  
            n = pnCenter.add(p); 
            pnCenter.setActiveTab(n);
        }else if(!n && record.data.leaf && record.id === '7'){
            var  p =  new fnPanel2();  
            p.id = record.id;  
            p.title = record.data.text;  
            n = pnCenter.add(p); 
            pnCenter.setActiveTab(n);
        }else if(!n && record.data.leaf && record.id === '8'){
            var  p =  new fnPanel3();  
            p.id = record.id;  
            p.title = record.data.text;  
            n = pnCenter.add(p); 
            pnCenter.setActiveTab(n);
        }else if(!n && record.data.leaf && record.id === '9'){
            var  p =  new fnPanel4();  
            p.id = record.id;  
            p.title = record.data.text;  
            n = pnCenter.add(p); 
            pnCenter.setActiveTab(n);
        }else if(!n && record.data.leaf){
            n = pnCenter.add({
                id : record.id,
                title : record.data.text,
                closable : true,
                html : '<iframe scrolling="no" frameborder="0" width="100%" height="620" src="/wms15/app/xopera/forwardUploadFile"></iframe>'
                });
            pnCenter.setActiveTab(n);
        }
    });
    
    fnPanel = Ext.extend(Ext.Panel, {
        closable: true,
        autoScroll: true,
        //layout: 'fit', //如果用函数来创建该面板的话,布局必须设置为fit,否则不会显示该面板中的内容   
        //创建面板内容   
        createFormPanel: function() {
            return   new Ext.form.FormPanel({
                title:'fnPanel',
                buttonAlign: 'center',
                labelAlign: 'right',
                frame: false,
                bodyBorder: false,
                bodyStyle: 'padding:25px',
                items: [{
                        xtype: 'textfield',
                        fieldLabel: '用户名',
                        width: 350,
                        name: 'username'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: '密　码',
                        width: 350,
                        name: 'password'
                    },{
                        fieldLabel: 'Company',
                        name: 'company'
                    }
                ],
                buttons: [{text: '登陆'}, {text: '取消'}]
            });
      },
        //重装控件初始化函数,在该函数中完成面板中内容的初始化   
        initComponent: function() {
            fnPanel.superclass.initComponent.call(this);
            this.fp = this.createFormPanel();
            this.add(this.fp);
        }
    });  
    
    fnPanel2 = Ext.extend(Ext.Panel, {
        closable: true,
        autoScroll: true,
        layout: 'fit', //如果用函数来创建该面板的话,布局必须设置为fit,否则不会显示该面板中的内容   
        //创建面板内容   
        createFormPanel: function() {
            return new Ext.Panel({
                title: '面板头部（fnPanel2）',
                tbar: ['顶端工具栏(top toolbars)'],
                bbar: ['底端工具栏(bottom toolbars)'],
                applyTo: 'panel',
                html: '<div>面板体（body）</div>',
                buttons: [
                    new Ext.Button({
                        text: '面板底部（footer）'
                    })
                ]
            });
        },
        //重装控件初始化函数,在该函数中完成面板中内容的初始化   
        initComponent: function() {
            fnPanel.superclass.initComponent.call(this);
            this.fp = this.createFormPanel();
            this.add(this.fp);
        }
    });  
    
    fnPanel3 = Ext.extend(Ext.Panel, {
        closable: true,
        autoScroll: true,
        //layout: 'fit', //如果用函数来创建该面板的话,布局必须设置为fit,否则不会显示该面板中的内容   
        //创建面板内容   
        createFormPanel: function() {
            return   new Ext.form.FormPanel({
                title: 'fnPanel3',
                buttonAlign: 'center',
                labelAlign: 'right',
                frame: false,
                bodyBorder: false,
                bodyStyle: 'padding:25px',
                items: [{
                        xtype: 'textfield',
                        fieldLabel: '用户名',
                        width: 350,
                        name: 'username'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: '密　码',
                        width: 350,
                        name: 'password'
                    }],
                buttons: [{text: '登陆'}, {text: '取消'}]
            });
      },
        //重装控件初始化函数,在该函数中完成面板中内容的初始化   
        initComponent: function() {
            fnPanel.superclass.initComponent.call(this);
            this.fp = this.createFormPanel();
            this.add(this.fp);
        }
    });
    
    fnPanel4 = Ext.extend(Ext.Panel, {
        closable: true,
        autoScroll: true,
        //layout: 'fit', //如果用函数来创建该面板的话,布局必须设置为fit,否则不会显示该面板中的内容   
        //创建面板内容   
        createFormPanel: function() {
            return  new Ext.form.FormPanel({
                title: 'fnPanel4',
                bodyPadding: 5,
                width: 'auto',
                heigth: 'auto',
                url: 'testAjax1',
                method: 'GET',
                items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Field',
                        name: 'theField'
                    }],
                buttons: [{ text: 'Submit', handler: function() {
                    // The getForm() method returns the Ext.form.Basic instance:
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        // Submit the Ajax request and handle the response
                        form.submit({
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.message);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                            }
                        });
                    }
                }
            }]
            });
      },
        //重装控件初始化函数,在该函数中完成面板中内容的初始化   
        initComponent: function() {
            fnPanel.superclass.initComponent.call(this);
            this.fp = this.createFormPanel();
            this.add(this.fp);
        }
    });
});