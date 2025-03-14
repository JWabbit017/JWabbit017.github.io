<?php
    function CreateID(): string
    {
        $aId = 'JMAC';
        for ($i = 0; $i < 5; $i++)
        {
            $aId .= rand(0,9);
        }
        $aId .= 'b1';
        return $aId;
    };
    $metaId = $_POST['a-id'] ?? CreateID();
    if (isset($_POST['submit']))
    {
        $errors = [];
        if (!empty($_POST['a-title'])){$metaTitle = htmlspecialchars($_POST['a-title']);}else{array_push($errors, 'Err meta-02 : Invalid Meta Title');};
        if (!empty($_POST['a-id'])){$metaId = htmlspecialchars($_POST['a-id']);}else{array_push($errors, 'Err meta-03 : Invalid JMAC ID');};
        if (!empty($_POST['a-desc'])){$metaDesc = htmlspecialchars($_POST['a-desc']);}else{array_push($errors, 'Err meta-04 : Invalid Meta Description');};
        if (!empty($_POST['a-desc'])){$conTitle = htmlspecialchars($_POST['c-title']);}else{array_push($errors, 'Err meta-05 : Invalid Article Title');};
        if (!empty($_POST['a-desc'])){$conSubtitle = htmlspecialchars($_POST['c-subtitle']);}else{array_push($errors, 'Err meta-06 : Invalid Article Subtitle');};
    }
?>
<html>
    <head>
        <title>Article Draft</title>
        <link rel="stylesheet" href="css/style.css">
        <script src="sources/article_format.js" defer></script>
        <meta name="robots" content="noindex, nofollow">
    </head>
    <body>
        <div id="container">
            <header>
                <h1>JM Article Creator</h1>
                <span class="subtext">Project Version: b1</span>
            </header>
            <main>
                <section>
                    <button>New Article</button>
                    <button>Save to server</button>
                    <button>Load via URL</button>
                    <button>Export to page</button>
                </section>
                <section id="pageMeta">
                <span class="small-header">Page Settings</span>    
                <form action="article.php" method="post">
                    <input type="text" name="a-title" value="<?=$metaTitle ?? ''?>" placeholder="Meta Title" required>
                    <input type="text" name="a-desc" value="<?=$metaDesc ?? ''?>" placeholder="Meta Desc" required>
                    <input type="text" name="a-id" value="<?=$metaId ?? 'Err'?>" required disabled>
                    <input type="text" name="c-title" value="<?=$conTitle ?? ''?>" placeholder="Article Title">
                    <input type="text" name="c-subtitle" value="<?=$conSubtitle ?? ''?>" placeholder="Article Subtitle">
                    <input type="submit" name="submit" value="Submit">
                </form>
                </section>
                <hr>
                <section id="content">
                    <nav>
                        <button id="paragraph">Paragraph</button>
                        <button id="image">Image</button>
                        <button id="quote">Quote</button>
                    </nav>
                    <main id="article">
                        <iframe src="article.php" width="400" height="400" style="float: end;">
                    </main>
                </section>
            </main>
        </div>
    </body>
</html>