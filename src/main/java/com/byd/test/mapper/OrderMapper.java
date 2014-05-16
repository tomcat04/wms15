/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.mapper;

import com.byd.test.domain.Order;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 *
 * @author cgx1844568
 * @date 2014-4-24
 * @time 10:38:16
 *
 */
public interface OrderMapper {
    Order getOrderByOrderId(String orderId);
    void insertOrder(Order order) throws Exception;
    void deleteOrderByOrderId(String orderId);
    List<Order> selectAllOrder();
    List<Order> selectOrderByPaging(Map map);
    void updateOrderByOrderId(Order order);
    void performPro(Map map);
}
