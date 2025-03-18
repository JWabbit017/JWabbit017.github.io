const selected = document.querySelectorAll(".gripsum");
const long = document.querySelectorAll("long");
const short = document.querySelectorAll("short");
//const copyButton = document.getElementById("copy");
const button = document.querySelector("#container > header > button");
let selection =
[
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
    "on the countertop",
    "simply incredible",
    "the"
];

function ChooseArrayStr(maxValue, minValue) 
{
    return (Math.round(Math.random() * maxValue) + minValue);
}

function Pull()
{
    return selection[ChooseArrayStr(selection.length, 0)];
}

function Apply(amountOfLines)
{  
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
    output = output.replaceAll(/\s\.\s/img, ". ");
    return output;
}

//copyButton.addEventListener("click", CopyGenerated(main));
for (let selection of selected)
{
    if (selection.className === "gripsum short")
    {
        selection.innerHTML = Apply(1);
    }
    else if (selection.className === "gripsum long")
    {
        selection.innerHTML = Apply(3);
    }
    else
    {
        selection.innerHTML = Apply(2);
    }
}