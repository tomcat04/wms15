/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.domain;

import java.io.Serializable;

/**
 *
 * @author cgx1844568
 * @date 2014-4-24
 * @time 10:08:34
 *
 */
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;
    
    private String orderId;
    private String price;
    
    public Order(){}
    public Order(String orderId,String price){
        this.orderId = orderId;
        this.price = price;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(OrderType price) {
        this.price = price.getContext();
    }
    
}
