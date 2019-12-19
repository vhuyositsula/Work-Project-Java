package com.myshop.resource;

import java.security.Principal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.myshop.domainModel.BillingAddress;
import com.myshop.domainModel.CartItem;
import com.myshop.domainModel.DeliveryAddress;
import com.myshop.domainModel.Order;
import com.myshop.domainModel.Payment;
import com.myshop.domainModel.ShoppingCart;
import com.myshop.domainModel.User;
import com.myshop.mail.MailConstructor;
import com.myshop.service.CartItemService;
import com.myshop.service.OrderService;
import com.myshop.service.ShoppingCartService;
import com.myshop.service.UserService;

@RestController
@RequestMapping("/checkout")
public class CheckoutResource {
	private Order order = new Order();
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private ShoppingCartService shoppingCartService;
	
	@Autowired
	private MailConstructor mailConstructor;
	
	@RequestMapping(value = "/checkout", method=RequestMethod.POST)
	public Order checkoutPost(
				@RequestBody HashMap<String, Object> mapper,
				Principal principal
			){
		ObjectMapper om = new ObjectMapper();
		
		DeliveryAddress deliveryAddress = om.convertValue(mapper.get("deliveryAddress"), DeliveryAddress.class);
		BillingAddress billingAddress = om.convertValue(mapper.get("billingAddress"), BillingAddress.class);
		Payment payment = om.convertValue(mapper.get("payment"), Payment.class);
		
		ShoppingCart shoppingCart = userService.findByUsername(principal.getName()).getShoppingCart();
		List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
		User user = userService.findByUsername(principal.getName());
		Order order = orderService.createOrder(shoppingCart, deliveryAddress, billingAddress, payment, user);
		
		mailSender.send(mailConstructor.constructOrderConfirmationEmail(user, order, Locale.ENGLISH));
		
		shoppingCartService.clearShoppingCart(shoppingCart);
		
		LocalDate today = LocalDate.now();
		LocalDate estimatedDeliveryDate;
		
		this.order = order;
		
		return order;
		
	}

}
