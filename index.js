/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to to monitor up or down town time of users defined links
 * Author: Naziullah Shawn(credit: learn with sumit)
 * Date: 20/07/2021
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
