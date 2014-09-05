/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.domain;

/**
 *
 * @author cgx1844568
 * @date 2014-8-18
 * @time 11:11:43
 *
 */
public enum OrderType {
    FRANK("The given name of me"),
    LIU("The family name of me");
    private final String context;

    String getContext() {
        return this.context;
    }

    private OrderType(String context) {
        this.context = context;
    }

    public static void main(String[] args) {
        for (OrderType name : OrderType.values()) {
            System.out.println(name + " : " + name.getContext());
        }
        System.out.println(OrderType.FRANK.getDeclaringClass());
        Order order = new Order();
        order.setPrice(OrderType.LIU);
        System.out.println("--------: " + order.getPrice());
        
        String s = System.getenv("TOMCAT_HOMTE");
        System.out.println("ssssssssssssssssss" + s);
    }
}
