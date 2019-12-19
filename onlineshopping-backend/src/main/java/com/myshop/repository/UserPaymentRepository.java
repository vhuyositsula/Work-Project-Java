package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.UserPayment;

public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {

}