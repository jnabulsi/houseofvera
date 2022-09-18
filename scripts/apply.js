/*filename apply.js 
*/

//function to fill in the form with the fist job code
function j1func()
{
    alert("setting item1");
    localStorage.setItem("jid", "JRFA0409");
}

//function to fill in the form with the second job code
function j2func()
{
    alert("setting item2");
    localStorage.setItem("jid", "JRFA6621");
}


//function to fill in the form from local storage
function fillIn()
{
    
    //populate variables from local storage

    let items = localStorage.length;

    let code = localStorage.getItem("jid");
    
    alert(code);
    let fname = localStorage.getItem("fname");

    let lname = localStorage.getItem("lname");

    let birthday = localStorage.getItem("birthday");

    let g1 = localStorage.getItem("g1");

    let g2 = localStorage.getItem("g2");

    let streetAdress = localStorage.getItem("streetAdress");

    let suburb = localStorage.getItem("suburb");

    let states = localStorage.getItem("states");
    
    let postcode = localStorage.getItem("postcode");

    let email = localStorage.getItem("email");

    let phone = localStorage.getItem("phone");

    let s1 = localStorage.getItem("s1");
    
    let s2 = localStorage.getItem("s2");
    
    let s3 = localStorage.getItem("s3");
    
    let s4 = localStorage.getItem("s4");
    
    let s5 = localStorage.getItem("s5");

    let skillstext = localStorage.getItem("skillstext");

    
    if(items > 0)
    {
        //if there is a code then set job id to read only
        if(code == "JRFA6621" || code == "JRFA0409")
        {
            document.getElementById("jrn").readOnly = false;
            document.getElementById("jrn").value = code; 
            document.getElementById("jrn").readOnly = true;
        }
    
        document.getElementById("fname").value = fname;

        document.getElementById("lname").value = lname;

        document.getElementById("birthday").value = birthday;

        if(g1 != "false")
        {
            document.getElementById("g1").checked = g1;
        }if(g2 != "false")
        {
            document.getElementById("g2").checked = g2;
        }

        document.getElementById("streetAdress").value = streetAdress;

        document.getElementById("suburb").value = suburb;

        document.getElementById("states").value = states;

        document.getElementById("postcode").value = postcode;

        document.getElementById("email").value = email;

        document.getElementById("phone").value = phone;

        if(s1 != "false")
        {
            document.getElementById("s1").checked = s1;
        }
        
        if(s2 != "false")
        {
            document.getElementById("s2").checked = s2;
        }
        if(s3 != "false")
        {
            document.getElementById("s3").checked = s3;
        }
        if(s4 != "false")
        {
            document.getElementById("s4").checked = s4;
        }
        if(s5 != "false")
        {
            document.getElementById("s5").checked = s5;
        }

        document.getElementById("skillstext").value = skillstext;
    }
}

//function to save the personal details that have been entered
function saveValues()
{
    let code = document.getElementById("jrn").value;

    localStorage.setItem("jid", code);

    let fname = document.getElementById("fname").value;

    localStorage.setItem("fname", fname);

    let lname = document.getElementById("lname").value;

    localStorage.setItem("lname", lname);

    let birthday = document.getElementById('birthday').value;

    localStorage.setItem("birthday", birthday);

    let g1 = document.getElementById("g1").checked;

    localStorage.setItem("g1", g1);
    
    let g2 = document.getElementById("g2").checked;

    localStorage.setItem("g2", g2);

    let streetAdress = document.getElementById("streetAdress").value;

    localStorage.setItem("streetAdress", streetAdress);

    let suburb = document.getElementById("suburb").value;

    localStorage.setItem("suburb", suburb);

    let states = document.getElementById("states").value;

    localStorage.setItem("states", states);

    let postcode = document.getElementById("postcode").value;

    localStorage.setItem("postcode", postcode);

    let email = document.getElementById("email").value;

    localStorage.setItem("email", email);

    let phone = document.getElementById("phone").value;

    localStorage.setItem("phone", phone);

    let s1 = document.getElementById("s1").checked;

    localStorage.setItem("s1", s1);


    let s2 = document.getElementById("s2").checked;

    localStorage.setItem("s2", s2);

    let s3 = document.getElementById("s3").checked;

    localStorage.setItem("s3", s3);

    let s4 = document.getElementById("s4").checked;

    localStorage.setItem("s4", s4);

    let s5 = document.getElementById("s5").checked;

    localStorage.setItem("s5", s5);

    let skillstext = document.getElementById("skillstext").value;

    localStorage.setItem("skillstext", skillstext);

}

//function to validate the form entry to error check
function validate()
{

    //if check box is selected and skills txt box is empty 
    if(document.getElementById('s5').checked && (document.getElementById('skillstext').value == ""))
    {//give an error
        document.getElementById("error").style.visibility = "visible";
        var message = "Please type other skills or uncheck other skills";
        document.getElementById("error").innerHTML = message;
        return false;
    }


    //to check birthdays are in required range
    let birthday = document.getElementById('birthday');
    let dob =new Date(birthday.value);
    let year  = dob.getFullYear();
    if(year < 1942 || year > 2007)
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Age must be between 80 and 15 years old";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    //to ensure the postcode is correct for each state selection

    let postcode = document.getElementById("postcode").value;
    let state = document.getElementById("states");
    let text = state.options[state.selectedIndex].text;

    if(text == "VIC" && !((postcode > 2999 && postcode < 4000)||(postcode > 7999 && postcode < 9000)))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! VIC Postcode must start with 3 or 8";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "NSW" && (postcode < 999 || postcode > 1999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! NSW Postcode must start with 1";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "QLD" && !((postcode > 3999 && postcode < 5000)||(postcode > 8999 && postcode < 10000)))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! QLD Postcode must start with 4 or 9";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "NT" && (postcode < 0 || postcode > 999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! NT Postcode must start with 0";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "WA" && (postcode < 5999 || postcode > 6999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! WA Postcode must start with 6";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "SA" && (postcode < 4999 || postcode > 5999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! SA Postcode must start with 5";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "TAS" && (postcode < 6999 || postcode > 7999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! TAS Postcode must start with 7";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "ACT" && (postcode < 0 || postcode > 999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! ACT Postcode must start with 0";
        document.getElementById("error").innerHTML = message;
        return false;
    }
    localStorage.clear();
    saveValues();
}

//init function to call all other functions
function init()
{

    alert("up12.2");

    //function to fill in each of the form parts if they are in local storage
    fillIn();

    var element = document.getElementById("jobs");

    //If it isn't "undefined" and it isn't "null", then it exists.
    if(typeof(element) != 'undefined' && element != null){
        alert("we in here");
        j1.addEventListener("click", j1func);

        j2.addEventListener("click", j2func);
    }

    //call the validate function on submit of the form
    document.getElementById('form').onsubmit= function() {
        return validate();
    };
 
}

window.onload = init;

