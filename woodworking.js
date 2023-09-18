import { getBibleVerseRandom, getBibleVerseESV } from './bible-verse-api-handler.js';
var $woodBar = $(`  <div class="wood-bar draggable-resizable">
                                <div class="handle"></div>
                                
                            </div>`);


// Generate Random Verse
$(document).ready(async function () {
    $('#generate-btn').on('click', function () {
        console.log("Generating...");

        getBibleVerseESV("Gal 6:9").done(
            function (data) {
                let verse = data['passages'][0].trim()
                console.log(verse);
                writeTextToWood(verse);
            }).fail(function () {
                console.log("booooo");
            });

    })
});
async function writeTextToWood(words) {
    // Clear the canvas and write new
    emptyWood();
    var list = cutWords(words);
    list.forEach((sentence) => writeWoodLine(sentence));
}
async function writeWoodLine(inputString) {
    var $temp = $woodBar.clone();
    $temp.find('.handle').text(inputString.toUpperCase());
    $(".wood-frame").append($temp);
    makeResizableAndDraggable($temp);
}
// Cut up strings and make them 20 or less characters
// Parameter str comes in trimmed
function cutWords(str, maxChar = 20) {
    var list = [];
    let a = "";
    let i = str.length - 1;
    while (i > 0) {
        // If string has less than maxChar to be indexed
        if(str.length<maxChar-1) {
            list.push(str.slice(0,str.length));
            return list;
        }
        let j = Math.min(maxChar-1,str.length);
        //Start at maxChar length and bring down until we find a space
        while (str[j] != ' ') {
            j--;
        }
        list.push(str.slice(0,j));
        str = str.slice(j);
    }
    return list;
}

// Resizable and Draggable
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
// Double click - Another try
// $(document).ready(function () {
//     var centerThis = $(".wood-bar");
//     centerThis.on("dblclick", function () {
//         console.log($(this))
//         centerThis.toggleClass("dbl");
//     });
// });
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
function emptyWood() {
    $(".wood-frame").empty();
}
$(document).ready(function () {
    $("#remove-all-wood-btn").click(function () {
        if ($(".wood-frame").children().length == 0) {
            console.warn("No wood-bars to be cleared!")
            return false;
        }
        if (!confirm("Are you sure you want to remove rows?"))
            return false;
        console.log("Removing ALL wood-frame");
        emptyWood();
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
        writeWoodLine(inputString);

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