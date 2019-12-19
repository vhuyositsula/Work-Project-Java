package com.myshop.utility;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SAConstants {
	public final static String SA = "SA";

	// 9 states
	public final static Map<String, String> mapOfSAProvinces = new HashMap<String, String>() {
		{
			put("EC", "Eastern Cape");
			put("FS", "Free State");
			put("GP", "Gauteng");
			put("KZN", "KwaZulu-Natal");
			put("LP", "Limpopo");
			put("MP", "Mpumalanga");
			put("NC", "Northern Cape");
			put("NW", "North-West");
			put("WC", "Western Cape");
			
		}
	};
	public final static List<String> listOfSACode = new ArrayList<>(mapOfSAProvinces.keySet());
	public final static List<String> listOfSAProvince = new ArrayList<>(mapOfSAProvinces.values());

}
