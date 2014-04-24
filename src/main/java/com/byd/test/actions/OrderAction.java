/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.actions;

import com.byd.test.services.OrderService;
import java.util.Date;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author cgx1844568
 * @date 2014-4-24
 * @time 9:17:24
 *
 */
@Controller
@RequestMapping("index")
public class OrderAction {
    
    @Resource
    private OrderService orderService;

    @RequestMapping("helloworld")
    public String helloworld(){
        
        System.out.println("lalalallalaallalahahhahahahhawawawaawawawawa");
        orderService.test();
        System.out.println("ioioioioioioiioiioioioiioioioioioioioioioio" + new Date());
        return "success";
    }
}
