
var isLoggedIn = false;
let header = `<header><div class="logo">Logo Here</div><div class="formcon">Search Here</div><div class="usercon"><p id="demo">Login.</p></div><p id="logout"></p></header>`;
let html = `${header}`;
//
if (IsLoggedIn() == true) {
	let header = `<header><div class="logo">Logo Here</div><div class="formcon">Search Here</div><div class="demo"></div><div class="usercon"></div><p id="logout">Logout.</p></header>`;
	let tags = ["template strings", "javascript", "es6"];
	html = `${header}<ul>`;
	for (const x of tags) {
		html += `<li>${x}</li>`;
	}
	html += `</ul><div id="uzer"></div>`;
}
//
document.getElementById("root").innerHTML = html;

document.getElementById("logout").addEventListener("click", Logout);

document.getElementById("demo").addEventListener("click", apiRequestSET);

function myFunction() {
	document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
	apiRequestGET()
}

function apiRequestSET() {
	const formData = new FormData();
	formData.append("username", "Groucho");
	formData.append("accountnum", 123456);
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "/login", true);
	xhr.onload = () => {
			//~ document.getElementById("demo").innerH	TML = xhr.responseText;
			SaveToSessionStorage("webtoken",xhr.responseText)
			SaveToLocalStorage("webtoken",xhr.responseText)
			location.reload();
	};
	xhr.send(formData);
	// xhr.send('string');
	// xhr.send(new Blob());
	// xhr.send(new Int8Array());
	// xhr.send(document);
}


function SaveToSessionStorage(key,value) {
	sessionStorage.setItem(key, value);
	let personName = sessionStorage.getItem(key);
	//~ document.getElementById("demo").innerHTML = personName;
	isLoggedIn = true;
}

function IsLoggedIn() {
	if (sessionStorage.getItem("webtoken") != null) {
		return true;
	}
	return false;
}

function SaveToLocalStorage(key,value) {
	localStorage.setItem(key, value);
	let personName = localStorage.getItem(key);
	//~ document.getElementById("demo").innerHTML = personName;
}


function Logout() {
	isLoggedIn = false;
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "/logout", true);
	xhr.onload = () => {
		sessionStorage.removeItem("webtoken");
		localStorage.removeItem("webtoken");
		//~ window.location = "/wet";
		location.reload();
	};
	xhr.send(null);
	//~ window.location.reload();
}

//~location.reload();

//~ var script = document.createElement('script');
//~ script.onload = function () {
    //~ createBody();
//~ };
//~ script.src = "/static/dynamic/upload.js";

//~ document.head.appendChild(script);