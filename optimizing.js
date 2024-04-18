for (var i = 0; i < 1000; i++) {
    $('#myList').append('<li>Item ' + i + '</li>');
}

// Better - Cache DOM selection
var $myList = $('#myList');
for (var i = 0; i < 1000; i++) {
    $myList.append('<li>Item ' + i + '</li>');
}

// Bad practice - Attaching event handlers to individual elements
$('.myButton').click(function() {
    // Event handler logic
});

// Better - Event delegation
$('#container').on('click', '.myButton', function() {
    // Event handler logic
});

// Bad practice - Overly broad selector
$('div').addClass('highlight');

// Better - Specific selector
$('.highlightedDivs').addClass('highlight');