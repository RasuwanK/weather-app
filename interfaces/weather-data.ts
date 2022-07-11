type Cordinates = {
    lon: string;
    lat: string;
}

type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string;
}

type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

type Wind = {
    speed: number;
    deg: number;
}

type Cloud = {
    all: number;
}

type Sys = {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherData {
    cord : Cordinates; 
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}