package com.myshop.resource;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.myshop.domainModel.User;
import com.myshop.domainModel.UserDelivery;
import com.myshop.service.UserDeliveryService;
import com.myshop.service.UserService;



@RestController
@RequestMapping("/delivery")
public class DeliveryResource {
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserDeliveryService userDeliveryService;
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity addNewUserDeliveryPost(
			@RequestBody UserDelivery userDelivery, Principal principal
			) {
		User user = userService.findByUsername(principal.getName());
		userService.updateUserDelivery(userDelivery, user);
		
		return new ResponseEntity("Delivery Added(Updated) Successfully!", HttpStatus.OK);
	}
	
	@RequestMapping("/getUserDeliveryList")
	public List<UserDelivery> getUserDeliveryList(
			Principal principal
			){
		User user = userService.findByUsername(principal.getName());
		List<UserDelivery> userDeliveryList = user.getUserDeliveryList();
		
		return userDeliveryList;
	}
	
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public ResponseEntity removeUserDeliveryPost(
			@RequestBody String id,
			Principal principal
			) {
		userDeliveryService.removeById(Long.parseLong(id));
		return new ResponseEntity("Delivery Removed Successfully!", HttpStatus.OK);
	}
	
	@RequestMapping(value="/setDefault", method=RequestMethod.POST)
	public ResponseEntity setDefaultUserDeliveryPost(
			@RequestBody String id, Principal principal
			){
		User user = userService.findByUsername(principal.getName());
		userService.setUserDefaultDelivery(Long.parseLong(id), user);
		
		return new ResponseEntity("Set Default Delivery Successfully!", HttpStatus.OK);
	}
}
