const url = 'https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e795d9296dmsh357f445f2d99d5bp1228a7jsne6e0dd43b489',
		'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
	}
};

const getBookings = async function(url, options){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getBookings();