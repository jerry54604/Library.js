var DateTime = (function() {
  var dateFormatRegExp = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g;
	
  // Can modify to include different culture calender
  var calendars = {
    standard: {
      days: {
        names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
      },
      months: {
        names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      AM: [ "AM", "am", "AM" ],
      PM: [ "PM", "pm", "PM" ],
      patterns: {
        d: "M/d/yyyy",
        D: "dddd, MMMM dd, yyyy",
        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
        g: "M/d/yyyy h:mm tt",
        G: "M/d/yyyy h:mm:ss tt",
        m: "MMMM dd",
        M: "MMMM dd",
        s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
        t: "h:mm tt",
        T: "h:mm:ss tt",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        y: "MMMM, yyyy",
        Y: "MMMM, yyyy"
      },
      "/": "/",
      ":": ":",
      firstDay: 0,
      twoDigitYearMax: 2029
    }
  }
	
  var pad = function(str, len, ch) {
    while (str.length < len) {
      str = ch + str;
    }
    return str;
  }
	
  var formatDate = function(date, format) {
    var calendar = calendars.standard,
      days = calendar.days,
      months = calendar.months;

    format = calendar.patterns[format] || format;

    return format.replace(dateFormatRegExp, function (match) {
      var minutes;
      var result;
      var sign;

      if (match === "d") {
        result = date.getDate();
      } else if (match === "dd") {
        result = pad(date.getDate());
      } else if (match === "ddd") {
        result = days.namesAbbr[date.getDay()];
      } else if (match === "dddd") {
        result = days.names[date.getDay()];
      } else if (match === "M") {
        result = date.getMonth() + 1;
      } else if (match === "MM") {
        result = pad(date.getMonth() + 1);
      } else if (match === "MMM") {
        result = months.namesAbbr[date.getMonth()];
      } else if (match === "MMMM") {
        result = months.names[date.getMonth()];
      } else if (match === "yy") {
        result = pad(date.getFullYear() % 100);
      } else if (match === "yyyy") {
        result = pad(date.getFullYear(), 4);
      } else if (match === "h" ) {
        result = date.getHours() % 12 || 12;
      } else if (match === "hh") {
        result = pad(date.getHours() % 12 || 12);
      } else if (match === "H") {
        result = date.getHours();
      } else if (match === "HH") {
        result = pad(date.getHours());
      } else if (match === "m") {
        result = date.getMinutes();
      } else if (match === "mm") {
        result = pad(date.getMinutes());
      } else if (match === "s") {
        result = date.getSeconds();
      } else if (match === "ss") {
        result = pad(date.getSeconds());
      } else if (match === "f") {
        result = math.floor(date.getMilliseconds() / 100);
      } else if (match === "ff") {
        result = date.getMilliseconds();
        if (result > 99) {
          result = math.floor(result / 10);
        }
        result = pad(result);
      } else if (match === "fff") {
        result = pad(date.getMilliseconds(), 3);
      } else if (match === "tt") {
        result = date.getHours() < 12 ? calendar.AM[0] : calendar.PM[0];
      } else if (match === "zzz") {
        minutes = date.getTimezoneOffset();
        sign = minutes < 0;

        result = math.abs(minutes / 60).toString().split(".")[0];
        minutes = math.abs(minutes) - (result * 60);

        result = (sign ? "+" : "-") + pad(result);
        result += ":" + pad(minutes);
      } else if (match === "zz" || match === "z") {
        result = date.getTimezoneOffset() / 60;
        sign = result < 0;

        result = math.abs(result).toString().split(".")[0];
        result = (sign ? "+" : "-") + (match === "zz" ? pad(result) : result);
      }

      return result !== undefined ? result : match.slice(1, match.length - 1);
    });
  }
	
  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
	
  return {
    formatDate: formatDate,
    timeSince: timeSince
  }
})();

/*
console.log(DateTime.formatDate(new Date(), "dd-MMM-yyyy"));
console.log(DateTime.timeSince(new Date("9/8/2015")));
*/
