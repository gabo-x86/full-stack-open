const morgan = require('morgan');


const initialize = ()=>{
    return morgan(function (tokens, req, res) {

        const body = req.body ? JSON.stringify(req.body) : '{}';

        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'), '-',
          tokens['response-time'](req, res), 'ms',
          body
        ].join(' ');
    });
}

module.exports = {
    initialize
}