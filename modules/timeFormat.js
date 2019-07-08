function timeFormat(timeValue) {
  var hours,
      minutes,
      seconds,
      hour = 3600,
      minute = 60;

  hours = processedValue = Math.floor(timeValue / hour);
  processedValue = timeValue - (processedValue * hour);
  minutes = processedValue = Math.floor(processedValue / minute);
  seconds = timeValue - ( (hours * hour) + (minutes * minute) );
  seconds = seconds.toFixed(0);

  var timeString = (hours === 0 ? '' : (hours.toString() + ' godz. ')) +
                   (minutes === 0 ? '' : (minutes.toString() + ' min. ')) +
                   (seconds === 0 ? '' : (seconds.toString() + ' sek.'));

  return timeString;
}

exports.format = timeFormat;
