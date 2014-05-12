/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.xopera.center.controller;

import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
    
    @RequestMapping("forwardUploadFile")
    public String helloworld(HttpServletRequest req){
        System.out.println("sdddddds");
        return "center/uploadFile";
    }

}
