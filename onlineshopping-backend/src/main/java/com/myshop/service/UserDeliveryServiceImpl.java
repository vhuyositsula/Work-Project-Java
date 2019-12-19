package com.myshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myshop.domainModel.UserDelivery;
import com.myshop.repository.UserDeliveryRepository;



@Service
public class UserDeliveryServiceImpl implements UserDeliveryService{
	
	@Autowired
	private UserDeliveryRepository userDeliveryRepository;
	
	public UserDelivery findById(Long id) {
		return userDeliveryRepository.findOne(id);
	}
	
	public void removeById(Long id) {
		userDeliveryRepository.delete(id);
	}
}
