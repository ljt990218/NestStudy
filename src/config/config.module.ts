import { Module, Global, DynamicModule } from '@nestjs/common';

@Global()
@Module({
  providers: [
    {
      provide: 'Config',
      useValue: {
        teacher: 'zhangsan',
        // port: 3000,
        // database: {
        //   host: 'localhost',
        //   port: 3306,
        //   username: 'root',
        //   password: 'root',
        //   database: 'nest',
        // },
      },
    },
  ],
  exports: [{
    provide: 'Config',
    useValue: {
      teacher: 'zhangsan',
      // port: 3000,
      // database: {
      //   host: 'localhost',
      //   port: 3306,
      //   username: 'root',
      //   password: 'root',
      //   database: 'nest',
      // },
    },
  }],
})

export class ConfigModule {
  static forRoot(opton: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: {
            teacher: 'lisi' + opton,
          }
        }
      ]
    }
  }
}
