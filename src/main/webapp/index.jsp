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
        <script>
            $(document).ready(function(){
                
              $("#plantCode").focusin(function(){
//                  $( "div" ).text( "focusin" ).show().fadeOut( 1000 );
                  $( "#showornot" ).text( "focusin" ).show().fadeOut( 1000 );
                  if(document.getElementById("plantCode").innerHTML.toString().length > 1){
                      $( "#showornot" ).text( "xxxxxx" ).show().fadeOut( 1000 );
                  }
              });
              $("#plantCode").focusout(function(){
                  $( "#showornot" ).text( "focusout" ).show().fadeOut( 1000 );
              });
            });
        </script>
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <br><p>测试javascript</p><br><br>
        <div id="baidu_png">
            <img class="baidu_png" src="<c:url value="/static/png/favicon.png"/>"/>
        </div>
        <br>
        <div class="input-control text" >
            输入框<input id="plantCode" name="plantCode" type="text"/>
            <div id="showornot"></div>
        </div><br><br>
        <button id="btn1">显示文本</button>
        <%--<c:redirect url="/app/index/helloworld" />--%>
        <a href="app/index/helloworld">helloworld</a> &nbsp;&nbsp;&nbsp;
        <a href="app/index/opera">opera</a><br><br><br>
        
        <style>
            .input{position:relative;}
            .input .x{display:none;text-decoration:none;position:absolute;left:190px;color:blue;font-weight:bold}
        </style>
        <div class="input">
            <a href="#" class="x" onclick="return clearInput(this)">X</a>
            <input type="text" style="width:200px" onkeyup="xShow(this)" />
        </div>
        <script type="text/javascript">
            function clearInput(a) {
                a.parentNode.getElementsByTagName('input')[0].value = '';
                a.style.display = 'none'; 
                return false;
            }
            function xShow(ipt) {
                ipt.parentNode.getElementsByTagName('a')[0].style.display = ipt.value == '' ? 'none' : 'block'
            }
        </script>
    </body>
</html>
