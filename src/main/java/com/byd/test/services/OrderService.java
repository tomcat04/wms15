/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

import com.byd.test.domain.Order;
import com.byd.test.mapper.OrderMapper;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        try {
            Map map = new HashMap();
            Order order10 = new Order();
            order10.setPrice("a");
            order10.setOrderId((new Date()).toString());
            //List<Order> orderList = orderMapper.selectOrderByPaging(map);
            orderMapper.insertOrder(order10);
            Order o2 = new Order();
            o2.setOrderId("a");
            o2.setPrice("b");
            orderMapper.insertOrder(o2);
            //System.out.println("orderList.size() = " + orderList.size());
            //orderMapper.updateOrderByOrderId(new Order("AA","Tt"));

            System.out.println("OrderService.test");
        } catch (Exception ex) {
            System.out.println("" + ex.getMessage());
        }
    }
    public List<Order> selectAll(){
        return orderMapper.selectAllOrder();
    }
    public void perform(Map map){
        orderMapper.performPro(map);
    }

}
