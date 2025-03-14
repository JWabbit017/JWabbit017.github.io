<?php
    $stylesheet = './css/main-style-desktop.css';
    $schemeVal = "Dark Theme";

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

    if (isset($_GET['scheme']) && $_GET['scheme'] == "Dark Theme")
    {
        $stylesheet = ChangeToDark();
        $schemeVal = "Light Theme";
    }
    elseif (isset($_GET['scheme']) && $_GET['scheme'] == "Light Theme")
    {
        $stylesheet = ChangeToLight();
        $schemeVal = "Dark Theme";
    }
?>
<!DOCTYPE html>
<html lang="en-GB">
    <head>
        <meta charset="UTF-8">
        <title>Gripsum Generator</title>
        <meta name="description" content="Professional Grill Ipsum generator">
        <meta name="robots" content="index, follow">
        <meta name="author" content="JM Janszen, janszen@galactis-group.com">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?=$stylesheet ?? './css/main-style-desktop.css';?>">
        <link rel="stylesheet" media="(max-width:900px)" href="css/main-style-mobile.css">
        <script defer src="js/string_gen_en.js"></script>
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
                <a href="gripsum-nl.php" target="_self">Nederlandse Versie</a>
            </header>
            <main>
                <p>Generate the meaningless text about grills of your dreams!</p>
                <p class="subtext">What, doesn't that get you just so excited?</p>
                <div id="generated">
                    <p id="test">The Tristar GR-2650 Contactgrill is perfect for the preparation of toasties, paninis, meat, fish and vegetables.</p>
                </div>
                <div id="buttons">
                    <input type="number" id="numberinput" value="1" min="1" max="50">
                    <button id="generate">GENERATE!</button>
                    <!--<button id="copy"><i class="fa-regular fa-clipboard"></i></button>-->
                </div>
                <a href="#about"><i class="fa-solid fa-arrow-down"></i></a>
                <section id="about">
                    <h2>About Grill Ipsum</h2>
                    <p>Grill Ipsum is an unofficial assignment in my SEO course courtesy of <a href="https://tombartels.nl" target="_blank">Tom Bartel's</a> obsession with the Tristar GR-2650 Contact Grill. I have not yet (at the time of creating this page) reached the JavaScript course of this system, so I had to teach myself the super surface-level of it for this silly joke.</p>
                    <p>So these are the kinds of things that I occasionally sink time into for really no reason at all, and usually put more effort into it than it's worth. Case in point: this. This is despite the fact that about half of my life currently consists of debugging non-functional CSS. </p>
                </section>
                <section id="other">
                    <header>
                        <h3>Updates</h3>
                    </header>
                    <main>
                        <section>
                            <header><h3>10 Nov 2024 - V1.0:</h3></header>
                            <ul>
                                <li>Grill Ipsum Initial release</li>
                            </ul>
                        </section>
                        <section>
                            <header><h3>23 Jan 2025 - V1.1:</h3></header>
                            <ul>
                                <li>Gripsum NL generation completely rewritten</li>
                                <li>NL Desktop layout revised</li>
                                <li>Added "Updates" section to NL page</li>
                                <li>Dark scheme added to NL page</li>
                            </ul>
                        </section>
                        <section>
                            <header><h3>14 Mar 2025 - V1.2:</h3></header>
                            <ul>
                                <li>V1.1 parity between EN and NL pages</li>
                                <li>Smoothed animations on desktop</li>
                                <li>Selection arrays converted to JSON</li>
                                <li>Rewrote dark mode functionality in PHP</li>
                                <li>Fixed dark mode switch ceasing after 4 switches</li>
                                <li>Fixed mobile layout not mobile-ing</li>
                            </ul>
                        </section>
                    </main>
                </section>
                <footer>
                    <img src="images/GLTCS_23.png" width="130" height="130" alt="galactis group logo" lazy>
                    <p>Grill Ipsum is a <a href="https://galactis-group.com" target="_blank">Galactis Group</a> affiliated project. No copyright pending.</p>
                    <p>janszen@galactis-group.com</p>
                </footer>
            </main>
        </div>
    </body>
</html>