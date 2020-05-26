import translate from './translate';
import getImage from './image';
import Temperature from './temperature';

class Weather {

	async getWeatherData(place, lang) {
		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		const url = `https://api.darksky.net/forecast/225ba1dd689683ae927774d44c6db1d0/${place}?units=si&lang=${lang}`;
		const response = await fetch(proxyUrl + url);
		const data = await response.json();
		const {
			icon,
			temperature,
			summary,
			apparentTemperature,
			windSpeed,
			humidity,
		} = data.currently;
		this.createWeatherToday(icon, temperature);
		this.createWeatherInfo(summary, apparentTemperature, windSpeed, humidity);
		this.createWeatherWeek(data.daily.data.splice(1, 3), lang);
		Temperature.checkTemperature();
		//getImage(icon, summary);
		
	}

	createWeatherToday(icon, temp) {
		document.querySelector('.today_icon').src = `image/${icon}.svg`
		document.querySelector('.today_temperature').innerText = `${Math.round(temp)}°C`;
	}

	createWeatherInfo(description, sensation, windSpeed, humidity) {
		document.querySelector('.today_moreInfo').innerHTML = `
		<li class="today_moreInfo_list">${description}</li>
		<li class="today_moreInfo_list sensation">${Math.round(sensation)}°C</li>
		<li class="today_moreInfo_list">${windSpeed}m/s</li>
		<li class="today_moreInfo_list">${humidity}%</li>`;
	}

	createWeatherWeek(days, lang) {
		document.querySelector('.weather-week').innerHTML = '';
		days.forEach((day) => {
			const milliseconds = 1000;
			const time = new Date(day.time * milliseconds);
			document.querySelector('.weather-week').innerHTML += `
			<div class="day_week">
					<span class="day">${translate(lang, time.getDay())}</span>
					<div class="day_week_info">
						<img class="day_week_icon" src="image/${day.icon}.svg" width="80" height="80" alt="icon weather">
						<div class="day_week_temperature">${Math.round(day.apparentTemperatureHigh)}°C</div>
					</div>
				</div>`;
		});
	}
}

const weather = new Weather()

export default weather;
