function firstStep()
{
    document.getElementById('speech-bubble-1').style.display = "none";
    document.getElementById('console').style.display = "block";
    document.getElementById('console').style.boxShadow = "0 0 0 9999px #000000b0";
    document.getElementById('speech-bubble-2').style.display = "block";
}

function secondStep()
{
    document.getElementById('speech-bubble-2').style.display = "none";
    document.getElementById('console').style.boxShadow = "none";
    document.getElementById('login-container').style.boxShadow = "0 0 0 9999px #000000b0";
    document.getElementById('speech-bubble-3').style.display = "block";
}

function login()
{   
    if (document.getElementById('password').value === "password'")
    {
        console.log("cannot log in");
    }
    else
    {
        document.getElementById("invalid-credentials").style.display = "block";
        document.getElementById('login-container').style.boxShadow = "none";
        document.getElementById('speech-bubble-3').style.display = "none";
    }

}