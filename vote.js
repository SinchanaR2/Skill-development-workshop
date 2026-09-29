function vote() {
            var name = document.getElementById("name").value;
            var age = document.getElementById("age").value;
            var nationality = document.getElementById("nationality").value;
            var result = document.getElementById("result");
            if (age >= 18 && nationality == "India") {
                result.innerHTML = "Hello " + name + ", you are eligible to vote.😄";
            } else {
                result.innerHTML = "Sorry, you are not eligible to vote.🙁";
            }
        }