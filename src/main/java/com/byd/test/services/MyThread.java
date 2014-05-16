/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

import com.byd.test.services.OrderService;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;

/**
 *
 * @author cgx1844568
 * @date 2014-5-12
 * @time 16:17:25
 *
 */
public class MyThread implements Runnable{

    @Resource
    private OrderService orderService;
    @Override
    public void run() {
        Map map = new HashMap();
        map.put("param1", (new Date()).toString());
        map.put("param2", "chengangxiong");
        try {
            orderService.perform(map);
            System.out.println("MyThread.run暂停：" + new Date());
            Thread.sleep(0);
            System.out.println("MyThread.run继续：" + new Date());
        } catch (InterruptedException ex) {
            Logger.getLogger(MyThread.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
