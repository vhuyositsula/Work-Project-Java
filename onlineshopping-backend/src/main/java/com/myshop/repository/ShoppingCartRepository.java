package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.ShoppingCart;

public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, Long>{

}
