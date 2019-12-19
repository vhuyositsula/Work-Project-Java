package com.myshop.service;

import com.myshop.domainModel.UserPayment;

public interface UserPaymentService {
	UserPayment findById(Long id);
	
	void removeById(Long id);
}
