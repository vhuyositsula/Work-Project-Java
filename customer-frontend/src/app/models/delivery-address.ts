import {Order} from './order';

export class DeliveryAddress {
	public id: number;
	public deliveryAddress: string;
	public deliveryAddressStreet: string;
	public deliveryAddressCity: string;
	public deliveryAddressProvince: string;
	public deliveryAddressPostalCode: string;
	public deliveryAddressDefault: boolean;
	public order: Order;
}
