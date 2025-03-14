const main = document.getElementById("test");
const title = document.getElementById("title");
const genbutton = document.getElementById("generate");
//const copyButton = document.getElementById("copy");
const button = document.querySelector("#container > header > button");
let selection = null;

async function GetSelection()
{
    let response = await fetch("././resources/selection-nl.json");
    let data = await response.json();
    console.log("If you're reading this, this page is miraculously working correctly");
    selection = data.array.selection;
}

GetSelection();

function ChooseArrayStr(maxValue, minValue) 
{
    return (Math.round(Math.random() * maxValue) + minValue);
}

function Pull()
{
    return selection[ChooseArrayStr(selection.length, 0)];
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
    output = output.replaceAll(/\s\.\s/img, ". ");
    main.innerHTML = output;
    title.innerHTML = Pull();
}

//copyButton.addEventListener("click", CopyGenerated(main));
genbutton.addEventListener("click", Apply, true);