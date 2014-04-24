/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.services;

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
public class IndexController {
    
    @RequestMapping("helloworld")
    public String helloworld(){
        System.out.println("lalalallalaallalahahhahahahhawawawaawawawawa");
        return "success";
    }
}
