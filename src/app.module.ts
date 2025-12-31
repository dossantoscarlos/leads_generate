import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [HealthModule, LeadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
