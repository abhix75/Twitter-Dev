import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js"
import passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";
import {serverConfig} from "./config/index.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes);

app.listen(serverConfig.PORT, async () => {
    console.log("Server Started");
        await connect();
        console.log(`MongoDb Connected and Successfully started the server on PORT : ${serverConfig.PORT}`);


});
