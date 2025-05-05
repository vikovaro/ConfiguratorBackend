import { Module } from '@nestjs/common';
import { createKeyv } from '@keyv/redis';
import { Keyv } from 'keyv';
import { CacheableMemory } from 'cacheable';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.registerAsync({
            isGlobal: true,
            useFactory: async () => ({
                stores: [
                    new Keyv({
                        store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
                    }),
                    createKeyv('redis://:password@localhost:6379/0'),
                ],
            }),
        }),
    ],
})
export class RedisCacheModule {}
