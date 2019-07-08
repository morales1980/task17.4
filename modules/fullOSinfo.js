var os = require('os');
var timeFormat = require('./timeFormat');

function getFullinfo() {
  var type = os.type();
  if(type === 'Darwin') {
    type = 'OSX';
  } else if( type === 'Windows_NT') {
    type = 'Windows';
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var formatedTime = timeFormat.format(os.uptime());
  var userInfo = os.userInfo();

  process.stdout.write('Operating system is: ' + type + '\n');
  process.stdout.write('Release is: ' + release + '\n');
  process.stdout.write('CPU model is: ' + cpu + '\n');
  process.stdout.write('CPU uptime is: ' + formatedTime + '\n');
  process.stdout.write('User name is: ' + userInfo.username + '\n');
  process.stdout.write('User home dir is: ' + userInfo.homedir + '\n');
}

exports.print = getFullinfo;
