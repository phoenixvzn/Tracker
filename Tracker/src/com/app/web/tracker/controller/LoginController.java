package com.app.web.tracker.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.app.web.tracker.beans.User;




@Controller
public class LoginController {
	
	private HttpSession httpSession;
	
	private static final Logger log = Logger.getLogger(LoginController.class);

	@RequestMapping(value="login", method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView model = new ModelAndView();
		model.setViewName("login");
		return model;
	}

	@RequestMapping(value="login", method = RequestMethod.POST)
	public ModelAndView userCheck(ModelMap models, HttpServletRequest request) {
		String name=request.getParameter("name");
		String pwd=request.getParameter("pwd");
		boolean isLoginSuccess = false;
		if("vicky".equals(name) && "vicky".equals(pwd)){
			isLoginSuccess = true;
			User user = new User();
			user.setUsername(name);
			httpSession = request.getSession(true);
			httpSession.setAttribute("User", user);
		}
		ModelAndView model = new ModelAndView();
		if(isLoginSuccess){
			model.setViewName("redirect:/app/welcome");
		}else{
			model.setViewName("login");
			model.addObject("errMsg","Username or password are invalid");
		}
		return model;
	}
	
	@RequestMapping(value="logout", method = RequestMethod.GET)
	public ModelAndView logOut(ModelMap models, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		
		session.invalidate();
		
		ModelAndView model = new ModelAndView();
		model.setViewName("login");
		return model;
	}
	
	/*@RequestMapping(value="welcome", method = RequestMethod.GET)
	public ModelAndView welcome(ModelMap models, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		
		session.invalidate();
		
		ModelAndView model = new ModelAndView();
		model.setViewName("mainLayout");
		return model;
	}*/
}