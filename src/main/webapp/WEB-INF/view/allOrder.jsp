<%-- 
    Document   : allOrder
    Created on : 2014-5-9, 14:17:40
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
        <h1>显示全部Order</h1><br>
        ${msg}<br><br>
        <table>
        <c:forEach  items="${ooolist}" var="item">
            <td>
                <td><c:out value="${item.orderId}"></c:out></td>
                <td><c:out value="${item.price}"></c:out></td>
                <td><img id="pic" src="/test/static/png/favicon.png" onclick="clearInput(this)"/></td>
            </tr>
        </c:forEach>
    </table>
    </body>
</html>
