<?php
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
<!DOCTYPE html>
<html>
    <head>
        <title>Article</title>
    </head>
    <body>
        <div id="container">

        </div>
    </body>
</html>