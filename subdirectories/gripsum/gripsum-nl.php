<?php
    $stylesheet = './css/main-style-desktop.css';
    $schemeVal = "Donker Schema";

    function ChangeToDark()
    {
        $style = '';
        $style = './css/dark-style-desktop.css';
        return $style;
    }

    function ChangeToLight()
    {
        $style = '';
        $style = './css/main-style-desktop.css';
        return $style;
    }

    if (isset($_GET['scheme']) && $_GET['scheme'] == "Donker Schema")
    {
        $stylesheet = ChangeToDark();
        $schemeVal = "Licht Schema";
    }
    elseif (isset($_GET['scheme']) && $_GET['scheme'] == "Licht Schema")
    {
        $stylesheet = ChangeToLight();
        $schemeVal = "Donker Schema";
    }
?>
<!DOCTYPE html>
<html lang="nl-NL">
    <head>
        <meta charset="UTF-8">
        <title>Gripsum Generator</title>
        <meta name="description" content="Professionele Grill Ipsum generator">
        <meta name="robots" content="index, nofollow">
        <meta name="author" content="JM Janszen, janszen@galactis-group.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?=$stylesheet;?>" defer>
        <link rel="stylesheet" media="(max-width:900px)" href="css/main-style-mobile.css">
        <script defer src="js/string_gen.js"></script>
        <script src="https://kit.fontawesome.com/336eb83918.js" crossorigin="anonymous"></script>
        <link rel="canonical" href="gripsum-nl.php">
    </head>
    <body>
        <div id="container">
            <header>
                <h1 id="title">Grill Ipsum</h1>
                <form action="<?=$_SERVER['PHP_SELF'];?>" method="get">
                    <input type="submit" name="scheme" id="color-mode" value="<?=$schemeVal;?>"></input>
                </form>
                <a href="index.php" target="_self">English Version</a>
            </header>
            <main>
                <p>Genereer de waardeloze text over contactgrills van je dromen!</p>
                <p class="subtext">Wat, word je daar niet gewoon enthousiast van?</p>
                <div id="generated">
                    <p id="test">De Tristar GR-2650 Contactgrill is perfect voor het bereiden van tosti’s, panini’s, vlees, vis en groenten.</p>
                </div>
                <div id="buttons">
                    <input type="number" id="numberinput" value="1" min="1" max="50">
                    <button id="generate">GENERATE!</button>
                </div>
                <a href="#about"><i class="fa-solid fa-arrow-down"></i></a>
                <section id="about">
                    <h2>Over Grill Ipsum</h2>
                    <p>Grill Ipsum is een onofficiële opdracht in mijn SEO cursus met dank aan <a href="https://tombartels.nl" target="_blank">Tom Bartels</a> obsessie met de Tristar GR-2650 Contactgrill. Ik heb (ten tijde van het maken van deze pagina) de JavaScript cursus van dit systeem nog niet bereikt, dus ik heb mezelf de super surface-level ervan aan moeten leren voor dit onnozele grapje.</p>
                    <p>Dit zijn dus de soort dingen waar ik me af en toe voor eigenlijk geen reden mee bezig houd, en meestal stop ik er dan net meer moeite in dan dat het waard is. Case in point: dit. Dit is ondanks dat mijn leven momenteel voor ongeveer de helft bestaat uit niet-werkende CSS debuggen. </p>
                </section>
                <section id="other">
                    <header>
                        <h3>Updates</h3>
                    </header>
                    <main>
                        <section>
                            <header><h3>10 Nov 2024 - V1.0:</h3></header>
                            <ul>
                                <li>Grill Ipsum ontstaan - Initial release</li>
                            </ul>
                        </section>
                        <section>
                            <header><h3>23 Jan 2025 - V1.1:</h3></header>
                            <ul>
                                <li>Gripsum NL tekstgeneratie compleet herschreven</li>
                                <li>Desktop pagina-layout update</li>
                                <li>"Updates" sectie toegevoegd</li>
                                <li>Donker schema toegevoegd voor NL pagina</li>
                            </ul>
                        </section>
                        <section>
                            <header><h3>14 Mar 2025 - V1.2:</h3></header>
                            <ul>
                                <li>V1.1 pariteit tussen EN en NL pagina's</li>
                                <li>Hoveranimaties op desktop versoepeld</li>
                                <li>Selection arrays omgezet in JSON</li>
                                <li>Kleurenschemafunctionaliteit herschreven in PHP</li>
                                <li>Probleem gefixed waarin donker schema niet zou werken na 4 switches</li>
                                <li>Probleem gefixed waarin mobile layout niet werkte</li>
                            </ul>
                        </section>
                    </main>
                </section>
                <footer>
                <img src="images/GLTCS_23.png" width="130" height="130" alt="galactis group logo" lazy>
                <p>Grill Ipsum is een <a href="https://galactis-group.com" target="_blank">Galactis Group</a> geassocieerd project. Geen copyright geldig.</p>
                <p>janszen@galactis-group.com</p>
                </footer>
            </main>
        </div>
    </body>
</html>