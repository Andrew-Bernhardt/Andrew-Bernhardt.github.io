export function getBibleVerseRandom() {
    // This does not have access to the ESV OR NIV
    let bibleAPI = 'https://api.scripture.api.bible/v1/bibles';
    $.ajax({
        url: bibleAPI,
        type: 'GET',
        headers: { 
            'api-key': 'd6c5332c7e0bbb4790da57060e710dc2',
            'content-type': 'text/plain'
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
        }

    });
}

export function getBibleVerseESV(passage="Gal 6:9") {
    let API_KEY = "8fc4cbbd1436cbc0318d80962472153a051c3174"
    let API_URL = "https://api.esv.org/v3/passage/text/"
    return $.ajax({
        url: API_URL, // Replace with your API endpoint URL
        type: 'GET', // HTTP request method (GET in this case)
        headers: {
            'Authorization': 'Token '+ API_KEY, // Replace with your authorization token if needed
        },
        data: {
            'q': passage,
            'include-headings': false,
            'include-footnotes': false,
            'include-verse-numbers': false,
            'include-short-copyright': false,
            'include-passage-references': false
        },
        success: function (data, status, xhr) {
            console.debug("Successful API Call");
        },
        error: function (xhr, status, error) {
            console.error('Error:', status, error);
        }
    });
}

export function randomVerse() {
    $("#spinner").show();
    return $.ajax({
      url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
      crossDomain: true,
      dataType: 'jsonp',
      success: function(result){
         $("#newQuote")
           .html('<strong>'+
                 result[0].bookname+
                 ' ' + result[0].chapter +
                 ':' + result[0].verse +
                 '</strong> ' +
                 result[0].text);
        $("#spinner").hide();
      }
    });
}
