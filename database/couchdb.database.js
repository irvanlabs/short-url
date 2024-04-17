import nano from "nano";

export function getCouchDB() {
    return nano(process.env.COUCHDB_URL)
}

