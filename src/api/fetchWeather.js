const API_KEY = '4f2e7d31bb19573027ea67d839d4d5a9';

export async function gettingWeather(){
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Samara&APPID=${API_KEY}&units=metric`);
    const data = await api_url.json();
    return data
}
