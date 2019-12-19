package com.myshop.service;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myshop.domainModel.BillingAddress;
import com.myshop.domainModel.CartItem;
import com.myshop.domainModel.DeliveryAddress;
import com.myshop.domainModel.Order;
import com.myshop.domainModel.Payment;
import com.myshop.domainModel.Product;
import com.myshop.domainModel.ShoppingCart;
import com.myshop.domainModel.User;
import com.myshop.mail.MailConstructor;
import com.myshop.repository.BillingAddressRepository;
import com.myshop.repository.DeliveryAddressRepository;
import com.myshop.repository.OrderRepository;
import com.myshop.repository.PaymentRepository;



@Service
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private BillingAddressRepository billingAddressRepository;
	
	@Autowired
	private DeliveryAddressRepository deliveryAddressRepository;
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private MailConstructor mailConstructor;
	
	public synchronized Order createOrder(
			ShoppingCart shoppingCart,
			DeliveryAddress deliveryAddress,
			BillingAddress billingAddress,
			Payment payment,
			User user
			){
		Order order = new Order();
		order.setBillingAddress(billingAddress);
		order.setOrderStatus("created");
		order.setPayment(payment);
		order.setDeliveryAddress(deliveryAddress);
		
		List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);
		
		for (CartItem cartItem : cartItemList) {
			Product product = cartItem.getProduct();
			cartItem.setOrder(order);
			product.setInStockNumber(product.getInStockNumber()-cartItem.getQty());
		}
		
		order.setCartItemList(cartItemList);
		order.setOrderDate(Calendar.getInstance().getTime());
		order.setOrderTotal(shoppingCart.getGrandTotal());
		deliveryAddress.setOrder(order);
		billingAddress.setOrder(order);
		payment.setOrder(order);
		order.setUser(user);
		order = orderRepository.save(order);
		
		return order;
	}
	
	public Order findOne(Long id) {
		return orderRepository.findOne(id);
	}

}
