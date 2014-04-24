/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

import com.byd.test.domain.Order;
import com.byd.test.mapper.OrderMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 *
 * @author cgx1844568
 * @date 2014-4-24
 * @time 10:11:24
 *
 */
@Service
public class OrderService {
    @Resource
    private OrderMapper orderMapper;

    public OrderMapper getOrderMapper() {
        return orderMapper;
    }

    public void setOrderMapper(OrderMapper orderMapper) {
        this.orderMapper = orderMapper;
    }

    public void test(){
        Order order= orderMapper.getOrderByOrderId("20");
        System.out.println("order :  " + order.getPrice());
        System.out.println("OrderService.test");
    }

}
