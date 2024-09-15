export interface Referece {
    code: string;
    code_reference: string;
    brand: string;
    type?: string;
    created_at?: string;
}
export interface RefereceList {
  id: string;
  data: Referece;
}
