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
        $(function(){
            console.info("www");
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
