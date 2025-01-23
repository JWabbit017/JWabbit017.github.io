const selection = [
    "Tristar",
    "GR-2650",
    "contactgrill",
    "grillen",
    "heerlijk",
    "verrukelijk",
    "perfect voor het bereiden van",
    "tosti",
    "panini",
    "vlees en vis",
    "groenten",
    "anti-aanbaklaag",
    "gemakkelijk",
    "bereidt",
    "maaltijden",
    "lekkerste",
    "eenvoudig",
    "schoonmaken",
    "praktisch",
    "zwevende deksel",
    "gelijke verhitting",
    "hoge kwaliteit",
    "zonder olie",
    "antislipvoetjes",
    "verschillende producten",
    "perfect voor",
    "geïntegreerde handvat",
    "ergonomisch",
    "temperatuur",
    "indicatielampje",
    "geadvanceerd",
    "high-tech",
    "voedsel",
    "neem contact op",
    "garantie",
    "tevreden",
    "met",
    "zonder",
    "met behulp van",
    "altijd",
    "extra",
    "gezonde",
    "handige",
    "extra functies",
    "met",
    "op het aanrecht",
    "altijd perfecte",
    "maaltijden"
];

const main = document.getElementById("test");
const title = document.getElementById("title");
const genbutton = document.getElementById("generate");
const button = document.querySelector("#container > header > button");
let isDarkMode = false;


function ChooseArrayStr(maxValue, minValue) 
{
    return (Math.round(Math.random() * maxValue) + minValue);
}

function Pull()
{
    return selection[ChooseArrayStr(selection.length, 0)];
}

function ColorMode()
{   
    if (isDarkMode == false)
    {
        document.querySelector("main").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("footer").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("footer").style.color = "whitesmoke";
        document.querySelector("#container > header").style.color = "whitesmoke";
        document.querySelector("main").style.color = "whitesmoke";
        document.querySelector("main > #buttons input").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("main > #buttons button").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("main > #about, main > #other").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("main > #about, main > #other").style.boxShadow = "0px 6px 6px 5px rgb(90,90,90)";
        document.querySelector("main > #other main").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("main > #other").style.backgroundColor = "rgb(60,60,60)";
        document.querySelector("main > #other").style.boxShadow = "0px 6px 6px 5px rgb(90,90,90)";
        document.querySelector("main > #other section").style.backgroundColor = "rgb(70,70,70)";
        document.querySelector("main > #other section:last-of-type").style.backgroundColor = "rgb(70,70,70)";
        document.querySelector("#container > header button").style.color = "whitesmoke";
        document.querySelector("#container > header button").innerHTML = "Licht Schema";
        document.querySelector("#container > header button").style.border = "1px solid whitesmoke";
        document.querySelector("#container > header > a").style.color = "whitesmoke";
        isDarkMode = true;
        console.log("Dark Mode");
        return;
    }
    else
    {
        document.querySelector("main").style.backgroundColor = "whitesmoke";
        document.querySelector("footer").style.backgroundColor = "rgb(230,230,230)";
        document.querySelector("footer").style.color = "rgb(30,30,30)";
        document.querySelector("#container > header").style.color = "rgb(30,30,30)";
        document.querySelector("main").style.color = "rgb(30,30,30)";
        document.querySelector("main > #buttons input").style.backgroundColor = "whitesmoke";
        document.querySelector("main > #buttons button").style.backgroundColor = "whitesmoke";
        document.querySelector("main > #about, main > #other").style.backgroundColor = "rgb(230,230,230)";
        document.querySelector("main > #about, main > #other").style.boxShadow = "";
        document.querySelector("main > #other main").style.backgroundColor = "rgb(230,230,230)";
        document.querySelector("main > #other").style.backgroundColor = "rgb(230,230,230)";
        document.querySelector("main > #other").style.boxShadow = "";
        document.querySelector("main > #other section").style.backgroundColor = "lightgrey";
        document.querySelector("main > #other section:last-of-type").style.backgroundColor = "lightgrey";
        document.querySelector("#container > header button").style.color = "rgb(30,30,30)";
        document.querySelector("#container > header button").innerHTML = "Donker Schema";
        document.querySelector("#container > header button").style.border = "1px solid rgb(30,30,30)";
        document.querySelector("#container > header > a").style.color = "rgb(30,30,30)";
        isDarkMode == false;
        console.log("Light Mode");
        return;
    }
}

function Apply()
{
    const amountOfLines = document.getElementById("numberinput").value;
    let amountToGen = ChooseArrayStr(8, 3);
    let output = new String();

    for (let j = 0; j < amountOfLines; j++)
    {
        for (let i = 0; i < amountToGen; i++)
            {
                output += `${Pull()} `;
            }
            output += ". ";
    }
    let newOutput = output.replaceAll(/\s\.\s/img, ". ");
    main.innerHTML = newOutput;
    title.innerHTML = Pull();
}

genbutton.addEventListener("click", Apply, true);
button.addEventListener("click", ColorMode);