package com.myshop.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.myshop.domainModel.User;
import com.myshop.domainModel.UserBilling;
import com.myshop.domainModel.UserDelivery;
import com.myshop.domainModel.UserPayment;
import com.myshop.domainModel.UserRole;


public interface UserService {
	
	User createUser(User user, Set<UserRole> userRoles);

	User findByUsername(String username);
	
	User findByEmail (String email);
	
	User save(User user);
	
	User findById(Long id);
	
	void updateUserPaymentInfo(UserBilling userBilling, UserPayment userPayment, User user);
	
	void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user);
	
	void setUserDefaultPayment(Long userPaymentId, User user);
	
	void updateUserDelivery(UserDelivery userDelivery, User user);

	void setUserDefaultDelivery(Long userDeliveryId, User user);
	
}