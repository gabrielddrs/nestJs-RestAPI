import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(CreateUserDto: CreateUserDto): Promise<User>{
        const saltOrRounds = 10;
        const passwdHashed = await hash(CreateUserDto.passwd, saltOrRounds);

        const user = {
            ...CreateUserDto,
            id: this.users.length + 1,
            passwd: passwdHashed,
        };

        this.users.push(user);

        return user;
    };

    async getAllUser(): Promise<User[]>{
        return this.users;
    }
}
