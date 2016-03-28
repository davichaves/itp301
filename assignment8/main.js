var photos = new Array();

window.onload = function() {
	for (var i = 0; i < 10; i++) {
	    photos.push(new Object());
	}
	populate();
	console.log(photos);
	
	for (i=0; i<10; i++){
		var image = document.createElement("img");
		image.id = i;
		image.setAttribute('src', photos[i].source);
		image.style.cssText = 'height:200px; margin: 10px;'
		document.querySelector("#thumbnails").appendChild(image);
	}
};

document.getElementById('myInput').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;
	if ( charCode == '13' ) {
      	search();
      	return false;
    }
}

function search(){
	for (var i = 0; i < 10; i++) {
		document.getElementById(i).border = 0;
	}
	var myText = document.querySelector('#myInput').value.trim();
	var pattern = new RegExp(myText, 'ig');
	for (var i=0; i<10; i++){
		if (photos[i].caption.match(pattern) || photos[i].tags.match(pattern)){
			photos[i].search("" + i);			
		}
	}

}

function populate() {
	photos[0] = {
		source: "1.jpg",
		caption: "Me at a conference",
		tags: "me,conference,suit,brasa,logo",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[1] = {
		source: "2.jpg",
		caption: "Me and BRASA's Tech team",
		tags: "pose,funny,people,friend,cool",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[2] = {
		source: "3.jpg",
		caption: "USC's BRASA",
		tags: "usc,tommy,trojan,campus,flag",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[3] = {
		source: "4.jpg",
		caption: "Me and the homies",
		tags: "friends,bbq,house,fun,awesome",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[4] = {
		source: "5.jpg",
		caption: "Friends at a conference",
		tags: "conference,people,group,awesome,suit",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[5] = {
		source: "6.jpg",
		caption: "Me and friends at Yosemite",
		tags: "yosemite,hiking,fun,outdoors,trees",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[6] = {
		source: "7.jpg",
		caption: "BRASA Members",
		tags: "members,fun,party,house,friends",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[7] = {
		source: "8.jpg",
		caption: "Me and friends",
		tags: "cool,friends,brotherhood,nice,california",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[8] = {
		source: "9.jpg",
		caption: "BRASA Retreat",
		tags: "retreat,fun,house,bonding,learning",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
	photos[9] = {
		source: "10.jpg",
		caption: "Baby me",
		tags: "baby,me,cute,cool,awesome",
		search: function (query) {
			document.getElementById(query).border = 3;
		}
	}
}
