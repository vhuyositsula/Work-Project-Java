package com.myshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.myshop.domainModel.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

}
