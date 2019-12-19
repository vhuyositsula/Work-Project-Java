package com.myshop.service;

import java.util.List;

import com.myshop.domainModel.CartItem;
import com.myshop.domainModel.Product;
import com.myshop.domainModel.ShoppingCart;
import com.myshop.domainModel.User;


public interface CartItemService {
	
	CartItem addProductToCartItem(Product product, User user, int qty);
	
	List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);
	
//	List<CartItem> findByOrder(Order order);
	
	CartItem updateCartItem(CartItem cartItem);
	
	void removeCartItem(CartItem cartItem);
	
	CartItem findById(Long id);
	
	CartItem save(CartItem cartItem);

}
