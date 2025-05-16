import { MainModule } from '@/main.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest'; // ✅ CORRETO AGORA

describe('Hello (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/hello?name=Carlos (GET)', () => {
    return request(app.getHttpServer()).get('/hello?name=Carlos').expect(200).expect({ message: 'Greetings, Carlos!' });
  });

  afterAll(async () => {
    await app.close();
  });
});
