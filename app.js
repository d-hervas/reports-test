
/**
 * Module dependencies.
 */

const express = require('express')
  , http = require('http')
  , path = require('path')
  , logger = require('morgan')
  , methodOverride = require('method-override');

const app = express();

// Will keep reports in memory
const reports = require('./data/reports.json').elements;

const REPORT_STATES = require('./utils');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'client/build')));

if (app.get('env') == 'development') {
  app.locals.pretty = true;
}

app.get('/reports', (req, res) => {
  const {state} = req.query
  if (Object.keys(REPORT_STATES).includes(state)) {
    res.send(reports.filter(x => x.state === state))
  } else {
    res.send(reports)
  }
});

app.put('/reports/:reportId', (req, res) => {
  const {reportId} = req.params
  const { body } = req
  const reportIndex = reports.findIndex(x => x.id === reportId)
  if (reportIndex === -1) {
    return res.sendStatus(404)
  }
  switch (body.ticketState) {
    case REPORT_STATES.CLOSED: 
      reports[reportIndex] = {
        ...reports[reportIndex],
        state: 'CLOSED'
      }
      return res.sendStatus(200)
    case REPORT_STATES.BLOCKED:
      reports[reportIndex] = {
        ...reports[reportIndex],
        state: 'RESOLVED'
      }
      return res.sendStatus(200)
    default:
      return res.sendStatus(400)
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
