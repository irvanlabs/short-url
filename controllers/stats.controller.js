import UAParser from "ua-parser-js";
import 'dotenv/config'
import { getCouchDB } from "../database/couchdb.database.js";

export function getUserAgent(ctx){
    const ua = new UAParser(ctx.request.headers["user-agent"])
    return ua
}

export function saveStats(ctx, slug){
    const db = getCouchDB()
    const stats = db.use(process.env.COUCHDB_NAME)
    const ua = getUserAgent(ctx)
    const data = {
        slugId: slug.id,
        slug: slug.slug,
        slugUuid: slug.uuid,
        device: ua.getResult()
    }
    stats.insert(data)
}
