import { NextApiRequest, NextApiResponse } from "next";
import withSessionRoute from "../../lib/withSessionRoute";
import { prisma } from "../../server/db";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    // get user from database then:
    const user = await prisma.user.findFirst({
        where: {
            name: req.body.name,
        }
    });

    if (!user) return res.status(400).json('Ne postoji taj name!');

    req.session.user = user;
    await req.session.save();
    res.send({ ok: true });
}