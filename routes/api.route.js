import Router from '@koa/router';

import { generateShortlink, getAllShortlink, checkSlug } from '../controllers/api.controller.js';

const apiRouter = new Router({prefix: '/api'});

apiRouter.get('/', (ctx) => {
    ctx.body = {message: "API Route Get!"}
})

apiRouter.post('/link', async (ctx) => {
    let slug = await checkSlug(ctx.request.body.slug)
    if(slug){
        ctx.status = 400
        ctx.body = {message: "Link sudah ada"}
        return
    }
    return await generateShortlink(ctx)
})

apiRouter.get('/link/check/:slug', async (ctx) => {
    let slug = await checkSlug(ctx.params.slug)
    if(slug){
        ctx.status = 400
        ctx.body = {message: "Link sudah ada"}
        return
    }
    ctx.status = 200
    ctx.body = {message: "Link tersedia"}
})

apiRouter.get('/links', async (ctx) => {
    return await getAllShortlink(ctx)
})


export default apiRouter;

