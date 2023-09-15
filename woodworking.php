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
    <div class="wood-frame ">
        <div class="wood-bar draggable-resizable">
            <div class="handle"></div>
            LET US NOT
        </div>

    </div>
    <script>
        var $woodBar = $(`  <div class="wood-bar draggable-resizable">
                                <div class="handle"></div>
                                LET US NOT
                            </div>`);
        // TODO: ADD UNDO
        function makeResizableAndDraggable(element) {
            element.draggable({
                handle: ".handle",
                axis: "x"
            });

            element.resizable({
                handles: "se",
                containment: ".draggable-container"
            });
        }
        

        // Double Click to center
        // $(document).ready(function() {
        //     $(".wood-bar").on( "dblclick", function() {
        //         console.log($(this));
        //         alert("HI");
        //         $(this).css({})
        //     });
        // });
        // Another try
        $(document).ready(function() {
            var centerThis = $(".wood-bar");
            centerThis.on( "dblclick", function() {
                console.log($(this))
                centerThis.toggleClass( "dbl");
            });
        });
        // Make current div's resizable and draggable
        $(document).ready(function() {
            $(".wood-bar").draggable({
                handle: ".handle",
                axis: "x"
            });
            $(".wood-bar").resizable({
                handles: "se",
                // containment: ".wood-bar"
            });
        });
        // Add Blank Wood Row
        $(document).ready(function() {
            $("#add-wood-btn").click(function(){
                console.log("Adding wood-frame");
                $temp =$woodBar.clone()
                $(".wood-frame").append( $temp );
                makeResizableAndDraggable($temp);
            })
        });
        // Remove the last wood row
        $(document).ready(function() {
            $("#remove-wood-btn").click(function(){
                console.log("Removing wood-frame");
                let lastWoodRow = $(".wood-frame div.wood-bar:last")
                lastWoodRow.remove();
            })
        });
        // Remove all
        $(document).ready(function() {
            $("#remove-all-wood-btn").click(function(){
                if($(".wood-frame").children().length==0) {
                    console.warn("No wood-bars to be cleared!")
                    return false;
                }
                if(!confirm("Are you sure you want to remove rows?"))
                    return false;
                console.log("Removing ALL wood-frame");
                $(".wood-frame").empty();
            })
        });
        // Custom Text Wood Row
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
    </script>
</body>
</html>