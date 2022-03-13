export interface CategoryTypes {
    _id: string;
    name: string;
    _v: number;
}

export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentTypes {
    _id: string;
    status: string;
    type: string;
    banks: BanksTypes[];
}

export interface NominalTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string,
    password: string
}
