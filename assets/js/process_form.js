function load(event) {

    event.preventDefault();
    // create gold star icon
    var goldstarSymbol = document.createElement("img");
    goldstarSymbol.setAttribute("width", "10px")
    goldstarSymbol.src = "img/goldstar.png"

    // Invalid hints
    var invalidHints = ["Invalid", "Invalid", "Invalid, use format XXX XXX-XXXX", "Invalid. Check your email includes an @ and ends with .com or .edu.", "Invalid. Your website URL must include: https:// , a tilde (~), and a slash (/)"];

    // Badge Arrays
    var mybadge = new Array();
    mybadge[0] = new Image();
    mybadge[0].src = "img/awerewolf.png";
    mybadge[0].setAttribute("class", "badge");
    mybadge[1] = new Image();
    mybadge[1].src = "img/notawerewolf.jpg";
    mybadge[1].setAttribute("class", "badge");
    mybadge[2] = new Image();
    mybadge[2].src = "img/hunter.png";
    mybadge[2].setAttribute("class", "badge");

    // Validation Variables 
    var validate1 = false;
    var validate2 = false;
    var validate3 = false;
    var validate4 = false;
    var validate5 = false;
    var validate6 = false;
    var validate7 = false;

    // Regular Expression Variables 
    var first_nameRE = /^[A-Z]+[a-z]+$/;
    var last_nameRE = /^[A-Z']+[a-z' ]+$/;
    var phoneRE = /^\d{3}\ \d{3}\-\d{4}$/;
    var emailRE = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9+_.-]+\.(com|edu)$/;
    var websiteRE = /^(https\:\/\/)[A-Za-z0-9~\/.-_]+$/;

    document.htmlForm.addEventListener("submit", validateData, false);

    // VALIDATE DATA
    function validateData(event) {

        event.preventDefault();

        // Defining personal survey values 
        var firstNameInput = document.htmlForm.first_name.value;
        var lastNameInput = document.htmlForm.last_name.value;
        var phoneInput = document.htmlForm.phone_number.value;
        var emailInput = document.htmlForm.email.value;
        var websiteInput = document.htmlForm.website.value;

        // Text that appears with matching badge REMEMBER 0,1,2
        var badgeText = ["You might want to watch yourself if you are craving hearts or growing fangs. After you eat your first heart there is no going back. ", "Definitely watch out, there are a lot of monsters out there. ", "I would do some more research, but you're not a werewolf at least!"];


        var badgeResults = document.createElement("h2");
        badgeResults.textContent = "Results:";
        var para1 = document.createElement("p");
        para1.setAttribute("class", "bold")
        para1.textContent = "First Name: " + firstNameInput;
        var para2 = document.createElement("p");
        para2.textContent = "Last Name: " + lastNameInput;
        para2.setAttribute("class", "bold")
        var para3 = document.createElement("p");
        para3.textContent = "Phone: " + phoneInput;
        para3.setAttribute("class", "bold")
        var para4 = document.createElement("p");
        para4.textContent = "Email: " + emailInput;
        para4.setAttribute("class", "bold")
        var para5 = document.createElement("p");
        para5.textContent = "Website: " + websiteInput;
        para5.setAttribute("class", "bold")


        var para6 = document.createElement("h3");
        para6.textContent = "This is your survey result:";

        var bgError = document.createElement("p");
        bgError.textContent = "Opps! Something has been filled out wrong. Scroll back up to fix the mistake.";
        bgError.setAttribute("class", "alert")

        var bgText = document.createElement("p");
        bgText.setAttribute("class", "result")
        bgText.textContent = badgeText[0];
        bgText.setAttribute("class", "badgeText");

        // You are a werewolf!
        var bgWerewolf = document.createElement("h2");
        bgWerewolf.textContent = "You are a Werewolf!";
        bgWerewolf.setAttribute("class", "Werewolf");

        // You are not a werewolf!
        var bgNotWerewolf = document.createElement("h2");
        bgNotWerewolf.textContent = "You are not a Werewolf!";
        bgNotWerewolf.setAttribute("class", "notaWerewolf");

        // You are not a werewolf, but youre something!
        var bgunknown = document.createElement("h2");
        bgunknown.textContent = "You are not a Werewolf, but you're not Human!";
        bgunknown.setAttribute("class", "unknown");


        document.getElementById("first_name").setAttribute("class", "personalSurvey");
        document.getElementById("last_name").setAttribute("class", "personalSurvey");
        document.getElementById("phone_number").setAttribute("class", "personalSurvey");
        document.getElementById("email").setAttribute("class", "personalSurvey");
        document.getElementById("website").setAttribute("class", "personalSurvey");


        /* first name field validation */
        if (firstNameInput.match(first_nameRE)) {
            document.getElementById("firstDisplay").style.display = "none";
            document.getElementById("goldstar1").style.display = "block";
            document.getElementById("first_name").setAttribute("class", "personalSurveyLoad");
            validate1 = true;
        } else if (firstNameInput == "") {
            document.getElementById("first_name").setAttribute("class", "personalSurvey");
            document.getElementById("goldstar1").style.display = "none";
            document.getElementById("firstDisplay").style.display = "none";
        } else {
            document.getElementById("firstDisplay").textContent = invalidHints[0];
            document.getElementById("firstDisplay").style.display = "block";
            document.getElementById("goldstar1").style.display = "none";
            document.getElementById("first_name").setAttribute("class", "personalSurveyFail");
            validate1 = false;
        };

        /* last name field validation*/
        if (lastNameInput.match(last_nameRE)) {
            console.log(lastNameInput.match(last_nameRE));
            document.getElementById("lastDisplay").style.display = "none";
            document.getElementById("goldstar2").style.display = "block";
            document.getElementById("last_name").setAttribute("class", "personalSurveyLoad");
            validate2 = true;
        } else if (lastNameInput == "") {
            document.getElementById("last_name").setAttribute("class", "personalSurvey");
            document.getElementById("goldstar2").style.display = "none";
            document.getElementById("lastDisplay").style.display = "none";
        } else {
            document.getElementById("lastDisplay").textContent = invalidHints[1];
            document.getElementById("lastDisplay").style.display = "block";
            document.getElementById("goldstar2").style.display = "none";
            document.getElementById("last_name").setAttribute("class", "personalSurveyFail");
            validate2 = false;
        };

        /* phone number field validation */
        if (phoneInput.match(phoneRE)) {
            console.log(phoneInput.match(phoneRE));
            document.getElementById("phoneDisplay").style.display = "none";
            document.getElementById("goldstar3").style.display = "block";
            document.getElementById("phone_number").setAttribute("class", "personalSurveyLoad");
            validate3 = true;
        } else if (phoneInput == "") {
            document.getElementById("phone_number").setAttribute("class", "personalSurvey");
            document.getElementById("goldstar3").style.display = "none";
            document.getElementById("phoneDisplay").style.display = "none";
        } else {
            document.getElementById("phoneDisplay").textContent = invalidHints[2];
            document.getElementById("phoneDisplay").style.display = "block";
            document.getElementById("goldstar3").style.display = "none";
            document.getElementById("phone_number").setAttribute("class", "personalSurveyFail");
            validate3 = false;
        };

        /* email field validation */
        if (emailInput.match(emailRE)) {
            console.log(emailInput.match(emailRE));
            document.getElementById("emailDisplay").style.display = "none";
            document.getElementById("goldstar4").style.display = "block";
            document.getElementById("email").setAttribute("class", "personalSurveyLoad");
            validate4 = true;
        } else if (emailInput == "") {
            document.getElementById("email").setAttribute("class", "personalSurvey");
            document.getElementById("emailDisplay").style.display = "none";
            document.getElementById("goldstar4").style.display = "none";
        } else {
            document.getElementById("emailDisplay").textContent = invalidHints[3];
            document.getElementById("emailDisplay").style.display = "block";
            document.getElementById("goldstar4").style.display = "none";
            document.getElementById("email").setAttribute("class", "personalSurveyFail");
            validate4 = false;
        };

        /* website field validation */
        if (websiteInput.match(websiteRE)) {
            console.log(websiteInput.match(websiteRE));
            document.getElementById("websiteDisplay").style.display = "none";
            document.getElementById("goldstar5").style.display = "block";
            document.getElementById("website").setAttribute("class", "personalSurveyLoad");
            validate5 = true;
        } else if (websiteInput == "") {

            document.getElementById("website").setAttribute("class", "personalSurvey");
            document.getElementById("websiteDisplay").style.display = "none";
            document.getElementById("goldstar5").style.display = "none";
        } else {
            document.getElementById("websiteDisplay").textContent = invalidHints[4];
            document.getElementById("websiteDisplay").style.display = "block";
            document.getElementById("goldstar5").style.display = "none";
            document.getElementById("website").setAttribute("class", "personalSurveyFail");
            validate5 = false;
        };

        if ((validate1 && validate2 && validate3 && validate4 && validate5) == true) {

            if ((document.getElementById("werewolf1").checked || document.getElementById("werewolf2").checked || document.getElementById("werewolf3").checked && document.getElementById("unknown1").checked || document.getElementById("unknown2").checked || document.getElementById("unknown3").checked || document.getElementById("notaWerewolf1").checked || document.getElementById("notaWerewolf2").checked || document.getElementById("notaWerewolf3").checked)) {
                validate6 = true;
            }

            if (validate6 == true) {
                radioValidate();
                validate1 = false;
                validate2 = false;
                validate3 = false;
                validate4 = false;
                validate5 = false;
                validate6 = false;
            } else if (validate6 != true) {
                var imageGen = document.getElementById("createBadge");
                while (imageGen.hasChildNodes()) {
                    imageGen.removeChild(imageGen.lastChild);
                }
                document.getElementById("createBadge").appendChild(bgError);
            } else if (validate7 == true) {
                alert("Refresh the page")
            };
        } else {
            var imageGen = document.getElementById("createBadge");
            while (imageGen.hasChildNodes()) {
                imageGen.removeChild(imageGen.lastChild);
            }
            document.getElementById("createBadge").appendChild(bgError);
        }

        function radioValidate() {
            var x = 1;
            var y = 1;
            var z = 1;
            var werewolf = 0;
            var notaWerewolf = 0;
            var unknown = 0;

            if (document.getElementById("werewolf1").checked) {
                werewolf = werewolf + x;
            }

            if (document.getElementById("notaWerewolf1").checked) {
                notaWerewolf = notaWerewolf + y;
            }

            if (document.getElementById("unknown1").checked) {
                unknown = unknown + z;
            }

            if (document.getElementById("werewolf2").checked) {
                werewolf = werewolf + x;
            }

            if (document.getElementById("notaWerewolf2").checked) {
                notaWerewolf = notaWerewolf + y;
            }

            if (document.getElementById("unknown2").checked) {
                unknown = unknown + z;
            }
            if (document.getElementById("werewolf3").checked) {
                werewolf = werewolf + x;
            }
            if (document.getElementById("notaWerewolf3").checked) {
                notaWerewolf = notaWerewolf + y;
            }
            if (document.getElementById("unknown3").checked) {
                unknown = unknown + z;
            }

            if (werewolf >= 2) {

                var imageGen = document.getElementById("createBadge");
                while (imageGen.hasChildNodes()) {
                    imageGen.removeChild(imageGen.lastChild);
                }

                // WEREWOLF You might want to watch yourself if you are craving hearts or growing fangs
                document.getElementById("createBadge").appendChild(badgeResults);
                document.getElementById("createBadge").appendChild(para1);
                document.getElementById("createBadge").appendChild(para2);
                document.getElementById("createBadge").appendChild(para3);
                document.getElementById("createBadge").appendChild(para4);
                document.getElementById("createBadge").appendChild(para5);
                document.getElementById("createBadge").appendChild(bgWerewolf);
                document.getElementById("createBadge").appendChild(bgText);
                bgText.setAttribute("class", "Werewolf");
                document.getElementById("createBadge").appendChild(mybadge[0]);
                document.getElementById("createBadge").appendChild(bgCaptionLink1);
                document.getElementById("myAnchor").appendChild(bgCaption);
                bgCaption.textContent = myBgCaptions;

                validate1 = false;
                validate2 = false;
                validate3 = false;
                validate4 = false;
                validate5 = false;
                validate6 = false;
                validate7 = true;
            }

            else if (notaWerewolf >= 2) {

                var imageGen = document.getElementById("createBadge");
                while (imageGen.hasChildNodes()) {
                    imageGen.removeChild(imageGen.lastChild);
                }

                // NOT A WEREWOLF Definitely watch out, there are a lot of monsters out there.
                document.getElementById("createBadge").appendChild(badgeResults);
                document.getElementById("createBadge").appendChild(para1);
                document.getElementById("createBadge").appendChild(para2);
                document.getElementById("createBadge").appendChild(para3);
                document.getElementById("createBadge").appendChild(para4);
                document.getElementById("createBadge").appendChild(para5);
                document.getElementById("createBadge").appendChild(bgNotWerewolf);
                document.getElementById("createBadge").appendChild(bgText);
                bgText.textContent = badgeText[1];
                bgText.setAttribute("class", "notaWerewolf");
                document.getElementById("createBadge").appendChild(mybadge[1]);
                document.getElementById("createBadge").appendChild(bgCaptionLink2);
                document.getElementById("myAnchor").appendChild(bgCaption);
                bgCaption.textContent = myBgCaptions;

                validate1 = false;
                validate2 = false;
                validate3 = false;
                validate4 = false;
                validate5 = false;
                validate6 = false;
                validate7 = true;
            }
            else if (unknown >= 2) {

                var imageGen = document.getElementById("createBadge");
                while (imageGen.hasChildNodes()) {
                    imageGen.removeChild(imageGen.lastChild);
                }

                //UNKNOWN I would do some more research, but you're not a werewolf at least!
                document.getElementById("createBadge").appendChild(badgeResults);
                document.getElementById("createBadge").appendChild(para1);
                document.getElementById("createBadge").appendChild(para2);
                document.getElementById("createBadge").appendChild(para3);
                document.getElementById("createBadge").appendChild(para4);
                document.getElementById("createBadge").appendChild(para5);
                document.getElementById("createBadge").appendChild(bgunknown);
                document.getElementById("createBadge").appendChild(bgText);
                bgText.textContent = badgeText[2];
                bgText.setAttribute("class", "unknown");
                document.getElementById("createBadge").appendChild(mybadge[2]);
                document.getElementById("createBadge").appendChild(bgCaptionLink2);
                document.getElementById("myAnchor").appendChild(bgCaption);
                bgCaption.textContent = myBgCaptions;

                validate1 = false;
                validate2 = false;
                validate3 = false;
                validate4 = false;
                validate5 = false;
                validate6 = false;
                validate7 = true;
            }

        }

    };

};



window.addEventListener("load", load, false);