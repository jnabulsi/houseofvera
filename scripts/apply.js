/*filename apply.js 
*/

function hide()
{
    document.getElementById("error").style.visibility = "hidden";

}

function j1func()
{
    
    localStorage.removeItem("jid");
   
    localStorage.setItem("jid", "JRFA0409");
}

function j2func()
{
    
    localStorage.removeItem("jid");
   
    localStorage.setItem("jid", "JRFA6621");
}

function fillIn()
{
    
    let items = localStorage.length;

    let code = localStorage.getItem("jid");
    
    if(items > 0)
    {
        document.getElementById("jrn").value = code; 
    }
}


function callfunctions()
{


    if(birthdayValidate() == false)
    {
        return false;
    }
    if(postCodeValidate() == false)
    {
        return false;
    }
    if(checkBoxCheck() == false)
    {
        return false;
    }
}

function saveValues()
{

}

function checkBoxCheck()
{
    if(document.getElementById('skills').checked && (document.getElementById('skillstext').value == ""))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Please type other skills or uncheck other skills";
        document.getElementById("error").innerHTML = message;
        return false;
    }
}

function birthdayValidate()
{
    birthday = document.getElementById('birthday');
    var dob =new Date(birthday.value);
    var year  = dob.getFullYear();
    if(year < 1942 || year > 2007)
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Age must be between 80 and 15 years old";
        document.getElementById("error").innerHTML = message;
        return false;
    }
}

function postCodeValidate()
{
    postcode = document.getElementById("postcode").value;
    var state = document.getElementById("states");
    var text = state.options[state.selectedIndex].text;

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
}

function init()
{
    document.getElementById('form').onsubmit= function() {
        return callfunctions();
    };
    
    hide();
    fillIn();
    
    j1.addEventListener("click", j1func);

    j2.addEventListener("click", j2func);
    
    
    
}

window.onload = init;


/*

document.getElementById('form').addEventListener("submit", return callfunctions);


= function() {
        return callfunctions();
    };

*/