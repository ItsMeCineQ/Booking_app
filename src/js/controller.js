const url = 'https://booking-com.p.rapidapi.com/v1/hotels/map-markers?hotel_id=1676161&locale=en-gb';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e795d9296dmsh357f445f2d99d5bp1228a7jsne6e0dd43b489',
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

const map = document.querySelector('.hotel--map');

const fetchAPI = async function(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const html = `
            <div class="hotel--map">${result.latitude}</div>
        `;

        map.insertAdjacentHTML('afterend', html);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
fetchAPI();

const renderMap = function(){

};
renderMap();