/*
 * Title: Routes
 * Description: Application Routes
 * Author: Naziullah Shawn ( Learn with Sumit )
 * Date: 23/07/2021
 *
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
