import { SeedService } from './seed.service';
export declare class SeedCommand {
    private readonly seedService;
    constructor(seedService: SeedService);
    seed(): Promise<void>;
    clean(): Promise<void>;
}
