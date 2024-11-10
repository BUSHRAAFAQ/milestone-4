var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var linkedIn = document.getElementById("linkedIn").value;
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    \n     <p>linkedIn:</b><span contentedable=\"true\"").concat(linkedIn, "</span></p>\n\n\n    <h3>Education</h3>\n    <p contentedable=\"true\">>").concat(education, "</p>\n    <h3>experience</h3>\n    <p contentedable=\"true\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p contentedable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume Display element not found.");
    }
});
