/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.actions;

import com.byd.test.services.OrderService;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
        orderService.test();
        System.out.println("ioioioioioioiioiioioioiioioioioioioioioioio" + new Date());
        return "success";
    }
    @RequestMapping("opera")
    public ModelAndView opera(HttpServletRequest req,HttpServletResponse res){
        ModelAndView mav = new ModelAndView();
        Map map = new HashMap();
        map.put("user", "tomcat04");
        map.put("word", "xopera");
        mav.setViewName("myname");
        mav.addObject("bean", map);
        return mav;
    }
    @RequestMapping("xopera")
    public ModelAndView xopera(HttpServletRequest req,HttpServletResponse res){
        String s = (String) req.getAttribute("plantCode");
        System.out.println("plantCode:  " + s);
        return new ModelAndView("myname");
    }
}
