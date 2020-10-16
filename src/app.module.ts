import { Module } from '@nestjs/common';
import { EnvService } from './services/env.service';
import { Environment } from './models/Environment';
import { EnvController } from './controllers/env.controller';

@Module({
  imports: [Environment],
  controllers: [EnvController],
  providers: [EnvService],
})
export class AppModule {}
