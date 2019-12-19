package com.myshop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
	List<Product> findByProductNameContaining(String prodName);
}
