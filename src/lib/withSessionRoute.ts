import { NextApiHandler } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { IronSessionOptions } from "iron-session";

import type { User } from '@prisma/client';

declare module "iron-session" {
    interface IronSessionData {
        user: User | null
    }
}

const ironOptions: IronSessionOptions = {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, ironOptions);
}

export default withSessionRoute;