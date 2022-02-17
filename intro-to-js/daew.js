console.log('welcome daew')

function askMyName() {
    const name = prompt("What is your name?")
    if (name != null) {
        document.getElementById("demo").innerHTML = "my name is " + name;
    }
}

function helloWorld() {
    const h1message = document.getElementById("demo").innerHTML
    alert(h1message + " We are family")
}