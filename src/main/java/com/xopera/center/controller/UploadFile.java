/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.xopera.center.controller;

import com.byd.test.bean.BaseURL;
import com.byd.test.bean.MaterialBean;
import com.byd.test.domain.Material;
import com.byd.test.domain.Menu;
import com.byd.test.domain.Order;
import com.byd.test.services.OrderService;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
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
    
    @Autowired
    private BaseURL baseURL;
    
    @Autowired  
    private  HttpServletRequest request;
    
    @RequestMapping("main")
    public ModelAndView helloworld(HttpServletRequest req){
        String s = request.getServletContext().getRealPath("/");
        String s1 = request.getContextPath();
        File file = new File(s);
        String parentFile = file.getParent();
        System.out.println("parentFile : " + parentFile);
        File f1 = new File(parentFile);
        System.out.println("999" + f1.getPath());
        System.out.println("****" + s1);
        System.out.println("----" + s);
        File f2 = new File(parentFile + "\\\\" + "oooo" );
        boolean b = f2.mkdirs();
        File img = new File("C:\\Users\\Public\\Pictures\\Sample Pictures\\菊花.jpg");
        ModelAndView mv = new ModelAndView();
        mv.setViewName("center/main");
        mv.addObject("size",365);
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
    
    
    //获取菜单
    
    @RequestMapping(value="testMenu/{param}", method = RequestMethod.GET)
    @ResponseBody
    public List<Menu> testMenu(@PathVariable ("param") String parentId){
        System.out.println("执行菜单查询操作 时间 ： " + new Date());
        System.out.println("查询菜单传入参数 parentId ：" + parentId);
        List<Menu> menuList = new ArrayList<>();
        switch (parentId) {
            case "-1":
                {
                    Menu menu = new Menu("3","一级菜单1",false,"0","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("4","一级菜单2",false,"0","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("5","物料",true,"0","tid3","App.view.MaterialView");
                    menuList.add(menu);
                    break;
                }
            case "3":
                {
                    Menu menu = new Menu("6","二级菜单1",false,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("7","二级菜单2",true,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("8","供应商",true,"5","tid3","App.view.VendorView");
                    menuList.add(menu);
                    break;
                }
            case "4":
                {
                    Menu menu = new Menu("9","二级菜单4",true,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("10","二级菜单5",true,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("11","二级菜单6",true,"5","tid3","target");
                    menuList.add(menu);
                    break;
                }
            case "6":
                {
                    Menu menu = new Menu("12","三级菜单1",true,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("13","三级菜单2",true,"5","tid3","target");
                    menuList.add(menu);
                    menu = new Menu("14","三级菜单3",true,"5","tid3","target");
                    menuList.add(menu);
                    break;
                }
        }
        return menuList;
    }
    
    /**
     * 测试ajax返回值
     * @param theField
     * @return 
     */
    @RequestMapping(value="testAjax1", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> testAjax1(@ModelAttribute("theField") String theField){
        System.out.println("theField : " + theField);
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
    
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping(value="materials", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> materials(@ModelAttribute("material") Material material,@ModelAttribute("limit") String pageSize,@ModelAttribute("page") String page,@ModelAttribute("start") String start){
        System.out.println("page: " + page + " start: " + start + " pageSize: " + pageSize);
        Map<String,Object> map = new HashMap();
        List<Material> materialList = new ArrayList<>();
//        materialList.add(new Material("123456-00","物料描述663","/app/ppp/lll/dd33d.jpg"));
//        materialList.add(new Material("123457-00","2233","/app/ppp/lll/ddd.jpg"));
        materialList.add(new Material("123458-00","物44ee料描述",baseURL.getServerLocation() + "baidu_jgylogo3.gif"));
        materialList.add(new Material("123459-00","物rra料描述",null));
        materialList.add(new Material("123450-00","物ffee料描述","/stat11ic/img/baidu_jgylogo3.gif"));
        materialList.add(new Material("123416-00","物料fsag描述",null));
        materialList.add(new Material("123436-00","物料cds描述","/a11pp/ppp/lll/ddd423.jpg"));
        materialList.add(material);
        map.put("materialList", materialList);
        map.put("count", 20);
        return map;
    }
    @RequestMapping(value="testFormSubmit", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> materialsTest(@ModelAttribute("material") Material material){
        Map<String,Object> map = new HashMap();
        List<Material> materialList = new ArrayList<>();
        materialList.add(new Material("123456-00","物料描述663","/app/ppp/lll/dd33d.jpg"));
        materialList.add(new Material("123457-00","2233","/app/ppp/lll/ddd.jpg"));
        materialList.add(new Material("123458-00","物44ee料描述","/app/ppp/lll/ddd21.jpg"));
        materialList.add(new Material("123459-00","物rra料描述","/app/ppp/lll/ddyyd.jpg"));
        materialList.add(new Material("123450-00","物ffee料描述","/app/ppp/lll/dd1f4d.jpg"));
        materialList.add(new Material("123416-00","物料fsag描述","/app/ppp/lll/dd5sd.jpg"));
        materialList.add(new Material("123436-00","物料cds描述","/app/ppp/lll/ddd423.jpg"));
        map.put("materialList", materialList);
        map.put("success", "success");
        return map;
    }
    
    @RequestMapping(value="states", method = RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> states(){
        Map<String,Object> map = new HashMap();
        List<Material> materialList = new ArrayList<>();
        materialList.add(new Material("123456-00","物料描述663","/app/ppp/lll/dd33d.jpg"));
        materialList.add(new Material("123457-00","2233","/app/ppp/lll/ddd.jpg"));
        materialList.add(new Material("123458-00","物44ee料描述","/app/ppp/lll/ddd21.jpg"));
        materialList.add(new Material("123459-00","物rra料描述","/app/ppp/lll/ddyyd.jpg"));
        materialList.add(new Material("123450-00","物ffee料描述","/app/ppp/lll/dd1f4d.jpg"));
        materialList.add(new Material("123416-00","物料fsag描述","/app/ppp/lll/dd5sd.jpg"));
        materialList.add(new Material("123436-00","物料cds描述","/app/ppp/lll/ddd423.jpg"));
        map.put("materialList", materialList);
        map.put("success", "success");
        return map;
    }
    
    @RequestMapping(value="formSubmit", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> materialsTe(MaterialBean materialBean){
        Map<String,Object> map = new HashMap();
        DataOutputStream out = null;
        try {
            CommonsMultipartFile f = materialBean.getFile();
            String s = request.getServletContext().getRealPath("/");
            System.out.println("ssssssssss : " + s);
            File file = new File(s);
            String parentFile = file.getParent();
            System.out.println("parentFile : " + parentFile);
            String fileAbsPath = baseURL.getFileLocation() + f.getOriginalFilename();
            out = new DataOutputStream(new FileOutputStream(fileAbsPath));
            InputStream is = null;// 附件输入流
            is = f.getInputStream();
            byte[] buffer = new byte[is.available()];
            is.read(buffer);
            out.write(buffer);
            map.put("success", "success");
        } catch (FileNotFoundException ex) {
            Logger.getLogger(UploadFile.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(UploadFile.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                out.close();
            } catch (IOException ex) {
                Logger.getLogger(UploadFile.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return map;
    }
}
