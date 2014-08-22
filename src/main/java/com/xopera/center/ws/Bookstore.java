/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.xopera.center.ws;

import com.byd.test.domain.Order;
import java.util.Map;
import java.util.TreeMap;
import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author cgx1844568
 * @date 2014-8-11
 * @time 14:55:53
 *
 */
//@Path("/")
//@Singleton
//@Produces("text/html;qs=5")
//@XmlRootElement
//@XmlAccessorType(XmlAccessType.FIELD)
public class Bookstore {
    private final Map<String, Order> orders = new TreeMap<>();
    public Bookstore(){
        orders.put("2", new Order("2","aaa"));
        orders.put("3", new Order("3","bbbb"));
        orders.put("4", new Order("4","ccccc"));
        
    } 
    
//    @GET
//    @Path("items/{itemid}/")
//    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
//    public String getItem(@PathParam("itemid") String itemid) {
////        Order order = orders.get(itemid);
////        if (order == null) {
////            throw new NotFoundException(Response
////                    .status(Response.Status.NOT_FOUND)
////                    .entity("Item, " + itemid + ", is not found")
////                    .build());
////        }
////        return order;
//        System.out.println("-*-*-*-*-*- : " + itemid);
//        return "hello";
//    }

}
