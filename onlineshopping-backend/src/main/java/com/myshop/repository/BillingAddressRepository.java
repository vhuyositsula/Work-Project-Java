package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.BillingAddress;

public interface BillingAddressRepository extends CrudRepository<BillingAddress, Long>{

}
