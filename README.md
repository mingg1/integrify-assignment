# Weather forecast app

🌤 Web application to check a daily weather forecast of cities by using [Accuweather API](https://developer.accuweather.com/).<br/><br/>
<div align="center">
<img width="640" alt="main_page" src="https://user-images.githubusercontent.com/61379336/178159897-178f025e-34aa-43c2-8a1a-c5542e348396.png"></div>

## Demo
Demo application is available [here](https://weather-forecast-min.netlify.app/).

## Features
Basically, the application shows names of city, area or province, country, minimum and maximum temperature, and weather conditions of the day and night of the day with an icon.
If there is a possibility to rain, the app will show the precipitation intensity as well.<br/><br/>

- ### Get weather forecast by city name <br/>
By searching the name of a city, users can get weather information about it.
The application will show information of cities that match the search text.

<div align="center">
<img alt="search" width="640" src="https://user-images.githubusercontent.com/61379336/178159907-7085ff74-5fd5-4bb7-85d8-664539cbd01e.png"></div>
<br/>

- ### Get current location's weather forecast <br/>
By clicking the button under the search bar, users can get a weather forecast of their current location.<br/>

<div align="center">
<img alt="geo" width="640" src="https://user-images.githubusercontent.com/61379336/178159844-e6bb2f6d-9a1b-43d2-8689-4d36a67259b2.png"></div>

## Run the app locally
If you want to run this application, first get an API key from Accuweather site above.
Create .env file on the root folder and make a variable name with <strong>REACT_APP_API_KEY</strong>.

```sh
REACT_APP_API_KEY=YOUR_API_KEY
```
<br/>
Then run the command.
```sh
npm start
```
