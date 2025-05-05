import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { SeedService } from './seed.service';

@Injectable()
export class SeedCommand {
    constructor(private readonly seedService: SeedService) {}

    @Command({
        command: 'seed:run',
        describe: 'Seed the database',
    })
    async seed() {
        await this.seedService.create();
    }

    @Command({
        command: 'seed:clean',
        describe: 'Clean default data from the database',
    })
    async clean() {
        await this.seedService.clean();
    }
}
