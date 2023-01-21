import { Body, createHandler, Get, Post, HttpCode, ValidationPipe } from 'next-api-decorators';
import { IsEmail, IsNotEmpty } from 'class-validator';

import { prisma } from '../../server/db';

class CreateUserDTO {
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    email!: string;
}

class UsersController {
    @Get()
    public async listUsers() {
        const users = await prisma.user.findMany({
            include: {
                posts: true,
                profile: true,
            }
        });
        return users;
    }

    @Post()
    @HttpCode(201)
    public async addUser(@Body(ValidationPipe) dto: CreateUserDTO) {
        const newUser = await prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                posts: {
                    create: { title: 'Hello World' },
                },
                profile: {
                    create: { bio: 'I like turtles' },
                },

            },
        });
        return newUser;
    }
}

export default createHandler(UsersController);