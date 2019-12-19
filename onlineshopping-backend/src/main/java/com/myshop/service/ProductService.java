package com.myshop.service;

import java.util.List;

import com.myshop.domainModel.Product;

public interface ProductService {
	
	List<Product> findAll();
	
	Product findOne(Long id);
	
	Product save(Product product);
	
	List<Product> blurrySearch(String productName);
	
	void removeOne(Long id);
}
