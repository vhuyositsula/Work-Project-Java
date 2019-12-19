package com.myshop.domainModel;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class UserBilling implements Serializable{
	private static final long serialVersionUID = 79872894528934L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String userBillingAddress;
	private String userBillingStreet;
	private String userBillingCity;
	private String userBillingProvince;
	private String userBillingPostalCode;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnore
	private UserPayment userPayment;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserBillingAddress() {
		return userBillingAddress;
	}

	public void setUserBillingName(String userBillingAddress) {
		this.userBillingAddress = userBillingAddress;
	}

	public String getUserBillingStreet() {
		return userBillingStreet;
	}

	public void setUserBillingStreet1(String userBillingStreet) {
		this.userBillingStreet = userBillingStreet;
	}


	public String getUserBillingCity() {
		return userBillingCity;
	}

	public void setUserBillingCity(String userBillingCity) {
		this.userBillingCity = userBillingCity;
	}

	public String getUserBillingProvince() {
		return userBillingProvince;
	}

	public void setUserBillingState(String userBillingProvince) {
		this.userBillingProvince = userBillingProvince;
	}


	public String getUserBillingPostalCode() {
		return userBillingPostalCode;
	}

	public void setUserBillingZipcode(String userBillingPostalCode) {
		this.userBillingPostalCode = userBillingPostalCode;
	}

	public UserPayment getUserPayment() {
		return userPayment;
	}

	public void setUserPayment(UserPayment userPayment) {
		this.userPayment = userPayment;
	}
	
	
}
