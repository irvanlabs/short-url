import Router from '@koa/router';
import { getLink } from '../controllers/main.controller.js';
const mainRouter = new Router();


mainRouter.get('/:slug', async (ctx) => {
    return await getLink(ctx)
})

export default mainRouter;

