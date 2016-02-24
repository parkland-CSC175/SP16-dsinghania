console.log("Hello World!");
var blogArticles = [{
		title: "Advanced Performance Audits With DevTools",
		author: "Paul Irish",
		publishedOn: "Mar 27th, 2015",
		url: "http://www.paulirish.com/2015/advanced-performance-audits-with-devtools/",
		content: [{
				heading: "",
				paragraph: "In this doc, we look at the scrolling of CNET, input latency on CNET, some very interesting challenges on the responsive Time.com, and infinite scroll on Google Play’s desktop site."
			},{
				heading: "",
				paragraph: "The intended audience is browser engineers and performance-minded frontend developers. It’s fairly advanced, but I’m spelunking deep to identify how the sites butt heads with the browser APIs and architecture."
			},{
				heading: "",
				paragraph: "Lastly, we’re using this research to improve Chrome DevTools and what you hear from Chrome."
			}	
		]
	},{
		title: "Introducing RAIL: A User-Centric Model For Performance",
		author: "Paul Irish & Paul Lewis",
		publishedOn: "10/2/2015",
		url: "http://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/",
		content: [{
				heading: "Slow",
				paragraph: "Is changing the DOM slow? What about loading a <script> in the <head>? JavaScript animations are slower than CSS ones, right? Also, does a 20-millisecond operation take too long? What about 0.5 seconds? 10 seconds? "
			},{
				heading: "",
				paragraph: "While it’s true that different operations take different amounts of time to complete, it’s hard to say objectively whether something is slow or fast without the context of when it’s happening. For example, code running during idle time, in a touch handler or in the hot path of a game loop each has different performance requirements. Put another way, the people using your website or app have different performance expectations for each of those contexts. Like every aspect of UX, we build for our users, and what they perceive is what matters most. In fact, number one on Google’s ten things we know to be true is “Focus on the user and all else will follow.”"
			},{
				heading: "",
				paragraph: "Asking “What does slow mean?,” then, is really the wrong question. Instead, we need to ask “What does the user feel when they’re interacting with the things we build?”"
			}
		]	
}];

var len = blogArticles.length;

for(var i = 0; i < len; i++) {
    
    createBlogArticle( blogArticles[i]);
}

function createBlogArticle(blogArticles) {
    
    var blogContainer = document.getElementById("blog-container");
    
    var divArticle = document.createElement("div");
    divArticle.className = "article-wrapper";
    
    blogContainer.appendChild(divArticle);
    
    var h1Article = document.createElement("h1");
    divArticle.appendChild(h1Article);
    h1Article.innerHTML = blogArticles.title;
    
    var h2Article = document.createElement("h2");
    divArticle.appendChild(h2Article);
    h2Article.innerHTML = blogArticles.author;
    
    var h3Article = document.createElement("h3");
    divArticle.appendChild(h3Article);
    h3Article.innerHTML = blogArticles.publishedOn;
    
    var divContent = document.createElement("div");
    divContent.className = "content-wrapper";
     
    divArticle.appendChild(divContent);
    
    for(var j = 0; j < blogArticles.content.length; j++) {
     
         if(blogArticles.content[j].heading.length > 0) {
             var h2Content = document.createElement("h2");
             divContent.appendChild(h2Content);
             h2Content.innerHTML = blogArticles.content[j].heading;
          }
          
          var pContent = document.createElement("p");
          divContent.appendChild(pContent);
          pContent.innerHTML = blogArticles.content[j].paragraph;
    }  
}