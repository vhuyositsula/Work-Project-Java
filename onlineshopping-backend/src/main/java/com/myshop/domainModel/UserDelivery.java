package com.myshop.domainModel;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class UserDelivery implements Serializable{
	private static final long serialVersionUID = 498745987L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String userDeliveryAddress;
	private String userDeliveryStreet;
	private String userDeliveryCity;
	private String userDeliveryProvince;
	private String userDeliveryPostalCode;
	private Boolean userDeliveryDefault;
	
	
	@ManyToOne
	@JoinColumn(name="user_id")
	@JsonIgnore
	private User user;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getUserDeliveryAddress() {
		return userDeliveryAddress;
	}


	public void setUserDeliveryAddress(String userDeliveryAddress) {
		this.userDeliveryAddress = userDeliveryAddress;
	}


	public String getUserDeliveryStreet() {
		return userDeliveryStreet;
	}


	public void setUserDeliveryStreet(String userDeliveryStreet) {
		this.userDeliveryStreet = userDeliveryStreet;
	}


	public String getUserDeliveryCity() {
		return userDeliveryCity;
	}


	public void setUserDeliveryCity(String userDeliveryCity) {
		this.userDeliveryCity = userDeliveryCity;
	}


	public String getUserDeliveryProvince() {
		return userDeliveryProvince;
	}


	public void setUserShippingProvince(String userDeliveryProvince) {
		this.userDeliveryProvince = userDeliveryProvince;
	}




	public String getUserDeliveryPostalCode() {
		return userDeliveryPostalCode;
	}


	public void setUserDeliveryPostalCodee(String userDeliveryPostalCode) {
		this.userDeliveryPostalCode = userDeliveryPostalCode;
	}


	public Boolean getUserDeliveryDefault() {
		return userDeliveryDefault;
	}


	public void setUserDeliveryDefault(Boolean userDeliveryDefault) {
		this.userDeliveryDefault = userDeliveryDefault;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
	

}

