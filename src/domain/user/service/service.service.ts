import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity>{
        const saltOrRounds = 10;
        const passwdHashed = await hash(CreateUserDto.passwd, saltOrRounds);


        return this.userRepository.save({
            ...CreateUserDto,
            passwd: passwdHashed,
        });
    };

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }
}
