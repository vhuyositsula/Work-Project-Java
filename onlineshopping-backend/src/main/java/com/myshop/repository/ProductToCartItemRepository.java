package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.CartItem;
import com.myshop.domainModel.ProductToCartItem;

public interface ProductToCartItemRepository extends CrudRepository<ProductToCartItem, Long>{
	void deleteByCartItem(CartItem cartItem);
}
  