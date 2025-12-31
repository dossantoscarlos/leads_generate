import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { LeadsModule } from '../src/leads/leads.module';
import { Lead } from '../src/leads/entities/lead.entity';
import { PrismaService } from '../src/prisma.service';
import { prismaMock } from '../src/__mocks__/prisma.service';

describe('LeadController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LeadsModule],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    prismaMock.lead.findMany.mockResolvedValue([]);
    return request(app.getHttpServer()).get('/leads').expect(200).expect([]);
  });

  it('/ (POST)', () => {
    const lead: Lead = new Lead();
    lead.firstname = 'carlos';
    lead.lastname = 'santos';
    lead.email = 'email@email.com';
    lead.city = 'nova iguacu';
    lead.phone = '1111111111';
    lead.street = 'teste';
    lead.state = 'Rio de janeiro';
    lead.zipcode = '3455544';

    prismaMock.lead.create.mockResolvedValue(lead);
    return request(app.getHttpServer())
      .post('/leads')
      .expect(201)
      .expect({ ...lead });
  });
});
