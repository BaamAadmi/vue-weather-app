# vue-weather-app

A Mobile-first Weather App built in VueJS showcasing Cities and weather using Openweather API.

## Prerequisites

NodeJs & NPM must be installed on the development machine

## Installation and Development server

Perform `npm install` after cloning the repository
Run `npm run dev` to start Development Server to get the app running in Action.
You can format using prettier `npm run format` and lint using eslint by `npm run lint`.

## Instructions for Weather Map API

Create an account on [openweather.org](https://openweathermap.org/api) and generate API key to use in this Project
This code contains an API key which is expired. Go to `src\features\city\services\weather.service.ts` to change API key, it will be used by this App to load weather forecast.

## Weather Forecast

This App has 2 features City weather and Profile page. By Default App will show list of Cities and allow you to visit profile page via an icon on top right hand corner.

### City Weather

This app loads weather forecast for 4 hard-coded cities - Mumbai, London, Tokyo and Kuala Lumpur. The Lat, Long coordinates are set in cityStore.
It loads the Temperature and stores in a localStorage cache for 1 minute TTL. That prevents calling API multiple times. Showing local time and Weather description.
On clicking of City name it shows a Detail page where it shows Weather Forecast. Showing Hourly and Weekly temperature forecast.

### Profile

There is a Profile page which allows you to Save/Update Name, Email and phone number.

### Open Issues

1. Time displayed are on City list are not accurate. times displayed on Hourly forecast should be fixed
2. Make the site responsive

### To be Implemented

1. Complete CRUD operations on City List
2. Highlight current city on user's location and show 4 to 5 cities which user wants to add - use Google API perhaps for adding new cities ( good to have).
3. Does not contain tests.
4. Can be containerised using Docker or Podman.
