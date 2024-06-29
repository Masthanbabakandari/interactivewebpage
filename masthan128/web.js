function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email address");
        return false;
    }

    return true;
}

function toggleMenu(id) {
    let items = document.querySelectorAll('.menu-item');
    items.forEach(item => item.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function loadContent() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "content.txt", true);
    xhr.send();
}
