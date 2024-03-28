import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesModule } from './classes/classes.module';
import { ConfigModule } from './config/config.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'liujintao04',
    database: 'user',
    retryDelay: 3000,
    retryAttempts: 10,
    autoLoadEntities: true,
    synchronize: true,
  }), StudentsModule, ClassesModule, ConfigModule.forRoot('yay'), OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
