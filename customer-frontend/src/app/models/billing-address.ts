import {Order} from './order';

export class BillingAddress {
	public id: number;
	public billingAddress: string;
	public billingAddressStreet: string;
	public billingAddressCity: string;
	public billingAddressProvince: string;
	public billingAddressPostalCode: string;
	public order: Order;
}
