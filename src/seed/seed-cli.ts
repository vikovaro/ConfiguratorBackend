import { SeedModule } from './seed.module';
import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(SeedModule, {
        logger: ['error'],
    });

    app.select(CommandModule).get(CommandService).exec();
    await app.close();
}

bootstrap();
