var btn = document.getElementsByClassName("collapse");
   
        btn[0].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "grid") {
                content.style.display = "none";
            } else {
                content.style.display = "grid";
            }
        });
        btn[1].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "grid") {
                content.style.display = "none";
            } else {
                content.style.display = "grid";
            }
        });
        btn[2].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "list") {
                content.style.display = "none";
            } else {
                content.style.display = "list";
            }
        });