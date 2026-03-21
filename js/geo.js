async function geo(){
const url = 'https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd57e65adc9mshaaf9059dc8deb61p146b27jsn6a55c8764211',
		'x-rapidapi-host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
geo();