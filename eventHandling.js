// Click event
$('#myButton').click(function(){
    alert('Button clicked!');
});

// Hover event
$('#myElement').hover(function(){
    $(this).css('background-color', 'yellow');
}, function(){
    $(this).css('background-color', 'transparent');
});
Animation:

// Fade out an element
$('#myElement').fadeOut('slow');

// Slide down a hidden element
$('#myElement').slideDown('fast');

// Animate multiple CSS properties
$('#myElement').animate({
    opacity: 0.25,
    left: '+=50',
    height: 'toggle'
}, 1000, function() {
    // Animation complete callback
    console.log('Animation complete');
});

// Custom animation
$('#myElement').animate({
    width: '200px',
    height: '200px',
    opacity: 0.5
}, {
    duration: 2000,
    easing: 'swing',
    step: function(now, fx){
        // Step function called on each step of the animation
        console.log('Animating ' + fx.prop + ' to ' + now);
    },
    complete: function(){
        // Animation complete callback
        console.log('Animation complete');
    }
});

// Toggle a slide animation
$('#toggleButton').click(function(){
    $('#myElement').slideToggle('slow');
});

// Stop animation
$('#stopButton').click(function(){
    $('#myElement').stop();
});

// Delay animation
$('#myElement').fadeOut('slow').delay(1000).fadeIn('slow');