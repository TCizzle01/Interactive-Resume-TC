var btn = document.getElementsByClassName("collapse");
   const educationContainer= document.getElementById("education");
    const workContainer= document.getElementById("experience");
    const skillsContainer= document.getElementById("skills");

        btn[0].addEventListener("click", function toggle() {
            this.classList.toggle("active");
            educationContainer.style.display="grid";
            workContainer.style.display="none";
            skillsContainer.style.display="none";

        });
        btn[1].addEventListener("click", function () {
            this.classList.toggle("active");
           workContainer.style.display="grid";
           skillsContainer.style.display="none";
           educationContainer.style.display="none";
        });
        btn[2].addEventListener("click", function () {
            this.classList.toggle("active");
            skillsContainer.style.display="grid";
            workContainer.style.display="none";
            educationContainer.style.display="none"});

            educationContainer.style.display="none";
            workContainer.style.display="none";
            skillsContainer.style.display="none";