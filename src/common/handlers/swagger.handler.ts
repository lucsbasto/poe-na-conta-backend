import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): INestApplication {
  const config = new DocumentBuilder()
    .setTitle('Põe na Conta API')
    .setDescription('This is the OpenAPI specification for Põe na Conta API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Builder API Documentation',
    swaggerOptions: {
      docExpansion: 'none',
      customCss: `
      :root {
        --primary-color: #90caf9;
        --secondary-color: #212121;
        --text-color: #ffffff;
        --bg-color: #121212;
      }

      body {
        background-color: var(--bg-color) !important;
        color: var(--text-color) !important;
      }

      .swagger-ui {
        background-color: var(--bg-color) !important;
        color: var(--text-color) !important;
      }

      .topbar, .info, .opblock-summary {
        background-color: var(--bg-color) !important;
        color: var(--text-color) !important;
      }

      .opblock-tag {
        background: #1e1e1e !important;
      }

      .opblock {
        background-color: #1e1e1e !important;
        border-color: #333 !important;
      }
    `,
    },
  });

  return app;
}
