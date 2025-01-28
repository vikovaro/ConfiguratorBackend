export declare class CpuResponse implements ICpuResponse {
    id: number;
    name: string;
    manufacturer: string;
    socket: string;
    wattage: number;
    price: number;
    frequency: number;
}
export interface ICpuResponse {
    id: number;
    name: string;
    manufacturer: string;
    socket: string;
    wattage: number;
    price: number;
    frequency: number;
}
