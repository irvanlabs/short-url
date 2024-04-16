import Koa from "koa";
import bodyParser from 'koa-bodyparser';
import apiRouter from "./routes/api.route.js";
import mainRouter from "./routes/main.router.js";
const app = new Koa();

app.use(bodyParser());
app.use(apiRouter.routes());
app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());
app.use(apiRouter.allowedMethods());
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
