 

const $city = $('#city');
const $temperature = $('#temperature');
const $feelslike = $('#feelslike');
const $weather = $('#weather');
const $input = $('input[type="text"]');

// event listeners
$('form').on('submit', handleSubmit);
// functions
function handleSubmit(evt) {
    evt.preventDefault(); 
    const term = $input.val();
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=be5441510c687567b597809f43e244c3&units=imperial`).then(function(data) {
        console.log('Weather', data);
        $city.text(data.name);
        $temperature.text(data.main.temp);
        $feelslike.text(data.main.feels_like);
        $weather.text(data.weather[0].description);

    }, function(error) {
        console.log('Error ', error);
    });
}

// console.log("hello");