export interface HeavyDuty {
    brand: string;
    model: string;
    motor: string;
    hp: string;
    cil: string;
    start: string;
    finish: string;
    oil: string;
    primary_air: string;
    primary_gas: string;
    hydraulic: string;
    secante: string;
    refrigerant: string;
    category?: string;
    product_id?: string;
    created_at?: string;
}

export interface HeavyDutyList {
  id: string;
  data: HeavyDuty;
}
