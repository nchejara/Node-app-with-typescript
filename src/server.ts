import app from "./app";
import * as http from "http";

const port = process.env.PORT || 3000;

let server = http.createServer(app);
server.listen(port,  () => {
    return console.log(`An express server has started and listening on port ${port}`);
});

