import { NextApiRequest, NextApiResponse } from "next";
import withSessionRoute from "../../lib/withSessionRoute";

export default withSessionRoute(sessionRoute);

async function sessionRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.session.user) return res.status(200).json(req.session.user);
    else return res.status(404).send('Korisnik nije logiran!');
}