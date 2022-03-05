const { KhmerDate } = require('./lib');
const khmerDate = new KhmerDate(new Date('2022-02-15T17:30:55.839Z'));
console.log(khmerDate.getDate());