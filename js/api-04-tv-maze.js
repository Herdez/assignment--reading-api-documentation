/*
##### TV Maze
https://www.tvmaze.com/ap
*/
//1. What is the average rating for the show Better Call Saul?

const answerElement_tvmaze_1 = document.querySelector('#tvmaze-1')

request.get('http://api.tvmaze.com/shows/618')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    let rating = apiJsonData.rating.average;
    answerElement_tvmaze_1.innerHTML += '<p>' + rating + '</p>';
  })


//2. When was the premiere date for the 9th season of Friends?

const answerElement_tvmaze_2 = document.querySelector('#tvmaze-2')

request.get('http://api.tvmaze.com/shows/431/episodebynumber?season=9&number=1')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    answerElement_tvmaze_2.innerHTML += '<p>' + apiJsonData.airdate + '</p>';
  })



//3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze_3 = document.querySelector('#tvmaze-3')

request.get('http://api.tvmaze.com/people/10257/castcredits')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    let showsNumber = apiJsonData.length;
    answerElement_tvmaze_3.innerHTML += '<p>' + showsNumber + '</p>';
  })



