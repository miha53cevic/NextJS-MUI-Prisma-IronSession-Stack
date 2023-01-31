import { Body, createHandler, Post, UnauthorizedException, ValidationPipe, Req } from 'next-api-decorators';
import { IsNotEmpty, IsEmail } from 'class-validator';
import type { NextApiRequest } from "next";

import withSessionRoute from "../../lib/withSessionRoute";
import { prisma } from "../../server/db";

class LoginDTO {
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    password!: string;
}

class LoginController {
    @Post()
    public async login(@Req() req: NextApiRequest, @Body(ValidationPipe) dto: LoginDTO) {
        const user = await prisma.user.findFirst({
            where: {
                email: dto.email,
                password: dto.password,
            }
        });

        if (!user) throw new UnauthorizedException();

        req.session.user = user;
        await req.session.save();
        return "OK";
    }
}

export default withSessionRoute(createHandler(LoginController));