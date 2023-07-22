import IReview from "./review";

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