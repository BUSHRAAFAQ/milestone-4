const form=document.getElementById("resum-form")as HTMLFormElement;
const resumeDisplay=document.getElementById("resume-display")as HTMLDivElement;

form.addEventListener("submit",(evet:Event) =>{
    event?.preventDefault();

    const name=(document.getElementById("name")as HTMLInputElement).value
    const email=(document.getElementById("email")as HTMLInputElement).value 
    const call=(document.getElementById("call")as HTMLInputElement).value
    const education=(document.getElementById("education")as HTMLInputElement).value
    const experience=(document.getElementById("experience")as HTMLInputElement).value
    const skills=(document.getElementById("skills")as HTMLInputElement).value
    const linkedIn=(document.getElementById("linkedIn")as HTMLInputElement).value

    const resumeHTML = `
    <h2><strong>Resume</strong></h2>
    <h3><strong>Personal Information</strong></h3>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>call</strong>${call}</p>
    <p><strong>Email</strong>${email}</p>
    <p><strong>Linkedin</strong>${linkedIn}</p>
    <h3>Education</h3><p>${education}</p>
    <h3>Experience</h3>${experience}</p>
    <h3>Skills</h3>${skills}</p>
    `;
    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeHTML
    }else{
        console.error("Resume Display element not found.");
    }



})