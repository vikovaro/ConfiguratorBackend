import { Module } from '@nestjs/common';
import { SeedCommand } from './seed-command';
import { CommandModule } from 'nestjs-command';
import { CommandFactory } from 'nest-commander';
import { SeedService } from './seed.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [CommandModule, CommandFactory],
  controllers: [],
  providers: [SeedCommand, SeedService, PrismaClient],
})
export class SeedModule {}
