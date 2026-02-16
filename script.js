function generateResume() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var theme = document.getElementById("theme").value;

    document.getElementById("rname").innerHTML = name;
    document.getElementById("remail").innerHTML = email;
    document.getElementById("rphone").innerHTML = phone;
    document.getElementById("reducation").innerHTML = education;
    document.getElementById("rskills").innerHTML = skills;

    document.getElementById("resume").className = theme;
}

function printResume() {
    window.print();
}
