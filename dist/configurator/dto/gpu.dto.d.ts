export declare class GpuResponse implements IGpuResponse {
    id: number;
    manufacturer: string;
    price: number;
    wattage: number;
    frequency: number;
    port: string;
}
export interface IGpuResponse {
    id: number;
    manufacturer: string;
    price: number;
    wattage: number;
    frequency: number;
    port: string;
}
