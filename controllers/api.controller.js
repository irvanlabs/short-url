import {customAlphabet} from 'nanoid';
import _ from 'lodash';
import crypto from 'crypto';
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const nanoid = customAlphabet(alphabet, 5);
import db from '../database/database.js'

const generateRandomString = () => {
    const timestamp = Date.now().toString();
    const randomness = Math.random().toString();
    const hash = crypto.createHash('sha256').update(timestamp + randomness).digest('hex');
    return hash.substring(0, 2);
};

async function duplicatePrevention(slug, url, ctx){
    const slugs = _.shuffle(slug.split('')).join('');
    const link = await db.shortlink.create({
        data: {slug: slugs, url}
    })
    ctx.body = link;
    return ctx
}

export async function checkSlug(slug){
    const link = await db.shortlink.findFirst({
        where: {slug: slug}
    })
    return link
}

export async function generateShortlink(ctx){
    let {slug, url} = ctx.request.body;
    if(slug==''){
        slug = (nanoid().toString())+(generateRandomString())
    }
    try {
        const link = await db.shortlink.create({
            data: {slug, url}
        })
        ctx.body = link;
    } catch (error) {
      return await duplicatePrevention(slug, url, ctx)
    }
}

export async function getAllShortlink(ctx){
    const links = await db.shortlink.findMany();
    ctx.body = links;
}