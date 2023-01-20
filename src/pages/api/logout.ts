import { NextApiRequest, NextApiResponse } from "next";
import withSessionRoute from "../../lib/withSessionRoute";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
    if (!req.session.user) return res.status(404).send('Korisnik nije logiran!');
    
    req.session.destroy();
    res.status(200).send("OK");
}