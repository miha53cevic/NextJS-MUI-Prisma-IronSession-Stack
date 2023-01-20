import { NextApiResponse, NextApiRequest } from 'next';
import { prisma } from '../../server/db';

// Slicno spring bootu za api sa dekoratorima
// https://next-api-decorators.vercel.app/

export default async function usersRoute(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data = req.body;
        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                posts: {
                    create: { title: 'Hello World' },
                },
                profile: {
                    create: { bio: 'I like turtles' },
                },

            },
        });
        res.status(201).json(newUser);
    } else if (req.method === 'GET') {
        const allUsers = await prisma.user.findMany({
            include: {
                posts: true,
                profile: true,
            }
        });
        res.status(200).json(allUsers);
    }
}