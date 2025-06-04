<?php
    isset($_GET['file']) ? $stuff = include_once(json_decode($_GET['file'])) : null;

    if (is_array($stuff))
    {
        $content = $stuff;
    }
?>
<!DOCTYPE html>
<html lang="en-GB">
    <head>
        <title>JMAC Docs</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/desktop-main.css">
        <script src="./JMAC.js"></script>
        <script src="js/script.js" defer></script>
    </head>
    <body>
        <div id="container">
            <nav id="sidebar">
                <ul id="categories">
                    <li>Element Methods
                        <ul id="element">

                        </ul>
                    </li>
                    <li>Object Methods
                        <ul id="object">

                        </ul>
                    </li>
                    <li>Array Methods
                        <ul id="array">

                        </ul>
                    </li>
                </ul>
            </nav>
            <main>
                <header>
                    <h3><?=$content['name'];?></h3><span id="mono"><?=$content['prototype'];?>.prototype | <?=$content['propertyType'];?></span>
                </header>
                <section id="summary">

                </section>
            </main>
        </div>
    </body>
</html>