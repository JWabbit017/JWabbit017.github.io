const selection = [
    "Tristar",
    "GR-2650",
    "contactgrill",
    "grilling",
    "tasty",
    "delicious",
    "perfect for the preparation of",
    "toasty",
    "panini",
    "meat and fish",
    "vegetables",
    "anti-char coating",
    "with ease",
    "prepares",
    "meals",
    "the most marvelous",
    "simple",
    "cleaning",
    "praktical",
    "floating lid",
    "evenly heated",
    "high quality",
    "without oil",
    "anti-slip feet",
    "variety of products",
    "perfect for",
    "integrated handle",
    "ergonomic",
    "temperature",
    "indicator light",
    "advanced",
    "high-tech",
    "food",
    "contact us",
    "warranty",
    "satisfied",
    "with",
    "without",
    "using",
    "always",
    "extra",
    "healthy",
    "handy",
    "extra functions",
    "on the countertop"
];

//const selectionLength = [
//
//];

var max = selection.length;
var min = 0;
var main = document.getElementById("test");
var title = document.getElementById("title");
var genbutton = document.getElementById("generate");
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
    timesGenerated += 1;
}

genbutton.addEventListener("click", Apply, true);

if (timesGenerated > 10) {
    selection.push("A river dirt cheese");
}