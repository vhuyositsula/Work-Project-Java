package com.myshop.service;

import com.myshop.domainModel.BillingAddress;
import com.myshop.domainModel.DeliveryAddress;
import com.myshop.domainModel.Order;
import com.myshop.domainModel.Payment;
import com.myshop.domainModel.ShoppingCart;
import com.myshop.domainModel.User;

public interface OrderService {
	
	Order createOrder(
			ShoppingCart shoppingCart,
			DeliveryAddress deliveryAddress,
			BillingAddress billingAddress,
			Payment payment,
			User user
	);

}
