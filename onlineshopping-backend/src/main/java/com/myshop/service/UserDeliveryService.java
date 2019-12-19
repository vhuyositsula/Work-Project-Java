package com.myshop.service;

import com.myshop.domainModel.UserDelivery;

public interface UserDeliveryService {
	
	UserDelivery findById(Long id);
	
	void removeById(Long id);

}