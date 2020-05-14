var name = "Ariel Lunenfeld";
var firstName = "Ariel";
var lastName = "Lunenfeld";
var articles= "";
var firstArticle = "";
var button = "";
var i=0;

function initliaze(){

    var main = document.getElementsByTagName("main")[0] ;
        
    for( i=0; i < name.length*2-2 ; ++i) {
        articles += "<article></article>";
    }
    
    main.innerHTML= articles;    
    
    firstArticle = document.getElementsByTagName("article")[0];

    var par = document.createElement("p");
    firstArticle.appendChild(par);
    par.innerText = name[0]; 

    hover(); 
    buttons();
}

function hover(){
    firstArticle.onmouseover = function(){ 
        document.getElementsByTagName("p")[0].style.color = "red";
        document.getElementsByTagName("article")[0].style.backgroundColor = "cornflowerblue";
    }

    firstArticle.onmouseout = function(){
        document.getElementsByTagName("p")[0].style.color = "transparent";
        document.getElementsByTagName("article")[0].style.backgroundColor = "transparent";
    }
}

function buttons(){
    var button = document.getElementsByTagName("button")[0];
    button.onclick = function(){ 
        if (document.getElementsByTagName("article")[0].style.backgroundColor == "transparent"){
            document.getElementsByTagName("p")[0].style.color = "transparent";
            for( i=0; i < firstName.length ; ++i) {
                document.getElementsByTagName("article")[i].style.backgroundColor = "cornflowerblue";
            }
        }
        else{
            document.getElementsByTagName("p")[0].style.color = "transparent";
            for( i=0; i < firstName.length ; ++i) {
                document.getElementsByTagName("article")[i].style.backgroundColor = "transparent";
            }
        }
    }
}

