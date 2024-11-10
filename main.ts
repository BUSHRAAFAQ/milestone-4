const form=document.getElementById("resume-form")as HTMLFormElement;
const resumeDisplay=document.getElementById("resume-display")as HTMLDivElement;

form.addEventListener("submit",(event:Event) =>{
    event.preventDefault();

    const name=(document.getElementById("name")as HTMLInputElement).value
    const email=(document.getElementById("email")as HTMLInputElement).value 
    const phone=(document.getElementById("phone")as HTMLInputElement).value
    const education=(document.getElementById("education")as HTMLInputElement).value
    const experience=(document.getElementById("experience")as HTMLInputElement).value
    const skills=(document.getElementById("skills")as HTMLInputElement).value
    const linkedIn=(document.getElementById("linkedIn")as HTMLInputElement).value

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
     <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable ="true">${phone}</span></p>
    
     <p>linkedIn:</b><span contentedable="true"${linkedIn}</span></p>


    <h3>Education</h3>
    <p contentedable="true">>${education}</p>
    <h3>experience</h3>
    <p contentedable="true">${experience}</p>
    <h3>Skills</h3>
    <p contentedable="true">${skills}</p>
    `;
    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeHTML
    }else{
        console.error("Resume Display element not found.");
    }



})