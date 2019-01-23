
const list = document.getElementById('list-data')
const b0 = document.getElementById('b0')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const tagKeywords = ['TokyoTower', 'Lake', 'WillisTower', 'BigBen', 'EmpireStateBuilding', 'CNTower', 'WorldTradeCenter', 'StPaulCathedral', 'EiffelTower', 'HofburgPalace' ]


while(b1.innerHTML== b2.innerHTML || b1.innerHTML==b3.innerHTML || b1.innerHTML==b4.innerHTML || b2.innerHTML==b3.innerHTML|| b2.innerHTML==b4.innerHTML|| b3.innerHTML==b4.innerHTML){
	b1.innerHTML = tagKeywords[Math.floor(Math.random()*tagKeywords.length)]
	b2.innerHTML = tagKeywords[Math.floor(Math.random()*tagKeywords.length)]
	b3.innerHTML = tagKeywords[Math.floor(Math.random()*tagKeywords.length)]
	b4.innerHTML = tagKeywords[Math.floor(Math.random()*tagKeywords.length)]
}
const listOfb= [b1.innerHTML, b2.innerHTML,b3.innerHTML,b4.innerHTML]


function getTagKeywords (tagNames){
	fetch('https://api.tumblr.com/v2/tagged?tag=' + tagNames + '&api_key=EjE2BEqOmilcotTmvojYRcp0RgwN4feDAPuwsqFi7aVk7ObffA')
	  .then(function(response){
	     return response.json(); // convert the raw response into a JSON
	  })
	  .then(function(result){
		
	    const items = result.response;
	    let masonry;

	    for(let i=0 ; i< items.length; i++){
	     	const item = items[i]
	     	
	     	if(item.photos != undefined){
			    const imgSrc = item.photos[0].original_size.url;

			    const img = document.createElement ('img');
			    img.src= imgSrc;
			    
			    img.onload = function(){
			    	masonry.layout();
			    }

			    const li = document.createElement('li');
			    li.appendChild(img);

			    list.appendChild(li);
			}
	    }
	 	masonry = new Masonry(list, {
  			itemSelector: 'li',
  			columnWidth : 150,
  			gutterWidth :5,  		
		});

		masonry.layout();
	 })	  	
}

let random = listOfb[Math.floor(Math.random()*listOfb.length)]
getTagKeywords(random)



b1.onclick = function(){
	if(b1.innerHTML == random){
		window.alert("You are right!")
	}
	else{
		window.alert("You are wrong. The answer is" + random + "!" )
	}
}

b2.onclick = function(){
	if(b2.innerHTML == random){
		window.alert("You are right!")
	}
	else{
		window.alert("You are wrong. The answer is" + random + "!" )
	}
}
b3.onclick = function(){
	if(b3.innerHTML == random){
		window.alert("You are right!")
	}
	else{
		window.alert("You are wrong. The answer is" + random + "!" )
	}
}
b4.onclick = function(){
	if(b4.innerHTML == random){
		window.alert("You are right!")
	}
	else{
		window.alert("You are wrong. The answer is" + random + "!" )
	}
}

