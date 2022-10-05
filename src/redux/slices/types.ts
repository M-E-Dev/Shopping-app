export interface CState {
    categories: any[],
    products: any[],
    isLoading: boolean,
    currentCategory: string,
    filteredProducts: any[],
    detailProduct: any[],
    favoriteProducts: any[],
    deletedFavorites: number
};

export interface PState {
    postProduct: any[],
    deletedFavorites: number
};

export interface CategoryType {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export interface ProductType {
    _id: string;
    name: string;
    avatar: string;
    description: string;
    price: number;
    category: string;
    developerEmail: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}