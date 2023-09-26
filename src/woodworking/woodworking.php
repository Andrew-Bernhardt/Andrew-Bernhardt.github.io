<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '..\components\head-template.php' ?>
    <title>Woodwork</title>
    <link rel="stylesheet" type="text/css" href="./woodwork.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script type="module" src="woodworking.js"></script>
</head>
<body>
    <?php include '../components/header.php' ?>
    <div class="btn-container">
        <div class="wood-btn" id="generate-btn">GENERATE</div>
        <input type="text" id="custom-verse">
        <div class="wood-btn" id="random-verse">RANDOM VERSE</div>
        <div class="wood-btn" id="random-proverb">RANDOM PROVERB</div>
        <div class="wood-btn" id="remove-all-wood-btn">REMOVE ALL</div>
        
        
    </div>
    <div class="wood-frame-container">
        <div class="wood-frame">
            <div class="wood-bar draggable-resizable">
                <div class="handle">BIBLE VERSE WOODWORKING</div>
            </div>
        </div>
    </div>
    <div class="styling-absolute">
        <div class="wood-style-controls">
            <div class="style-btn" id="random-resize-btn">RESIZE</div>
            <div class="style-btn" id="random-realign-btn">REALIGN</div>
            <div class="style-btn" id="lighten-btn">LIGHTEN</div>
            <div class="style-btn" id="darken-btn">DARKEN</div>
            <div class="style-btn in-dev">LOCK ROW</div>
            <div class="style-btn" id="shorten-all-btn">SHORTEN ROWS</div>
            <div class="style-btn" id="lengthen-all-btn">LENGTHEN ROWS</div>
        </div>
        <div class="outdated-controls">
            <br><br><br><br>
            <div class="style-btn striped_black" id="outdated-btn">OUTDATED</div>
            <div class="style-btn" id="remove-wood-btn">RMV LAST WOOD ROW</div>
            <div class="style-btn" id="add-wood-btn">ADD WOOD ROW</div>
            <div class="style-btn" id="add-text-btn">ADD TEXT</div>
            <input class="style-btn" type="text" id="custom-text" > 
        </div>
    </div>
</body>
</html>