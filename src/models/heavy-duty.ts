export interface HeavyDuty {
    brand: string;
    model: string;
    hp: string;
    motor: string;
    cil: string;
    start: string;
    finish: string;
    oil: string;
    primary_air: string;
    secondary_air: string;
    cabine: string;
    primary_gas: string;
    secondary_gas: string;
    separator_gas: string;
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
