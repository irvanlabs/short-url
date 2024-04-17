import URL from 'url-parse';
import { saveStats } from "./stats.controller.js";
import db from '../database/database.js';

export async function getLink(ctx){
    const slug = ctx.params.slug;
    const link = await db.shortlink.findUnique({
        where: {slug}
    })
    saveStats(ctx, link)
    const url = new URL(link.url);
    if (!url.protocol) {
        url.set('protocol', 'http:');
    }
    if(link){
        ctx.status = 302;
        ctx.redirect(url)
    }
}

