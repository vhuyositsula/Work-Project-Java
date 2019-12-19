package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.DeliveryAddress;

public interface DeliveryAddressRepository extends CrudRepository<DeliveryAddress, Long> {
	
}
