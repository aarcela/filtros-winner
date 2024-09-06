import { VehicleCategory } from "@/enums/category";

export interface Vehicle {
    brand: string;
    motor: string;
    model: string;
    hp: string;
    cil: string;
    start: string;
    finish: string;
    oil: string;
    air: string;
    cabine: string;
    gas: string;
    category?: VehicleCategory | string;
    product_id?: string;
    created_at?: string;
}

export interface VehicleList {
    id: string;
    data: Vehicle;
}
