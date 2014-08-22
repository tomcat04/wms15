/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.byd.test.actions;

import com.byd.test.domain.Order;
import com.byd.test.services.MyThread;
import com.byd.test.services.OrderService;
import java.io.IOException;
import java.io.OutputStream;
import java.text.ParseException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.scheduling.quartz.CronTriggerBean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.ContextLoader;
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
    @Resource
    private MyThread myThread;

    @RequestMapping("helloworld")
    public String helloworld(Model model){
        Logger.getLogger(OrderAction.class.getName()).log(Level.WARNING, "","");
        orderService.test();
        System.out.println("ioioioioioioiioiioioioiioioioioioioioioioio" + new Date());
        Order order = new Order("D","G");
        model.addAttribute(order);
        return "success";
    }
    @RequestMapping("opera")
    public ModelAndView opera(HttpServletRequest req,HttpServletResponse res){
        ModelAndView mav = new ModelAndView();
        Map map = new HashMap();
        Order order = new Order("123","456");
        map.put("user", "tomcat04");
        map.put("word", "xopera");
        map.put("order", order);
        mav.setViewName("myname");
        mav.addObject("bean", map);
        return mav;
    }
    @RequestMapping("xopera")
    public ModelAndView xopera(HttpServletRequest request,HttpServletResponse response){
        try {
            OutputStream out = response.getOutputStream();
            response.reset();
            response.setHeader("content-disposition","attachment;filename=" + "fileName.xls");
            response.setContentType("application/x-octetstream;charset=gb2312");
            HSSFWorkbook workbook = new HSSFWorkbook();
            HSSFSheet sheet = null;
            String sheetName = "first sheet";
            sheet=workbook.createSheet(sheetName);
            System.out.println("*-*-----------------------");
            HSSFCell  cell = sheet.createRow(1).createCell((short)2);
            cell.setCellValue(323);
            workbook.write(out);
            out.flush();
            out.close();
            
        } catch (IOException ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        String s = (String) request.getParameter("plantCode");//String a = request.getQueryString("");
        System.out.println("plantCode:  " + s);
        return new ModelAndView("myname");
    }
    
    @RequestMapping(value ="testGet",method = RequestMethod.GET)
    public ModelAndView testGet(){
        System.out.println("--------testGet");
        return new ModelAndView("myname");
    }
    @RequestMapping(value ="testPost",method = RequestMethod.POST)
    public ModelAndView testPost(){
        System.out.println("--------testPost");
        return new ModelAndView("myname");
    }
    //测试传递参数和对象
    @RequestMapping(value ="transferAttr",method = RequestMethod.POST)
    public ModelAndView transferAttr(@ModelAttribute("order") Order order){
        System.out.println("---" + order.getOrderId());
        System.out.println("---" + order.getPrice());
        System.out.println("--------transferAttr");
        return new ModelAndView("myname");
    }
    
    //在页面显示全部数据
    @RequestMapping("showAll")
    public ModelAndView showAll() throws Exception{
        List<Order> orderList = orderService.selectAll();
        ModelAndView mav = new ModelAndView();
        mav.setViewName("allOrder");
        Map map = new HashMap();
        map.put("msg", "所有订单信息");
        map.put("ooolist", orderList);
        mav.addAllObjects(map);
        return mav;
    }
    @RequestMapping("createCookie")
    public void createCookie(HttpServletResponse response){
        System.out.println("创建cookie start");
        Cookie cookie = new Cookie("cookie_name","whatisthis");
        cookie.setHttpOnly(Boolean.TRUE);
        cookie.setDomain("chengangxiong");
        cookie.setVersion(1);
        cookie.setMaxAge(15);//15秒
        response.addCookie(cookie);
        
    }
    @RequestMapping("getCookie")
    public void getCookie(HttpServletResponse response){
        System.out.println("asdfsdfsfsadfsaf");
    }
    @RequestMapping(value="testAjax")
    public ModelAndView testAjax(@ModelAttribute Order order){
        System.out.println("test ajax");
        order = new Order("apple","eppla");
        //return "测试ajax后台";
        //String jsonString = JSON.toJSONString(order); 
        //printWriter.write(jsonString); 
        //String jsonString = JSON.toJSONString(order);
        ModelAndView mv = new ModelAndView();
        //mv.setViewName(null);
        mv.addObject("order", order);
        
//        //mybatis调用存储过程
//        Map map = new HashMap();
//        map.put("param1", (new Date()).toString());
//        map.put("param2", "chengangxiong");
//        orderService.perform(map);
        
//        MyThread myThread = new MyThread();
        Thread demo = new Thread(myThread);
        try{
        demo.start();
        }catch(Exception e){
            e.printStackTrace();
    }
        
        return mv;
    }
    
    @RequestMapping("setJobTime")
    public void setJobTime(){
        try {
            Scheduler scheduler = (Scheduler) ContextLoader.getCurrentWebApplicationContext().getBean("schedulerFactory");
            CronTriggerBean trigger = (CronTriggerBean) scheduler.getTrigger("dispatchingBillCreatorTrigger", Scheduler.DEFAULT_GROUP);
            if(scheduler.isShutdown()){
                System.out.println("定时器未运行");
                throw new Exception("定时器未运行");
            }
            String cronExpression = trigger.getCronExpression();
            System.out.println(" ----------------   " + cronExpression);
            trigger.setCronExpression("0/8 * * * * ?");
            scheduler.rescheduleJob("schedulerFactory", Scheduler.DEFAULT_GROUP,trigger);
        } catch (SchedulerException | ParseException ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    @RequestMapping("runSchedual")
    public void runSchedual(){
        try {
            Scheduler scheduler = (Scheduler) ContextLoader.getCurrentWebApplicationContext().getBean("schedulerFactory");
            if(!scheduler.isInStandbyMode()){
                System.out.println("定时器正在运行");
                throw new Exception("定时器正在运行");
            }
            scheduler.start();
        } catch (SchedulerException ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    @RequestMapping("stopSchedual")
    public void stopSchedual(){
        try {
            Scheduler scheduler = (Scheduler) ContextLoader.getCurrentWebApplicationContext().getBean("schedulerFactory");
            if(scheduler.isShutdown()){
                System.out.println("定时器未运行");
                throw new Exception("定时器未运行");
            }
            scheduler.standby();
        } catch (SchedulerException ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(OrderAction.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    @RequestMapping(value ="test",method = RequestMethod.POST)
    public ModelAndView testPost(@ModelAttribute("order") Order order){
        System.out.println("---" + order.getOrderId());
        System.out.println("---" + order.getPrice());
        System.out.println("--------transferAttr");
        return new ModelAndView("center/uploadFile");
    }
    @RequestMapping(value ="test",method = RequestMethod.GET)
    public ModelAndView testGet(@ModelAttribute("order") Order order){
        System.out.println("---" + order.getOrderId());
        System.out.println("---" + order.getPrice());
        System.out.println("--------transferAttr");
        return new ModelAndView("center/uploadFile");
    }
    @RequestMapping(value ="test",method = RequestMethod.PUT)
    public ModelAndView testPut(@ModelAttribute("order") Order order){
        System.out.println("---" + order.getOrderId());
        System.out.println("---" + order.getPrice());
        System.out.println("--------transferAttr");
        return new ModelAndView("center/uploadFile");
    }
    @RequestMapping(value ="test",method = RequestMethod.DELETE)
    public ModelAndView testDelete(@ModelAttribute("order") Order order){
        System.out.println("---" + order.getOrderId());
        System.out.println("---" + order.getPrice());
        System.out.println("--------transferAttr");
        return new ModelAndView("center/uploadFile");
    }
}