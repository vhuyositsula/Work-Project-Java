package com.myshop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.Order;
import com.myshop.domainModel.User;

public interface OrderRepository extends CrudRepository<Order, Long> {
	List<Order> findByUser(User user);
}