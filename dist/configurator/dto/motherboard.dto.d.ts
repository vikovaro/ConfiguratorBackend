export declare class MotherBoardResponse implements IMotherBoardResponse {
    id: number;
    name: string;
    manufacturer: string;
    price: number;
    socket: string;
    chipset: string;
    cpuManufacturer: string;
    port: string;
}
export interface IMotherBoardResponse {
    id: number;
    name: string;
    manufacturer: string;
    price: number;
    socket: string;
    port: string;
    chipset: string;
    cpuManufacturer: string;
}
