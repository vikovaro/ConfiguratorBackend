"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seed_module_1 = require("./seed.module");
const core_1 = require("@nestjs/core");
const nestjs_command_1 = require("nestjs-command");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(seed_module_1.SeedModule, {
        logger: ['error'],
    });
    app.select(nestjs_command_1.CommandModule).get(nestjs_command_1.CommandService).exec();
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed-cli.js.map