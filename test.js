"use strict";

function dostuff() {
	let a = document.getElementById('target')  
	let d = document.getElementById('gettheduck')
	let b  = prompt(a.textContent)
	let e = prompt(d.textContent)
	a.innerHTML = "fadfasdfaf"
	let h2 = document.createElement('h2')
	h2.innerHTML = "this is the added h2"
	a.appendChild(h2)
	let c  = prompt("Guys")
	d.innerHTML = c 
}
