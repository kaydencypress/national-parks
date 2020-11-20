const express = require("express"),
	  app = express(),
	  request = require("request"),
	  router = express.Router(),
	  sizeOf = require('image-size'),
	  npsApi = require("../public/assets/npsApi.js");

const fetch = require("node-fetch");

const activities=npsApi.activities;

// root route
router.get("/",(req,res)=>{
	res.render("home");
});

// show search form
router.get("/search",(req,res)=>{
	res.render("search",{activities: activities});
})

// perform search
router.post("/search",(req,res)=> {
	if (req.body.activities) {
		(async() => {
			const parkCodes = await npsApi.PerformParkSearch(req.body.activities,req.body.states);
			if (!parkCodes) {
			res.send("No search results");
			} else {
				let redirectUrl = `/parks?parkCode=${parkCodes}&activities=${req.body.activities}`;
				redirectUrl = req.body.states ? redirectUrl + `&stateCode=${req.body.states}` : redirectUrl;
				res.redirect(redirectUrl);
			}
		})()
	} else if (req.body.states) {
		res.redirect(`/parks?stateCode=${req.body.states}`);
	} else if (req.body.q) {
		res.redirect(`/parks?q=${req.body.q}`) ;
	} else {
		res.redirect("/parks");
	}
});

// INDEX - display parks search results
router.get("/parks",npsApi.getUrlParams,(req,res)=>{
	const start = res.locals.start ? res.locals.start : 1;
	const limit = res.locals.limit ? res.locals.limit : 12;
	const parkApiUrl = npsApi.constructApiUrl(start,limit,res.locals.parkCode,res.locals.stateCode,res.locals.q);
	let searchCriteria = {};
	if (res.locals.activities) {
		const activitiesSearchedIds = res.locals.activities.split(",");
		const activitiesSearched = [];
		for (i = 0; i<activitiesSearchedIds.length; i++) {
			activitiesSearched[i] = activities.find(element => element.id === activitiesSearchedIds[i]);
		}
		searchCriteria.activities = activitiesSearched;
	}
	if (res.locals.stateCode) {
		const statesSearched = res.locals.stateCode.split(",");
		searchCriteria.states = statesSearched;
	}
	if (res.locals.q) {
		searchCriteria.q = res.locals.q;
	}
	request(parkApiUrl,(err,response,body)=>{
		if(!err & response.statusCode == 200) {
			const results = JSON.parse(body);
			console.log(parkApiUrl);
			const parkData = results.data;
			res.render("parks/index",{parkData: parkData, 
									 parkCode: res.locals.parkCode,
									 stateCode: res.locals.stateCode,
									 searchCriteria: searchCriteria,
									 start: start,
									 limit: limit,
									 constructUrlParams: npsApi.constructUrlParams});
		} else {
			res.send(err);
		}
	});
});

// SHOW park - overview
router.get("/parks/:id",(req,res)=>{
	request("https://developer.nps.gov/api/v1/parks?parkCode="+req.params.id+"&api_key=pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN",(err,response,body)=>{
		if(!err & response.statusCode == 200) {
			var results = JSON.parse(body);
			var parkData = results.data[0];
			res.render("parks/show",{parkData: parkData});
		}
	});
});

// SHOW park - location
router.get("/parks/:id/location",(req,res)=>{
	request("https://developer.nps.gov/api/v1/parks?parkCode="+req.params.id+"&api_key=pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN",(err,response,body)=>{
		if(!err & response.statusCode == 200) {
			var results = JSON.parse(body);
			var parkData = results.data[0];
			res.render("parks/location",{parkData: parkData});
		}
	});
});

// SHOW park - entry
router.get("/parks/:id/entry",(req,res)=>{
	request("https://developer.nps.gov/api/v1/parks?parkCode="+req.params.id+"&api_key=pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN",(err,response,body)=>{
		if(!err & response.statusCode == 200) {
			var results = JSON.parse(body);
			var parkData = results.data[0];
			res.render("parks/entry",{parkData: parkData});
		}
	});
});

// SHOW park - activities
router.get("/parks/:id/activities",(req,res)=>{
	request("https://developer.nps.gov/api/v1/parks?parkCode="+req.params.id+"&api_key=pXaQtxZnESvFy2yxzAgjfSRTkA4ZhxZ5QbjTUmpN",(err,response,body)=>{
		if(!err & response.statusCode == 200) {
			var results = JSON.parse(body);
			var parkData = results.data[0];
			res.render("parks/activities",{parkData: parkData, activities: activities});
		}
	});
})


module.exports = router;