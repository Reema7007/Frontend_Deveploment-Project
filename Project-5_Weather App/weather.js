
const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
	weatherFn('Varanasi');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('.temp').
		html(`${data.main.temp}°C`);
	$('.city').text(data.name);
	$('.humidity').
		text(data.weather[0].humidity);
	$('.wind').
		html(` ${data.wind.speed} m/s`);
	$('.weather-icon').
		attr('src',
			`images/rain.png`);
	$('.weather').fadeIn();
}


