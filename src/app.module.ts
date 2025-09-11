import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfigFactory from 'typeorm.config';
import { CrfModule } from './crf/crf.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: typeOrmConfigFactory,
      inject: [ConfigService],
    }),

    CrfModule,
    // ExampleModule,
    // MerchantModule,
  ],
})
export class AppModule {
  // This is the root module of the application
  // You can add global providers or configurations here if needed
}
