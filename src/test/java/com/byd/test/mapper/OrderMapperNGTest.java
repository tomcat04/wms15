/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.mapper;

import com.byd.test.domain.Order;
import java.util.List;
import java.util.Map;
import static org.testng.Assert.*;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

/**
 *
 * @author cgx1844568
 */
public class OrderMapperNGTest {
    
    public OrderMapperNGTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
        
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    @BeforeMethod
    public void setUpMethod() throws Exception {
    }

    @AfterMethod
    public void tearDownMethod() throws Exception {
    }

    /**
     * getOrderByOrderId方法的测试 (属于类OrderMapper)。
     */
    @Test
    public void testGetOrderByOrderId() {
        System.out.println("getOrderByOrderId");
        String orderId = "";
        OrderMapper instance = new OrderMapperImpl();
        Order expResult = null;
        Order result = instance.getOrderByOrderId(orderId);
        assertEquals(result, expResult);
        // TODO 检查生成的测试代码并删除失败的默认调用。
        fail("\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u539f\u578b\u3002");
    }

    /**
     * insertOrder方法的测试 (属于类OrderMapper)。
     */
    @Test
    public void testInsertOrder() {
        System.out.println("insertOrder");
        Order order = null;
        OrderMapper instance = new OrderMapperImpl();
        instance.insertOrder(order);
        // TODO 检查生成的测试代码并删除失败的默认调用。
        fail("\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u539f\u578b\u3002");
    }

    /**
     * deleteOrderByOrderId方法的测试 (属于类OrderMapper)。
     */
    @Test
    public void testDeleteOrderByOrderId() {
        System.out.println("deleteOrderByOrderId");
        String orderId = "";
        OrderMapper instance = new OrderMapperImpl();
        instance.deleteOrderByOrderId(orderId);
        // TODO 检查生成的测试代码并删除失败的默认调用。
        fail("\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u539f\u578b\u3002");
    }

    /**
     * selectAllOrder方法的测试 (属于类OrderMapper)。
     */
    @Test
    public void testSelectAllOrder() {
        System.out.println("selectAllOrder");
        OrderMapper instance = new OrderMapperImpl();
        List expResult = null;
        List result = instance.selectAllOrder();
        assertEquals(result, expResult);
        // TODO 检查生成的测试代码并删除失败的默认调用。
        fail("\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u539f\u578b\u3002");
    }

    /**
     * selectOrderByPaging方法的测试 (属于类OrderMapper)。
     */
    @Test
    public void testSelectOrderByPaging() {
        System.out.println("selectOrderByPaging");
        Map map = null;
        OrderMapper instance = new OrderMapperImpl();
        List expResult = null;
        List result = instance.selectOrderByPaging(map);
        assertEquals(result, expResult);
        // TODO 检查生成的测试代码并删除失败的默认调用。
        fail("\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u539f\u578b\u3002");
    }

    public class OrderMapperImpl implements OrderMapper {

        public Order getOrderByOrderId(String orderId) {
            return null;
        }

        public void insertOrder(Order order) {
        }

        public void deleteOrderByOrderId(String orderId) {
        }

        public List<Order> selectAllOrder() {
            return null;
        }

        public List<Order> selectOrderByPaging(Map map) {
            return null;
        }
    }
    
}
