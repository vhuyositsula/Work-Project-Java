package com.myshop.repository;


import java.util.List;



import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.CartItem;
import com.myshop.domainModel.ShoppingCart;


public interface CartItemRepository extends CrudRepository<CartItem, Long> {
	List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
	
//	List<CartItem> findByOrder(Order order);
}
