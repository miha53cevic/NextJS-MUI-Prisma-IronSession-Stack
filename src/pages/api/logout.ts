import { createHandler, Get, UnauthorizedException, Req } from 'next-api-decorators';
import type { NextApiRequest } from "next";

import withSessionRoute from "../../lib/withSessionRoute";

class LogoutController {
    @Get()
    public async logout(@Req() req: NextApiRequest) {
        if (!req.session.user) throw new UnauthorizedException('User not logged in!');

        req.session.destroy();
        return "OK";
    }
}

export default withSessionRoute(createHandler(LogoutController));