import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.ROOT_DB_HOST,
      port: parseInt(process.env.ROOT_DB_PORT, 10),
      username: process.env.ROOT_DB_USER,
      password: process.env.ROOT_DB_PASS,
      database: process.env.ROOT_DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.ROOT_DB_AUTOSYNC === 'true',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
