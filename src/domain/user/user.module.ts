import { Module } from '@nestjs/common';
import { UserController } from 'src/presentation/user/user.controller';
import { UserService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}
