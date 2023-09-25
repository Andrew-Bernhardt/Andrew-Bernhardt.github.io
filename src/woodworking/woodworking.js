import { randomVerse, getBibleVerseRandom, getBibleVerseESV, getRandomProverbESV } from './bible-verse-api-handler.js';
var $woodBar = $(`  <div class="wood-bar draggable-resizable">
                                <div class="handle"></div>
                                
                            </div>`);
var currentVerse = "";
var currentVerseTitle = "";
var currentCustomVerse = "";


// Generate ESV Verse
$(document).ready(async function () {
    $('#generate-btn').on('click', function () {
        console.log("Generate Button Clicked...");
        var customVerse = $("#custom-verse").val().trim();
        if (customVerse == currentCustomVerse) {
            console.warn("not a new verse! not wasting API calls");
            return; //already the same verse, no need to call API again
        }
        currentCustomVerse = customVerse;
        getBibleVerseESV(customVerse).done(
            function (data) {
                console.log("API Called");
                console.log(data);
                let title = data['canonical'];
                currentVerseTitle = title;
                // let title = data['passages'][0].split('\n')[0].trim();
                let verse = data['passages'][0].trim();
                currentVerse = verse;
                writeTextToWood(verse, title);
            }).fail(function () {
                alert("Invalid verse");
            }
            );
    })
    const inputVerse = $("#custom-verse");
    const submitVerse = $("#generate-btn");
    inputVerse.keyup(function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            submitVerse.click();
        }
    });
});
// Generate Random Verse
$(document).ready(async function () {
    $('#random-verse').on('click', function () {
        console.log("Generating random verse...");
        currentCustomVerse = "";
        randomVerse().done(
            function (data) {
                console.log(data);
                let verse = data[0]['text'].trim();
                let title = data[0]['bookname'] + " " + data[0]['chapter'] + ":" + data[0]['verse'];
                currentVerse = verse;
                currentVerseTitle = title;
                writeTextToWood(verse, title);
            }).fail(function () {
                console.log("booooo");
            });

    })
});
// Generate Random Proverb
$(document).ready(async function () {
    $('#random-proverb').on('click', function () {
        console.log("Random Proverb Generated...");
        // if (customVerse == currentCustomVerse) {
        //     console.warn("not a new verse! not wasting API calls");
        //     return; //already the same verse, no need to call API again
        // }
        getRandomProverbESV().done(
            function (data) {
                console.log("API Called");
                console.log(data);
                let title = data['canonical'];
                currentVerseTitle = title;
                // let title = data['passages'][0].split('\n')[0].trim();
                let verse = data['passages'][0].trim();
                currentVerse = verse;
                writeTextToWood(verse, title);
            }).fail(function () {
                alert("Invalid verse");
            }
            );
    })
})
async function writeTextToWood(verse, title = "404", maxChar = 20) {
    // Clear the canvas and write new
    emptyWood();
    writeWoodLine(title, true);
    var list = cutWords(verse, maxChar);
    list.forEach((sentence) => writeWoodLine(sentence));
}
async function writeWoodLine(inputString, title = false) {
    var $temp = $woodBar.clone();
    $temp.find('.handle').text(inputString.toUpperCase());
    $(".wood-frame").append($temp);
    makeResizableAndDraggable($temp);
    resizeRow($temp);
    if (title) $temp.addClass("verse-title");
}
// Cut up strings and make them 20 or less characters
// Parameter str comes in trimmed
function cutWords(str, maxChar = 20) {
    var list = [];
    let a = "";
    let i = str.length - 1;
    while (i > 0) {
        // If string has less than maxChar to be indexed
        if (str.length < maxChar - 1) {
            list.push(str.slice(0, str.length));
            return list;
        }
        let j = Math.min(maxChar - 1, str.length);
        //Start at maxChar length and bring down until we find a space
        while (str[j] != ' ' && j>=0) {
            j--;
        }
        console.log(maxChar);
        list.push(str.slice(0, j));
        str = str.slice(j).trim();
    }
    return list;
}
// Resize a given row
function resizeRow($element, extraWidth = 300) {
    extraWidth = Math.floor(Math.random() * extraWidth) + 200;
    var text = $element.find('.handle').text();

    var $tempSpan = $('<span>')
        .css({
            whiteSpace: 'nowrap',
            visibility: 'hidden',
            position: 'absolute',
        })
        .text(text);
    $('body').append($tempSpan);
    // console.log($tempSpan[0].getBoundingClientRect().width);
    var textWidth = $tempSpan[0].getBoundingClientRect().width + extraWidth;
    // Remove the temporary span element
    $tempSpan.remove();

    $element.css("width", textWidth + 'px');
}
// Randomly Realign Row
function realignVerse() {
    var rand = Math.floor(Math.random() * 30) + 8;
    writeTextToWood(currentVerse, currentVerseTitle, rand);
}
// Randomly Realign Button Properties
$(document).ready(function () {
    $("#random-realign-btn").click(function () {
        console.log("Realigning Verse...");
        realignVerse()
    })
});
// Lighten Button
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
        var $temp = $woodBar.clone()
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
$(function () {
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
// Random Row Resize
$(function () {
    $('#random-resize-btn').click(function () {
        console.log("Resize Clicked");
        $('.wood-frame').find('.wood-bar').each(function (index, element) {
            // Convert this element to a jquery $(element) in order to
            // use the method resizeRow which calls .find() which only 
            // works on JQuery elements. So convert it first!
            resizeRow($(element));
        })
    })
})
// Shorten all
$(function () {
    $('#shorten-all-btn').click(function () {
        console.log("Shorten Row");
        // let once = false;
        $('.wood-frame').find('.wood-bar').each(function (index, element) {
            // if(once) return;
            // Convert this element to a jquery $(element) in order to
            // use the method resizeRow which calls .find() which only 
            // works on JQuery elements. So convert it first!
            shortenRow($(element));
            // once = true;
        })
    })
})
function shortenRow($element) {
    console.log($element);
    var text = $element.find('.handle').text();
    console.log(text);

    // Get width of text
    var $tempSpan = $('<span>')
        .css({
            whiteSpace: 'nowrap',
            visibility: 'hidden',
            position: 'absolute',
        })
        .text(text);
    $('body').append($tempSpan);
    var textWidth = $tempSpan[0].getBoundingClientRect().width;
    var $handle = $element.find('handle');
    var handleWidth = $handle.width();
    console.log(textWidth);
    console.log($handle);

    // I wonder if we could make .handle width to "fit content" 
    // and then just take the width of that??? using::
    // .hanlde.getBoundingClientRect()

    // Remove the temporary span element
    $tempSpan.remove();

    var currWidth = $element.width();
    console.log("TEXT WIDTH SPAN: " + textWidth);
    console.log("HANDLE WIDTH: " + handleWidth);
    console.log("CURR WIDTH: " + currWidth);
    if (currWidth - 50 > textWidth) {
        $element.css("width", currWidth - 50 + 'px');
    }
    else if (currWidth > textWidth) {
        $element.css("width", textWidth + 'px');
    }
}
// Lengthen All
$(function () {
    $('#lengthen-all-btn').click(function () {
        console.log("Lengthen Row");
        // let once = false;
        $('.wood-frame').find('.wood-bar').each(function (index, element) {
            // if(once) return;
            // Convert this element to a jquery $(element) in order to
            // use the method resizeRow which calls .find() which only 
            // works on JQuery elements. So convert it first!
            lengthenRow($(element));
            // once = true;
        })
    })
})
function lengthenRow($element) {
    var text = $element.find('.handle').text();

    // Get width of text
    var $tempSpan = $('<span>')
        .css({
            whiteSpace: 'nowrap',
            visibility: 'hidden',
            position: 'absolute',
        })
        .text(text);
    $('body').append($tempSpan);
    var textWidth = $tempSpan[0].getBoundingClientRect().width;

    // I wonder if we could make .handle width to "fit content" 
    // and then just take the width of that??? using::
    // .hanlde.getBoundingClientRect()

    // Remove the temporary span element
    $tempSpan.remove();

    var currWidth = $element.width();
    console.log("TEXT WIDTH: " + textWidth);
    console.log("CURR WIDTH: " + currWidth);
    let maxWidth = 1000;
    if (currWidth < 1000) {
        let newWidth = Math.min(currWidth + 50, maxWidth)
        $element.css("width", newWidth + 'px');
    }
}
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