/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.xopera.center.controller;

import com.byd.test.domain.Order;
import com.byd.test.services.OrderService;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author cgx1844568
 * @date 2014-5-7
 * @time 13:47:30
 *
 */
@Controller
@RequestMapping("xopera")
public class UploadFile {
    
    @Resource
    private OrderService orderService;
    
    @RequestMapping("forwardUploadFile")
    public ModelAndView helloworld(HttpServletRequest req){
        List<Order> orderList = null;
        try {
            orderList = orderService.selectAll();
            System.out.println("orderList.size    " + orderList.size());
        } catch (Exception ex) {
            Logger.getLogger(UploadFile.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("sdddddds");
        ModelAndView mv = new ModelAndView();
        mv.setViewName("center/uploadFile");
        mv.addObject("size",orderList.size());
        return mv;
    }
    
    @RequestMapping("test")
    public String test(){
        List<Order> orderList = null;
        try {
            orderList = orderService.selectAll();
            System.out.println("orderList.size    " + orderList.size());
        } catch (Exception ex) {
            Logger.getLogger(UploadFile.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "hello";
    }
    
    /**
     * 测试ajax返回值
     * @return 
     */
    @RequestMapping(value="testAjax", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> testAjax(){
        Map<String,Object> map = new HashMap();
        map.put("count", 12521);
        Order order = new Order("小苹果","ddd");
        List<Order> list = new ArrayList<>();
        Order order1 = new Order("hsjhg","332121");
        list.add(order);
        list.add(order1);
        map.put("list", list);
        return map;
    }
}
