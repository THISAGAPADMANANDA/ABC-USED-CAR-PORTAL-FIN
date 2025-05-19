export interface CarImage {
    id: number;
    car_id: number;
    image_path: string;
    created_at: string;
    updated_at: string;
}

export interface Car {
    id: number;
    user_id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuel_type: string;
    transmission: string;
    color: string;
    description: string;
    status: string;
    is_approved: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    images: CarImage[];
    user: User;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'user' | 'admin';
    phone_number?: string;
    address?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    profile_photo_url?: string;
    created_at: string;
    updated_at: string;
}

export interface Bid {
    id: number;
    car_id: number;
    user_id: number;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    updated_at: string;
}

export interface Appointment {
    id: number;
    car_id: number;
    user_id: number;
    date: string;
    time: string;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
    updated_at: string;
}
