import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfiguratorModule } from './configurator/configurator.module';

async function bootstrap() {
    const app = await NestFactory.create(ConfiguratorModule);

    const config = new DocumentBuilder()
        .setTitle('PC Assembler API')
        .setDescription('API for assembling PCs')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

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
