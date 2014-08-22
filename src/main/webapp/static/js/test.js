console.info("js start work!");
Ext.onReady(function() {
    var button = Ext.create('Ext.Button', {
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
    //var input = Ext.create();
    var pnNorth = Ext.create('Ext.Panel',{
        id:'pnNorth',
        title: 'title test',
        autoWidth: true,
        heigth: 300,
        split: true,
        //frame: true,
        region: 'north',
        items:button
    });
    var pnWest = Ext.create('Ext.Panel',{
        title: '菜单项',
        width: 300,
        heigth: 'auto',
        split: true, //显示分隔条
        region: 'west',
        collapsible: false, //收拢按钮
        html: '这里放置页头内容'

    });
    var pnCenter = Ext.create('Ext.TabPanel', {
        region: 'center',
        activeTab: 0,
        items: [
            {
                title: '收件箱',
                authHeight: true,
                closable: true, //是否可关闭
                html: '这里显示所收邮件。。。'
            }
        ]
    });
    
    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            children: [{
                    text: '应用程序管理',
                    expanded: false,
                    children: [{
                            text: '应用程序管理',
                            id: 'appManage',
                            leaf: true
                        }],
                    listeners : {  
                            click : function(node,e){  
                                mainPanel.load({  
                                    url:'node/',
                                    callback : function(){  
                                        mainPanel.setTitle(node.text);  
                                    },  
                                    scripts: true  
                                });  
                            }  
                        }  
                }, {
                    text: '页面配置管理',
                    expanded: false,
                    children: [{
                            text: '页面配置管理',
                            id: 'configManage',
                            leaf: true
                        }, {
                            text: ' 页面按钮配置',
                            id: 'buttonManage',
                            leaf: true
                        }]
                }, {
                    text: '用户管理',
                    expanded: false,
                    children: [{
                            text: '用户管理',
                            id: 'userManage',
                            leaf: true
                        }, {
                            text: '权限管理',
                            id: 'rowManage',
                            leaf: true
                        }]
                }, {
                    text: '任务管理',
                    expanded: false,
                    children: [{
                            text: '任务管理',
                            id: 'taskMange',
                            leaf: true
                        }]
                }]
        }
    });
    var treePanelApp = Ext.create('Ext.tree.Panel', {
//        id: 'tree-panel',
//        animate:true,
        title: '菜单',
        region: 'west',
        collapsible: false,
        split: true,
        heigth: 'auto',
        width: 280,
        rootVisible: false,
//        store: store
        root: {
            text: "Root node",
            expanded: true,
            children: [
                { text: "Child 1", leaf: true },
                { text: "Child 2", leaf: true }
            ]
        }
    });
    Ext.create('Ext.Viewport', {
        layout: "border",
        items: [
            pnNorth,
            treePanelApp,
            pnCenter
        ]
    });
});