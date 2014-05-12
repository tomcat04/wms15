<%-- 
    Document   : index
    Created on : 2014-4-24, 9:28:18
    Author     : cgx1844568
--%>

<%--<%@page contentType="text/html" pageEncoding="UTF-8"%>--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>  
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!--<script src="${application.getContextPath()}/static/js/jquery-1.11.0.min.js" type="text/javascript"></script>-->
        <script type="text/javascript" src="<c:url value="/static/js/jquery-1.11.0.min.js" />"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <a href="app/xopera/forwardUploadFile">xopera main</a><br><br>
        <a href="app/index/showAll">showAll</a><br><br>
        <a href="app/index/createCookie">createCookie</a><br><br>
        测试Ajax<img id="test" src="static/png/favicon.png" onclick="testAjax()"/><div id="ajaxShow"></div>
        <a href="app/index/getCookie">getCookie</a><br><br>
        <a href="app/index/helloworld">helloworld</a> &nbsp;&nbsp;&nbsp;
        <a href="app/index/opera">opera</a><br>
    这是一个输入框
    <div class="yes">
        <input id="plantCode" type="text" onkeyup="yShow()"/>
        <img id="pic" hidden="hidden" src="static/png/favicon.png" onclick="clearInput(this)"/>
    </div>
    <div id="hello"></div>
    <div id="world"></div>
    <script>
        function testAjax(){
            console.info("测试ajax");
            //var menuId = $( "ul.nav" ).first().attr( "id" );
            $.ajax({
              url: "app/index/testAjax",
              contentType : "application/json",
              processData : true,
              type: "POST",
              data: null,
              dataType: "json",
              timeout: 5000,
            
            beforeSend: function (XMLHttpRequest) {
                $('#ajaxShow').text("正在查询");
            },
            success: function (data) {
                console.info(data.order.price);
                $('#ajaxShow').text("查询成功");
                //console.info(data.orderId);
            },
            error: function (err) {
                $('#ajaxShow').text("查询失败");
                console.info(err);
            }
            });
//            request.done(function( msg ) {
//                console.info("done");
//                console.info("msg ： " + msg);
//              $( "#log" ).html( msg );
//            });
//            request.fail(function( jqXHR, textStatus ) {
//                console.info("fail");
//              alert( "Request failed: " + textStatus );
//            });
        }
    </script>
    <script>
        $(function(){
            if(window.console&&window.console.log){
                console.log("www");
            }
            
            $("#plantCode").focusin(function(){
                //$("#plantCode").
                   var a = $("#plantCode").val().length;
                   console.info("999:" + a);
                   if(a > 0){
                       $("#pic").show();
                   }
                   if(a <= 0){
                       $("#pic").hide();
                   }
            });
            $("#plantCode").focusout(function(){
                console.info("失去焦点");
    //              $("#pic").hide();
            });
            $("#pic").click(function(){
                  console.info("input size: " + $("#ploanCode").width());
                  console.info("pic.size : " + $("#pic").width());
                  console.info("dddddd");
                  $( "#world").text("focusout").show().fadeOut(1000);
                });
            });
        function yShow() {
            console.info("ddddd222eeee");
            var s = $("#plantCode").val().length;
            if (s > 0) {
                $("#pic").show();
            }
            else {
                $("#pic").hide();
            }
        }
        function clearInput(a) {
            console.info("清空输入");
            a.parentNode.getElementsByTagName('input')[0].value = '';
        }
    </script>
    <div id="foo">FOO!</div>

    ------------------------<br>
</body>
</html>
