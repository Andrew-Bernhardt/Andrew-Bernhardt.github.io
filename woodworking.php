<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head-template.php' ?>
    <title>Woodwork</title>
    <link rel="stylesheet" type="text/css" href="woodwork.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script type="text/javascript" src="woodworking.js"></script>
</head>
<body>
    <?php include 'header.php' ?>
    <div class="btn-container">
        <div class="wood-btn" id="generate-btn">GENERATE</div>
        <div class="wood-btn" id="add-wood-btn">ADD WOOD ROW</div>
        <div class="wood-btn" id="remove-wood-btn">REMOVE LAST WOOD ROW</div>
        <div class="wood-btn" id="remove-all-wood-btn">REMOVE ALL</div>
        <div class="wood-btn" id="add-text-btn">ADD TEXT</div>
        <input type="text" id="custom-text">
    </div>
    <div class="wood-frame ">
        <div class="wood-bar draggable-resizable">
            <div class="handle">BLANK</div>
        </div>

    </div>
</body>
</html>