import { Module } from '@nestjs/common';
import { UserController } from 'src/presentation/user/user.controller';
import { UserService } from './service/service.service';

@Module({
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}
