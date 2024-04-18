$('ul#myList > li').css('color', 'blue');

// Select all paragraphs that come after a heading
$('h2 + p').addClass('highlight');

// Select all elements with a data-type attribute equal to "image"
$('[data-type="image"]').addClass('image-container');

// Select even-numbered list items
$('li').filter(':even').addClass('even');

// Hide all paragraphs, then show them with a slide animation
$('p').hide().slideDown('slow');

// Change the src attribute of an image
$('img').attr('src', 'newimage.jpg');

// Clone a list item and append it to the end of the list
$('ul#myList li:first').clone().appendTo('ul#myList');

// Replace the text of a paragraph
$('p').text('New paragraph text');

// Slide up a div when clicked
$('div').click(function(){
    $(this).animate({
        height: 'toggle'
      });
});