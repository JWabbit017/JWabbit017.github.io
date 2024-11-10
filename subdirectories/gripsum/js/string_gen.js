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
    "op het aanrecht"
];

var max = selection.length;
var min = 0;
var main = document.getElementById("test");
var title = document.getElementById("title");
var genbutton = document.getElementById("generate");
var linetwo = document.getElementById("linetwo");
var line3 = document.getElementById("linethree");
var line4 = document.getElementById("linefour");
var line5 = document.getElementById("linefive");
const timesGenerated = 0;

function ChooseArrayStr() 
{
    interCalc = Math.random() * max;
    return (Math.round(interCalc));
}

function PullFromArray()
{
    return selection[ChooseArrayStr()];
}

function Apply()
{
    main.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
    title.innerHTML = PullFromArray();
    const amountOfLines = document.getElementById("numberinput").value;
    if (amountOfLines == 2) {
        linetwo.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
    } else linetwo.innerHTML = " ";
    if (amountOfLines == 3) {
        linetwo.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linethree.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
    } else linethree.innerHTML = " ";
    if (amountOfLines == 4) {
        linetwo.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linethree.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linefour.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
    } else linefour.innerHTML = " ";
    if (amountOfLines == 5) {
        linetwo.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linethree.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linefour.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
        linefive.innerHTML = PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray() + " " + PullFromArray();
    } else linefive.innerHTML = " ";
    //timesGenerated += 1;
}

genbutton.addEventListener("click", Apply, true);

//if (timesGenerated > 10) {
//    selection.push("A river dirt cheese");
//}