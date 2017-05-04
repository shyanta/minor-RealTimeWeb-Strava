# Minor - Real Time Web - Strava

## Introduction
In this project I'm going to build a real time web application. I'm going to make a
website that visually represents a real-time data source. Nowadays people expect websites
to be real-time. Think about al the social media platforms. When someone posts something, you want
to see it immediately. Just like whatsapp, when someone sends you a message, you want to see it
directly, you don't want to wait around for multiple seconds.

This is why real-time is very popular right now. It's fast and more importantly, it's what people
expect, and as a frontend developer this is what should trigger you.
For this project I'm working with an API, to make a data visualisation based on real-time data.

## Live Link
The live chat can be found on the following link: <br/>
[Strava Data Visualisation](https://minor-realtimeweb-strava.herokuapp.com/)

## What did I make
For this project I'm going to work with an API from Strava. Based on the data from this API,
I want to make a data visualisation. This API works with an OAuth authorization flow.
So far I've made the authorization process through the Strava authorization link. The next thing I
have to do is to save the data. And make the visualisation based on that.

Because the API isn't a real-time API, it won't refresh the data by itself. This is something
I have to do myself. So I will put the API request in an interval function. So the data will be update
every 1000 or so miliseconds. The Strava API has an limit of 600 requests per 15 minutes, which means
the interval can't be higher than every 1500 milliseconds.

The app is made with Node.js which uses express. The templating is made with EJS.

## How to Install

#### Create an app at strava
If you want to run this project on your own computer. You'll have to make a few adjustments to this
project. First, to make a strava API run on your own site, you have to follow the next steps:
-	Create an account at [Strava](https://www.strava.com/)
-	Create an app at your settings. For this, go to your profile icon -> Click settings tab -> Click
the last tab that says 'My API'
-	To create an app, you've got to have a live link on which the Strava API can run.

If you've followed these steps, strava will give you a Client_Id and a Client_Secret.

#### Get code and set it up
To fetch the code from this repo run the following line in your terminal
```
git clone https://github.com/shyanta/minor-RealTimeWeb-Strava.git
```

When you have the code, run npm install to install al the npm packages
```
npm install
```

To get the API accessable, you have to create a .env file to set up some variables.
Place the .env file in the root of your app.
Set them op in the following way:
```
CLIENT_ID = yourClientId
CLIENT_SECRET = yourClientSecret
```

To get your app running, run the following scripts
```
npm start
```

## How it works
#### OAuth
The Strava API works with OAuth2.0. This means you can only access the users data if they give you
permission. To link to the OAuth path from strava. You have to make the following link:
```
https://www.strava.com/OAuth/authorize?client_id=' +  clientId + '&response_type=code&redirect_uri=https://minor-realtimeweb-strava.herokuapp.com/OAuth
```
The clientId is a variable that is set in the route. This is your own id so it's best to keep this private. In the indexRoute I fetched the Client_Id from the .env file.
You can get those variables like this: `process.env.CLIENT_ID`. With `res.locals.clientId` I made the
variable available in my EJS template. In the redirect_uri you have to place the link, where you want
the user to go to, after the authorized your application.
```
https://minor-realtimeweb-strava.herokuapp.com/OAuth?state=&code=ff451415cc0953c6a886a
```
When the user is redirected to your URL, this URL has a query that contains a code.
**Note:** *This code is a fake code*
``` javascript
var code = req.query.code;
var postUrl = 'https://www.strava.com/OAuth/token';

request.post({url:postUrl, form: {
	client_id: process.env.CLIENT_ID,
	client_secret: process.env.CLIENT_SECRET,
	code: code
}}, function(err,httpResponse,body){
	req.app.set('tokenData', JSON.parse(body));
})

res.render('OAuth');
```
The code `req.query.code` gets the code from the URL. This code is the one I used in the API POST that gives me an access_token.
The API has to be posted, with the variables saved inside a form object. This because the API wants the variables Form-Encoded. This way the API pastes the variables in the link to get data back.
The client_id and client_secret are being fetched from the .env file.
With `req.app.set('tokenData', JSON.parse(body));` I made the data accessable in all routes from the app.

``` JSON
{
"access_token": "83ebeabdec09f6670863766f792ead24d61fe3f9",
  "athlete": {
    "id": 227615,
    "resource_state": 3,
    "firstname": "John",
    "lastname": "Applestrava",
    "profile_medium": "http://pics.com/227615/medium.jpg",
    "profile": "http://pics.com/227615/large.jpg",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "sex": "M",
    "friend": null,
    "follower": null,
    "premium": true,
    "created_at": "2008-01-01T17:44:00Z",
    "updated_at": "2013-09-04T20:00:50Z",
    "follower_count": 273,
    "friend_count": 19,
    "mutual_friend_count": 0,
    "date_preference": "%m/%d/%Y",
    "measurement_preference": "feet",
    "email": "john@applestrava.com",
    "clubs": [ ],
    "bikes": [ ],
    "shoes": [ ]
  }
}
```
This is what the result looks like when you get this code.
After that I could use the data in the main route. With the access_token, I could make API calls.<br/>
***Shoutout to 	[Timo Verkroost](https://github.com/TimoVerkroost) with helping me with the OAuth***
#### API-calls

``` javascript
var data = req.app.get('tokenData');
var access_token = data.access_token;
var APICurrentAthlete = 'https://www.strava.com/API/v3/athlete';

request({
	url: APICurrentAthlete,
	headers: {
		'Authorization': 'Bearer ' + access_token
	}
}, function(err, response, body){
	res.locals.myData = JSON.parse(body);
})
```
I saved the tokenData in a variable to get the access_token. This token has to be used in a header in
every API-Call I do. This way the API-call is authorized with the user token, and so data can be served.

Strava API gives a lot of different API's that will fetch different data. Every API call works the same
way as the one above. Only the base_url has to be changed everytime. All calls must have a header with
the access_token.

## Features
-	Login via Strava
-	Fetching user access_token
-	Fetching Strava user data

## Wishes
-	[ ]	Store the data based on the API with OAuth.
-	[ ]	Make the API real-time with an interval.
-	[ ]	Fetch friends data.
-	[ ] Fetch friends activities.
-	[ ] Visualise activities data.
-	[ ] Send Friend requests.
-	[ ] Add Socket Events.

## Sources
-	[Strava API Documentation](http://strava.github.io/API/)
-	[JSON.stringify data with EJS](http://stackoverflow.com/questions/13788314/express-and-ejs-to-render-a-json)
-	[Timo Verkroost OAuth](https://github.com/TimoVerkroost)
