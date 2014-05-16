<%-- 
    Document   : success
    Created on : 2014-4-24, 9:30:05
    Author     : cgx1844568
--%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <form:form commandName="order">
    <table>
        <tr>
            <td>First Name:</td>
            <td><form:input path="orderId" /></td>
        </tr>
        <tr>
            <td>Last Name:</td>
            <td><form:input path="price" /></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="Save Changes" />
            </td>
        </tr>
    </table>
</form:form>
    </body>
</html>
