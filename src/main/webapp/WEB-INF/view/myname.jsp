<%-- 
    Document   : myname
    Created on : 2014-5-5, 14:30:25
    Author     : cgx1844568
--%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <br>${bean.user}<br>
        ${bean.word}<br>
        ${bean.order.orderId}
        <form id="form" action="/test/app/index/xopera" method="get">
            <input id="plantCode" name="plantCode" type="text" />
            <input type="submit" id="submit" value="anniu">
        </form>
        <form id="form1" action="/test/app/index/testGet" method="get">
            <input id="plantCode" name="plantCode" type="text" />
            <input type="submit" id="submit" value="anniu">
        </form>
        <form id="form2" action="/test/app/index/testPost" method="post">
            <input id="orderId" name="orderId" type="text" />
            <input id="price" name="price" type="text" />
            <input type="submit" id="submit" value="anniu">
        </form>
        <form id="form3" action="/test/app/index/transferAttr" method="post">
            <input id="orderId" name="orderId" type="text" />
            <input id="price" name="price" type="text" />
            <input type="submit" id="submit" value="anniu" />
        </form>
        
        <!--<a href="/test/app/index/xopera">xiazai</a>-->
    </body>
</html>
