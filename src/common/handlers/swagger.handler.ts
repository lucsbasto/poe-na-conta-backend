import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function setupSwagger(app: INestApplication): INestApplication {
  const config = new DocumentBuilder()
    .setTitle('Builder API')
    .setDescription('This is the OpenAPI specification for Builder API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const outputPath = join(process.cwd(), 'builder-api-swagger-spec.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Builder API Documentation',
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  return app;
}
