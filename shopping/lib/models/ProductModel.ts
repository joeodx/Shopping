export type Product = { 
    _id?: string
    name: string
    slug:string
    brand:string
    image:string
    banner?:string
    price:string
    description:string
    category:string
    rating:string
    numReviews:string
    countInStock:string
    colors?: []
    sizes?: []

}