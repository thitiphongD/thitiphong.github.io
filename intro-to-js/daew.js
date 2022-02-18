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

function calAge() {
    var inputAge = prompt("เกิดปีหนายยยยย")
    alert('ยินดีด้วย นายอยู่ในประเทศนี้มา ' + (2022 - inputAge) + ' ปีแล้ว')
}

function loadProfile() {
    var name = prompt("name?")
    var province = prompt("province?")
    document.getElementById("my-name").innerHTML = name
    document.getElementById("my-province").innerHTML = province
}