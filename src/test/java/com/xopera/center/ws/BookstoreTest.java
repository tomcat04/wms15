/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.xopera.center.ws;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

/**
 *
 * @author cgx1844568
 */
public class BookstoreTest {
    
    private static final String serverUri = "http://localhost:8080/test/app/items/1/";  
    
    public static void main(String[] args) {
//        System.out.println("****根据id查询用户****");  
         Client client = ClientBuilder.newClient();// 注册json 支持  
         WebTarget target = client.target(serverUri + "");  
         Response response = target.request().get();  
         String user = response.readEntity(String.class);  
         System.out.println("---:" + user);
//         //System.out.println(user.getUserId() + user.getUserName()  +  user.getAge());  
         response.close();  
        

    }

}
