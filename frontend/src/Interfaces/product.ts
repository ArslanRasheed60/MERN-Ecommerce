interface IReview{
    _id?: any;
    name: string;
    rating:  number;
    comment: string;
    user: any;
}

export default interface IProduct{
    _id?: any;
    user?: any;
    name: string,
    image: string,
    brand: string,
    description: string
    category: string,
    price?: number,
    countInStock?: number,
    rating?: number,
    numReviews?: number,
    reviews?: [IReview];
}

// export default interface IProduct{
//     _id: number;
//     name: string,
//     image: string,
//     description: string
//     category: string,
//     price: number,
//     countInStock: number,
//     rating: number,
//     numReviews: number,
// }

export default interface IProductAction{
    type: string;
    payload: any
}