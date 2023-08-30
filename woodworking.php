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
        <div class="wood-btn" id="add-wood-btn">ADD WOOD ROW</div>
        <div class="wood-btn" id="remove-wood-btn">REMOVE LAST WOOD ROW</div>
        <div class="wood-btn" id="remove-all-wood-btn">REMOVE ALL</div>
        <div class="wood-btn" id="add-text-btn">ADD TEXT</div>
        <input type="text" id="custom-text">
    </div>
    <div class="wood-frame">
        <div class="wood-bar resizable-draggable">LET US NOT</div>

    </div>
    <script>
        var $woodBar = $(`<div class="wood-bar resizable-draggable"></div>`);
        // TODO: ADD UNDO

        //This doesn't really want to work
        //Make div resizable and draggable
        $(document).ready(function() {
            $( ".resizable-draggable" ).resizable();
            $( ".resizable-draggable" ).draggable({
                axis: "x",
                containment: "parent"
            });
        });
        //Add Blank Wood Row
        $(document).ready(function() {
            $("#add-wood-btn").click(function(){
                console.log("Adding wood-frame");
                $(".wood-frame").append( $woodBar.clone() );
            })
        });
        //Remove the last wood row
        $(document).ready(function() {
            $("#remove-wood-btn").click(function(){
                console.log("Removing wood-frame");
                let lastWoodRow = $(".wood-frame div.wood-bar:last")
                lastWoodRow.remove();
            })
        });
        //Remove all
        $(document).ready(function() {
            $("#remove-all-wood-btn").click(function(){
                if($(".wood-frame").children().length==0) {
                    console.warn("No wood-bars to be cleared!")
                    return;
                }
                confirm("Are you sure you want to remove rows?") 
                console.log("Removing ALL wood-frame");
                $(".wood-frame").empty();
            })
        });
        //Custom Text Wood Row
        $(document).ready(function () {
            $("#add-text-btn").click(function() {
                var inputString = $("#custom-text").val().trim();
                if(inputString === "") {
                    console.error("Cannot submit empty field")
                    return false;
                }
                console.log("Adding custom wood-frame with text: " + inputString);
                $(".wood-frame").append( $woodBar.clone() );
                let lastWoodRow = $(".wood-frame div.wood-bar:last");
                lastWoodRow.html(inputString.toUpperCase());
                //Reset text
                $("#custom-text").val('');
            });
            const inputField = $("#custom-text");
            const submitButton = $("#add-text-btn");

            inputField.keyup(function(event) {
                if (event.key === "Enter") {
                event.preventDefault();
                submitButton.click();
                }
            });
        });
        // //Make resizable divs
        // $(document).ready(function() {
        //     $(".resize").resizable();
        // });
        // //Make draggable divs
        // $(document).ready(function() {
        //     $(".draggable").draggable({
        //         axis: "x", // Restrict dragging to the horizontal axis
        //         containment: ".wood-frame"
        //     });
        // });
    </script>
</body>
</html>