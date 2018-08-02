//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })



//========================================================================
// (2) How many **arrival** flights are scheduled for today?

const answerElement_iceland_3 = document.getElementById('iceland-3')
var count = 0;

request.get('https://apis.is/flight?language=en&type=arrivals')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    apiJsonData.results.forEach(function(flight){
    	if (flight.airline !== null) {
    		count ++;
    	};
    })
    answerElement_iceland_3.innerHTML = count;
  })


//========================================================================
// (3) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2');

request.get('https://apis.is/concerts')
  .then(function(serverRes){
    let apiJsonData = serverRes.body;
    let concert = apiJsonData.results;
    answerElement_iceland_2.innerHTML += '<p>' + concert[0].eventDateName + '</p>';
    apiJsonData.results.forEach(function(show){
    	if (show.dateOfShow === concert[0].dateOfShow && show.eventDateName !== concert[0].eventDateName) {
    		answerElement_iceland_2.innerHTML += '<p>' + show.eventDateName + '</p>';
    	};
    });
  })


