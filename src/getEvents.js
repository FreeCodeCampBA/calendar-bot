const moment = require('moment-timezone');
const request = require('request-promise');

const { API_URL } = require('../config');

moment.locale('es')

const TIMEZONE = 'America/Buenos_Aires'

module.exports = async day => {
  const events = await request(API_URL, { json: true })
  const eventsByMonthAndYear = events.find(calendar => (
    calendar.when.month == day.format('MMMM') &&
    calendar.when.year == day.format('YYYY')
  ))
  return eventsByMonthAndYear.events.filter(event => (
    moment.tz(new Date(event.date), TIMEZONE).isSame(day, 'days')
  ));
}
