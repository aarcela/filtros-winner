export interface Product {
    name: string;
    category: string;
    description?: string;
    charateristic?: string;
    image_1?: string;
    image_2?: string;
    image_3?: string;
    created_at: string;
    product_specification?: ProductSpecification;
    especificacion?: string;
    OD?: string;
    H?: string;
    TH?: string;
    GS_OD?: string;
    GS_ID?: string;
    by_pass_valve?: string;
    anti_drain?: string;
    descripción_tecnica?: string;
    diametro_externo?: string;
    diametro_interno?: string;
    altura?: string;
    dimensiones_rosca?: string;
    diametro_externoempacadura?: string;
    diametro_interno_empacadura?: string;
    valvula_de_alivio?: string;
    valvula_anti_drenaje?: string;
    longuitud?: string;
}

export interface ProductList {
    id: string;
    data: Product;
}

export interface ProductSpecification {
    especificacion?: string;
    OD?: string;
    H?: string;
    TH?: string;
    GS_OD?: string;
    GS_ID?: string;
    by_pass_valve?: string;
    anti_drain?: string;
    descripción_tecnica?: string;
    diámetro_externo?: string;
    altura?: string;
    dimensiones_rosca?: string;
    diametro_externoempacadura?: string;
    diametro_interno_empacadura?: string;
    valvula_de_alivio?: string;
    valvula_anti_drenaje?: string;
}