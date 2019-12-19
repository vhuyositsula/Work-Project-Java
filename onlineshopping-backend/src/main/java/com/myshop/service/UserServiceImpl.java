package com.myshop.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.myshop.domainModel.ShoppingCart;
import com.myshop.domainModel.User;
import com.myshop.domainModel.UserBilling;
import com.myshop.domainModel.UserDelivery;
import com.myshop.domainModel.UserPayment;
import com.myshop.domainModel.UserRole;
import com.myshop.repository.RoleRepository;
import com.myshop.repository.UserBillingRepository;
import com.myshop.repository.UserDeliveryRepository;
import com.myshop.repository.UserPaymentRepository;
import com.myshop.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	private static final Logger LOG = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private UserBillingRepository userBillingRepository;
	
	@Autowired
	private UserPaymentRepository userPaymentRepository;
	
	@Autowired
	private UserDeliveryRepository userDeliveryRepository;
	
	@Transactional
	public User createUser(User user, Set<UserRole> userRoles) {
		User localUser = userRepository.findByUsername(user.getUsername());
		
		if(localUser != null) {
			LOG.info("User with username {} already exist. Nothing will be done. ", user.getUsername());
		} else {
			for (UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			
			ShoppingCart shoppingCart = new ShoppingCart();
			shoppingCart.setUser(user);
			user.setShoppingCart(shoppingCart);
			
			user.setUserPaymentList(new ArrayList<UserPayment>());
			user.setUserDeliveryList(new ArrayList<UserDelivery>());
			
			localUser = userRepository.save(user);
		}
		
		return localUser;
	}
	
	@Override
	public User save(User user)  {
		return userRepository.save(user);
	}
	
	@Override
	public User findById(Long id) {
		return userRepository.findOne(id);
	}
	
	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	@Override
	public void updateUserPaymentInfo(UserBilling userBilling, UserPayment userPayment, User user) {
		save(user);
		userBillingRepository.save(userBilling);
		userPaymentRepository.save(userPayment);
	}
	
	@Override
	public void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user) {
		userPayment.setUser(user);
		userPayment.setUserBilling(userBilling);
		userPayment.setDefaultPayment(true);
		userBilling.setUserPayment(userPayment);
		user.getUserPaymentList().add(userPayment);
		save(user);
	}
	
	@Override
	public void setUserDefaultPayment(Long userPaymentId, User user) {
		List<UserPayment> userPaymentList = (List<UserPayment>) userPaymentRepository.findAll();
		
		for (UserPayment userPayment : userPaymentList) {
			if(userPayment.getId() == userPaymentId) {
				userPayment.setDefaultPayment(true);
				userPaymentRepository.save(userPayment);
			} else {
				userPayment.setDefaultPayment(false);
				userPaymentRepository.save(userPayment);
			}
		}
	}
	
	@Override
	public void updateUserDelivery(UserDelivery userDelivery, User user) {
		userDelivery.setUser(user);
		userDelivery.setUserDeliveryDefault(true);
		user.getUserDeliveryList().add(userDelivery);
		save(user);
	}
	
	@Override
	public void setUserDefaultDelivery(Long userDeliveryId, User user) {
		List<UserDelivery> userDeliveryList = (List<UserDelivery>) userDeliveryRepository.findAll();
		
		for (UserDelivery userDelivery : userDeliveryList) {
			if(userDelivery.getId() == userDeliveryId) {
				userDelivery.setUserDeliveryDefault(true);
				userDeliveryRepository.save(userDelivery);
			} else {
				userDelivery.setUserDeliveryDefault(false);
				userDeliveryRepository.save(userDelivery);
			}
		}
	}
}

