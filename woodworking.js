function getBibleVerse(passage, line_length=20) {
    API_KEY = "8fc4cbbd1436cbc0318d80962472153a051c3174"
    API_URL = "https://api.esv.org/v3/passage/text/" + passage
    $.ajax({
        url: API_URL, // Replace with your API endpoint URL
        type: 'GET', // HTTP request method (GET in this case)
        headers: {
            'Authorization': '8fc4cbbd1436cbc0318d80962472153a051c3174', // Replace with your authorization token if needed
            // Add other headers as needed
        },
        dataType: 'json', // Expected data type (json in this case)
        success: function (data, status, xhr) {

            console.log('Success:', data);
            return data;
        },
        error: function (xhr, status, error) {
            // Handle errors here
            console.error('Error:', status, error);
        }
    });

    params = {
        'q': passage,
        'include-headings': false,
        'include-footnotes': false,
        'include-verse-numbers': false,
        'include-short-copyright': false,
        'include-passage-references': false,
        'line-length': line_length
    }
}

$(function () {
    $('#generate-btn').on('click', function () {
        console.log("clicking generate!");
        getBibleVerse("Gal 6:9");
    })
});


var $woodBar = $(`  <div class="wood-bar draggable-resizable">
                                <div class="handle"></div>
                                
                            </div>`);
// TODO: ADD UNDO
function makeResizableAndDraggable($element) {
    $element.draggable({
        handle: ".handle",
        axis: "x"
    });

    $element.resizable({
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
$(document).ready(function () {
    var centerThis = $(".wood-bar");
    centerThis.on("dblclick", function () {
        console.log($(this))
        centerThis.toggleClass("dbl");
    });
});
// Make current div's resizable and draggable
$(document).ready(function () {
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
$(document).ready(function () {
    $("#add-wood-btn").click(function () {
        console.log("Adding wood-frame");
        $temp = $woodBar.clone()
        $(".wood-frame").append($temp);
        makeResizableAndDraggable($temp);
        console.log($temp);
    })
});
// Remove the last wood row
$(document).ready(function () {
    $("#remove-wood-btn").click(function () {
        console.log("Removing wood-frame");
        let lastWoodRow = $(".wood-frame div.wood-bar:last")
        lastWoodRow.remove();
    })
});
// Remove all
$(document).ready(function () {
    $("#remove-all-wood-btn").click(function () {
        if ($(".wood-frame").children().length == 0) {
            console.warn("No wood-bars to be cleared!")
            return false;
        }
        if (!confirm("Are you sure you want to remove rows?"))
            return false;
        console.log("Removing ALL wood-frame");
        $(".wood-frame").empty();
    })
});
// Custom Text Wood Row
$(document).ready(function () {
    $("#add-text-btn").click(function () {
        var inputString = $("#custom-text").val().trim();
        if (inputString === "") {
            console.error("Cannot submit empty field")
            return false;
        }
        console.log("Adding custom wood-frame with text: " + inputString);
        $temp = $woodBar.clone();
        console.log($temp);
        $temp.find('.handle').text(inputString.toUpperCase());
        $(".wood-frame").append($temp);
        makeResizableAndDraggable($temp);

        //Reset text in inputfield
        $("#custom-text").val('');
    });
    const inputField = $("#custom-text");
    const submitButton = $("#add-text-btn");

    inputField.keyup(function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitButton.click();
        }
    });
});