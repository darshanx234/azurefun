// index.js
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? `Hello, ${name}. This is a Hello World Azure Function!`
        : "Please pass a name on the query string or in the request body.";

    context.res = {
        status: 200, /* Defaults to 200 */
        body: responseMessage
    };
};