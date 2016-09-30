// functional programming
// functions are values and can be passed as param to another function

var weather = [72 , 89, 90, 67, 87];
var goOutside = [];

for (var i = 0; i < weather.length; i++) {
  if (weather[i] > 70) {
    goOutside.push(weather[i]);
  }
}

// using filter instead
goOutside = weather.filter(function(tmp) {
  return tmp > 70;
});

// more adavanced

var forecast = [
  {day: 'Monday', sun: true},
  {day: 'Tuesday', sun: false},
  {day: 'Wednesday', sun: true},
  {day:'Thursday', sun:true}
];

var sunnyDays = forecast.filter(function(weather) {
  return weather;
  }
);
