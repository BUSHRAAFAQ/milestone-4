var form = document.getElementById("resum-form");
var resumeDisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (evet) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var call = document.getElementById("call").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var linkedIn = document.getElementById("linkedIn").value;
    var resumeHTML = "\n    <h2><strong>Resume</strong></h2>\n    <h3><strong>Personal Information</strong></h3>\n    <p><strong>Name:</strong>".concat(name, "</p>\n    <p><strong>call</strong>").concat(call, "</p>\n    <p><strong>Email</strong>").concat(email, "</p>\n    <p><strong>Linkedin</strong>").concat(linkedIn, "</p>\n    <h3>Education</h3><p>").concat(education, "</p>\n    <h3>Experience</h3>").concat(experience, "</p>\n    <h3>Skills</h3>").concat(skills, "</p>\n    ");
    if (resumeDisplayElemant) {
        resumeDisplayElement.innerTML = resumeHTML;
    }
    else {
        console.error("Resume Display element not found.");
    }
});
