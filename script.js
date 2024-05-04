function displayGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) {
        greeting = "Selamat pagi Kamu";
    } else if (hour < 18) {
        greeting = "Selamat siang Kamu";
    } else {
        greeting = "Selamat malam Kamu";
    }
    document.getElementById("greeting").textContent = greeting;
}

function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById("datetime").textContent = now.toLocaleDateString('id-ID', options);
}

displayGreeting();
displayDateTime();

setInterval(displayDateTime, 1000);

