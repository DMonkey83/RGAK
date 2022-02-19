interface IImage {
    publicUrlTransformed: string;
    __typename: 'CloudinaryImage_File'
}

interface IPhoto {
    id: string;
    image: IImage;
    __typename: 'ProductImage'
}
export interface IProduct {
    id: string;
    name: string;
    price: string;
    description: string;
    photo: IPhoto
    __typename: 'Product'
}

export interface IProductsData {
    products: IProduct[];
}

export interface ProductProps{
    data: IProductsData
}