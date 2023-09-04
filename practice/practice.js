function delay(time) 
{
    return new Promise(resolve => setTimeout(resolve, time));
}

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

async function login()
{
    if (document.getElementById('password').value === "password")
    {
        document.getElementById('invalid-credentials').style.display = "block";
        document.getElementById('login-container').style.boxShadow = "none";
        document.getElementById('speech-bubble-3').style.display = "none";
        document.getElementById('console').style.boxShadow = "0 0 0 9999px #000000b0";
        document.getElementById('first-one').style.display = "block";
        await delay(1000);
        document.getElementById('second-one').style.display = "block";
        await delay(1000);
        document.getElementById('third-one').style.display = "block";
        await delay(1000);
        document.getElementById('fourth-one').style.display = "block";
        await delay(3000);
        document.getElementById('speech-bubble-4').style.display = "block";
        await delay(1000);
        document.getElementById('console').style.boxShadow = "none";
        document.getElementById('invalid-credentials').style.display = "none";
        document.getElementById('login-container').style.boxShadow = "0 0 0 9999px #000000b0";
    }else if(document.getElementById('password').value === "password'")
    {
        document.getElementById('speech-bubble-4').style.display = "none";
        document.getElementById('invalid-credentials-2').style.display = "block";
        document.getElementById('fifth-one').style.display = "block";
        await delay(1000);
        document.getElementById('sixth-one').style.display = "block";
        await delay(1000);
        document.getElementById('seventh-one').style.display = "block";
        await delay(1000);
        document.getElementById('eighth-one').style.display = "block";
        await delay(1000);
        document.getElementById('ninth-one').style.display = "block";
        await delay(1000);
        document.getElementById('tenth-one').style.display = "block";
        await delay(1000);
        document.getElementById('eleventh-one').style.display = "block";
        document.getElementById('speech-bubble-5').style.display = "block";
    }else if(document.getElementById('password').value === "' or 1=1--")
    {
        document.getElementById('speech-bubble-11').style.display = "none";
        document.getElementById('login-container').style.display = "none";
        document.getElementById('logged-screen').style.display = "block";
        document.getElementById('console').style.display = "none";
        document.getElementById('code').style.display = "none";
    }
 }

function thirdStep()
{
   document.getElementById('speech-bubble-5').style.display = "none";
   document.getElementById('speech-bubble-6').style.display = "block";
   document.getElementById('invalid-credentials-2').style.display = "none";
}

async function fourthStep()
{
    document.getElementById('speech-bubble-6').style.display = "none";
    document.getElementById('code').style.display = "block";
    await delay(1000);
    document.getElementById('speech-bubble-7').style.display= "block";
}

function fifthStep()
{
    document.getElementById('speech-bubble-7').style.display= "none";
    document.getElementById('speech-bubble-8').style.display = "block";
    document.getElementById('speech-bubble-8').style.boxShadow = "0 0 0 9999px #000000b0";
}

function sixthStep()
{
    document.getElementById('speech-bubble-8').style.display = "none";
    document.getElementById('speech-bubble-9').style.display = "block";
}

function seventhStep()
{
    document.getElementById('speech-bubble-9').style.display = "none";
    document.getElementById('speech-bubble-10').style.display = "block";
}

function eighthStep()
{
    document.getElementById('speech-bubble-10').style.display = "none";
    document.getElementById('speech-bubble-11').style.display = "block";
    var getValue= document.getElementById("password");
        if (getValue.value !="") {
            getValue.value = "";
        }
}
