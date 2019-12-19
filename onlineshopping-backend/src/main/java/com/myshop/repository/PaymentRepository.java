package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Long>{

}