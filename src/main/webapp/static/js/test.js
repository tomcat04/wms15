console.info("js start work!");
Ext.onReady(function() {
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
    var pnNorth = Ext.create('Ext.Panel',{
        id:'pnNorth',
        title: 'title test',
        autoWidth: true,
        heigth: 300,
        split: true,
        region: 'north',
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
                items: button1
            }
        ]
    });
    var store = Ext.create('Ext.data.TreeStore', {
        // 根节点的参数是parentId
        nodeParam: 'parentId',
        autoLoad: true,
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
            expanded: true
        }
    });
    var treePanelApp = Ext.create('Ext.tree.Panel', {
        animate:true,
        title: '菜单',
        region: 'west',
        collapsible: false,
        split: true,
        heigth: 'auto',
        width: 280,
        rootVisible: false,
        useArrows : true,  
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
    //treePanelApp.on("itemclick", function(view,record,item,index,e) {
    treePanelApp.on("itemclick", function(view,record,item,index,e) {
        console.info("------------------" + record.id);
    });
});