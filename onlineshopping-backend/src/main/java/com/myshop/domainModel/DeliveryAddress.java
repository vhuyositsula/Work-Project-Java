package com.myshop.domainModel;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DeliveryAddress implements Serializable{
	
	private static final long serialVersionUID = 189013457L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String deliveryAddress;
	private String deliveryAddressStreet;
	private String deliveryAddressCity;
	private String deliveryAddressProvince;
	private String deliveryAddressCountry;
	private String deliveryAddressPostalCode;
	
	@OneToOne
	@JsonIgnore
	private Order order;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDeliveryAddress() {
		return deliveryAddress;
	}

	public void setDeliveryAddress(String deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}

	public String getDeliveryAddressStreet() {
		return deliveryAddressStreet;
	}

	public void setDeliveryAddressStreet(String deliveryAddressStreet) {
		this.deliveryAddressStreet = deliveryAddressStreet;
	}

	public String getDeliveryAddressCity() {
		return deliveryAddressCity;
	}

	public void setDeliveryAddressCity(String deliveryAddressCity) {
		this.deliveryAddressCity = deliveryAddressCity;
	}

	public String getDeliveryAddressProvince() {
		return deliveryAddressProvince;
	}

	public void setDeliveryAddressProvince(String deliveryAddressProvince) {
		this.deliveryAddressProvince = deliveryAddressProvince;
	}

	public String getDeliveryAddressCountry() {
		return deliveryAddressCountry;
	}

	public void setDeliveryAddressCountry(String deliveryAddressCountry) {
		this.deliveryAddressCountry = deliveryAddressCountry;
	}

	public String getDeliveryAddressPostalCode() {
		return deliveryAddressPostalCode;
	}

	public void setDeliveryAddressPostalCode(String deliveryAddressPostalCode) {
		this.deliveryAddressPostalCode = deliveryAddressPostalCode;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}
	
	
}
