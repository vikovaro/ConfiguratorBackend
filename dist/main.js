"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const configurator_module_1 = require("./configurator/configurator.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(configurator_module_1.ConfiguratorModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('PC Assembler API')
        .setDescription('API for assembling PCs')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const methods = ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE', 'PATCH'];
    const urls = [
        'http://localhost:3002',
    ];
    app.enableCors({
        origin: urls,
        methods: methods,
        credentials: true,
    });
    await app.listen(3001);
    console.log(`Configurator app start at port 3001`);
}
bootstrap();
//# sourceMappingURL=main.js.map