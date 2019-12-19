package com.myshop.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.User;

public interface UserRepository extends CrudRepository<User, Long> {
	User findByUsername(String username);
	User findByEmail(String email);
	List<User> findAll();
}
