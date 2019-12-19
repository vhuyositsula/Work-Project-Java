package com.myshop.domainModel;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BillingAddress implements Serializable{
	private static final long serialVersionUID = 78293749582348L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String billingAddress;
	private String billingAddressStreet;
	private String billingAddressCity;
	private String billingAddressProvince;
	private String billingAddressPostalCode;
	
	@OneToOne
	@JsonIgnore
	private Order order;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public String getBillingAddressStreet() {
		return billingAddressStreet;
	}

	public void setBillingAddressStreet(String billingAddressStreet) {
		this.billingAddressStreet = billingAddressStreet;
	}

	public String getBillingAddressCity() {
		return billingAddressCity;
	}

	public void setBillingAddressCity(String billingAddressCity) {
		this.billingAddressCity = billingAddressCity;
	}

	public String getBillingAddressProvince() {
		return billingAddressProvince;
	}

	public void setBillingAddressProvince(String billingAddressProvince) {
		this.billingAddressProvince = billingAddressProvince;
	}

	public String getBillingAddressPostalCode() {
		return billingAddressPostalCode;
	}

	public void setBillingAddressPostalCode(String billingAddressPostalCode) {
		this.billingAddressPostalCode = billingAddressPostalCode;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}