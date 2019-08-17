import users from "../../db/dbUsers";
import apiCall from "./apiCalls" ;
/*
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}*/

var body = document.getElementById("body");

function loadBody( body ){
    var url = "https://claimsapplication.herokuapp.com/api/v1/user"
    var data = apiCall.accessData(url,"") ;
    body.innerHTML = data ;
}

loadBody(body);