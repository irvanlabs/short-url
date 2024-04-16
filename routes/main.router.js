import Router from '@koa/router';
import {PrismaClient} from '@prisma/client';
import URL from 'url-parse';
const mainRouter = new Router();
const prisma = new PrismaClient();


mainRouter.get('/:slug', async (ctx) => {
    const slug = ctx.params.slug;
    const link = await prisma.shortlink.findUnique({
        where: {slug}
    })
    const url = new URL(link.url);
    if (!url.protocol) {
        url.set('protocol', 'http:');
    }
    if(link){
        ctx.status = 302;
        ctx.redirect(url)
    }
})

export default mainRouter;

