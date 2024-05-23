import { Body, Controller, Post , Get} from '@nestjs/common';
import {CreateUserDto } from 'src/domain/user/dto/create-user.dto';
import { UserService } from 'src/domain/user/service/service.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(){
        return this.userService.getAllUser();
    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto){
        return this.userService.createUser(createUser);
    }
}
