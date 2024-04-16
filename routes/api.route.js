import Router from '@koa/router';
import {PrismaClient} from '@prisma/client';
import {customAlphabet} from 'nanoid';
import crypto from 'crypto';

const apiRouter = new Router({prefix: '/api'});
const prisma = new PrismaClient();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const nanoid = customAlphabet(alphabet, 5);

const generateRandomString = () => {
    const timestamp = Date.now().toString();
    const randomness = Math.random().toString();
    const hash = crypto.createHash('sha256').update(timestamp + randomness).digest('hex');
    return hash.substring(0, 2);
};

apiRouter.get('/', (ctx) => {
    ctx.body = {message: "API Route Get!"}
})

apiRouter.post('/link', async (ctx,next) => {
    let {slug, url} = ctx.request.body;
    if(slug==''){
        slug = (nanoid().toString())+(generateRandomString())
    }
    const link = await prisma.shortlink.create({
        data: {slug, url}
    })
    ctx.body = link;
})

apiRouter.get('/links', async (ctx) => {
    const links = await prisma.shortlink.findMany();
    ctx.body = links;
})


export default apiRouter;

