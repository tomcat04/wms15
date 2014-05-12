/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

import com.byd.test.domain.Order;
import com.byd.test.mapper.OrderMapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
//        Order order= orderMapper.getOrderByOrderId("20");
//        System.out.println("order :  " + order.getPrice());
        
//        orderMapper.insertOrder(new Order("bd3","a"));
//        
//        orderMapper.deleteOrderByOrderId("20");
//        List<Order> orderList = orderMapper.selectAllOrder();
//        System.out.println("orderList.size() = " + orderList.size());
        Map map = new HashMap();
        Order order10 = new Order();
        order10.setPrice("a");
        map.put("price", "a");
        map.put("start", "3");
        map.put("end", "5");
        List<Order> orderList = orderMapper.selectOrderByPaging(map);
        System.out.println("orderList.size() = " + orderList.size());
        //orderMapper.updateOrderByOrderId(new Order("AA","Tt"));
        
        System.out.println("OrderService.test");
    }
    public List<Order> selectAll(){
        return orderMapper.selectAllOrder();
    }

}
