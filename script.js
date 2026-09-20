// your code here
const form = document.getElementById("form")
const url = document.getElementById("url")

form.addEventListner("submit",function(event){
	event.preventDefault()
	const name = document.getElementById("name")
	const year = document.getElementById("year")
	url.textContent = `https://localhost:8080/?name=${name}&year=${year}`

	
});


