interface IOrderItem{
    name: string;
    qty:number;
    image:string;
    price: number;
    product: any;
}

interface IShippingAddress{
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

interface IPaymentResult{
    id?: string;
    status?: string;
    update_time?: string;
    email_address?: string;
}

export default interface IOrder{
    user: any;
    orderItems: [IOrderItem];
    shippingAddress: IShippingAddress;
    paymentMethod: string;
    paymentResult: IPaymentResult;
    taxPrice?: number;
    shippingPrice?: number;
    totalPrice?: number;
    isPaid?: boolean;
    paidAt?: Date;
    isDelivered?: boolean;
    deliveredAt?: Date;
}

