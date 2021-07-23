/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Naziullah Shawn ( Learn with Sumit )
 * Date: 23/07/2021
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
