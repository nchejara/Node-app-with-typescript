import * as express from "express"; // import express modules
import * as bodyParser from "body-parser";


class App {
    constructor() {
        this.app = express(); //initialize app
        this.config();
        this.routes();
    }

    public app: express.Application; //
    private config(): void {
        this.app.set("superSecret", "secret key goes here");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));


    }
    private routes(): void {

        this.app.get("/", (req, res) => {
            return res.status(200).json({"message": "Hello, World!"});
        });

    }
}
export default new App().app;
