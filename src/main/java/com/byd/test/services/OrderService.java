/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

import com.byd.test.domain.Order;
import com.byd.test.domain.OrderType;
import com.byd.test.mapper.OrderMapper;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
    
//    private Scheduler scheduler;
//
//    public Scheduler getScheduler() {
//        return scheduler;
//    }
//
//    public void setScheduler(Scheduler scheduler) {
//        this.scheduler = scheduler;
//    }

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
            order10.setPrice(OrderType.FRANK);
            order10.setOrderId((new Date()).toString());
            //List<Order> orderList = orderMapper.selectOrderByPaging(map);
            orderMapper.insertOrder(order10);
            Order o2 = new Order();
            o2.setOrderId("a");
            o2.setPrice(OrderType.LIU);
            orderMapper.insertOrder(o2);
            //System.out.println("orderList.size() = " + orderList.size());
            //orderMapper.updateOrderByOrderId(new Order("AA","Tt"));

            System.out.println("OrderService.test");
        } catch (Exception ex) {
            System.out.println("" + ex.getMessage());
        }
    }
    @Transactional
    public List<Order> selectAll() throws Exception{
        Order order = new Order("10","55");
//        orderMapper.insertOrder(order);
//        orderMapper.insertOrder(order);
        return orderMapper.selectAllOrder();
    }
    public void perform(Map map){
        orderMapper.performPro(map);
    }
    public void quartz(){
        System.out.println("com.byd.test.services.OrderService.quartz  " + new Date());
    }

//    public void resetJobTime(String cronExpression) throws SchedulerException, ParseException{
//         CronTriggerBean trigger =  (CronTriggerBean)scheduler.getTrigger("dispatchingBillCreatorTrigger",Scheduler.DEFAULT_GROUP);
//        String originConExpression = trigger.getCronExpression();
//        // 如果相等，则表示用户并没有重新设定数据库中的任务时间，这种情况不需要重新rescheduleJob  
//        if(!originConExpression.equalsIgnoreCase(cronExpression)){  
//            trigger.setCronExpression(cronExpression);  
//            scheduler.rescheduleJob("dispatchingBillCreatorTrigger", Scheduler.DEFAULT_GROUP, trigger);  
//        }  
//    }
}
