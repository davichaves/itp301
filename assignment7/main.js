var websiteName = ['Snapchat', 
				   'Toptal', 
				   'Netflix', 
				   'Apple', 
				   'Github', 
				   'Amazon', 
				   'Pirate Bay', 
				   'Dropbox', 
				   'Twitch.tv', 
				   'Namecheap', 
				   'KickStarter', 
				   'Stack Social', 
				   'Facebook', 
				   'YouTube', 
				   'Angels List'];

var websiteURL = ['https://www.snapchat.com/', 
				  'https://www.toptal.com/', 
				  'http://www.netflix.com/browse', 
				  'http://www.apple.com', 
				  'https://github.com/', 
				  'http://www.amazon.com/', 
				  'https://thepiratebay.se/', 
				  'https://www.dropbox.com/', 
				  'http://www.twitch.tv/', 
				  'https://www.namecheap.com/', 
				  'https://www.kickstarter.com/', 
				  'https://www.stacksocial.com', 
				  'https://www.facebook.com/', 
				  'https://www.youtube.com/', 
				  'https://angel.co/'];

var websiteCategory = ['Social Network', 
					   'Freelancing', 
					   'Movies', 
					   'Technology', 
					   'Version Control', 
					   'Sales', 
					   'Piracy', 
					   'File Hosting', 
					   'Streaming', 
					   'Domains Retail', 
					   'Entrepenuership', 
					   'Special offers', 
					   'Social Network', 
					   'Videos', 
					   'Jobs'];

var websiteKeywords = ['photo,sharing,app', 
					   'work,jobs,Freelancing,developing', 
					   'Streaming,Series,Movies', 
					   'Computers,Phones,Apple', 
					   'Git,work,professional', 
					   'Retail,Sales,products', 
					   'Piracy,illegal,Files,sharing', 
					   'Files,Backup,Sky,Storage', 
					   'Live,Gaming,Brodcasts', 
					   'Domains,Sales,Technology', 
					   'Entrepeneurs,Initial,Help', 
					   'Sales,offers,cheap', 
					   'Friends,Media,Grtoups,Posts,Interaction', 
					   'Channel,Subscribe,Videos', 
					   'Connections,Job,Recruiter,Intern,Internship'];

var myDiv = document.querySelector("#sites");

function display(index){
	var previousHTML = myDiv.innerHTML;
	var myHTML = previousHTML + "<div class ='web'> <h2>" + websiteName[index] + "</h2><h4>" + websiteURL[index] +"</h4><h4>" + websiteCategory[index] +"</h4><h6>" + websiteKeywords[index] +"</h6> </div>";
	myDiv.innerHTML = myHTML;
};

for (var i=0; i<websiteName.length; i++){
	display(i);
}

function search(){
	var myText = document.querySelector('#myInput').value.trim();
	var pattern = new RegExp(myText, 'ig');
	myDiv.innerHTML = "";
	for (var i=0; i<websiteName.length; i++){
		if (websiteName[i].match(pattern) || websiteURL[i].match(pattern) || websiteCategory[i].match(pattern) || websiteKeywords[i].match(pattern)){
			display(i);			
		}
	}

}