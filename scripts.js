function showDetails(itemNumber) {
    const details = document.getElementById(`details-${itemNumber}`);
    const isVisible = details.style.display === 'block';
    
    // Hide all other details
    const allDetails = document.querySelectorAll('.timeline-details');
    allDetails.forEach(detail => detail.style.display = 'none');
    
    // Toggle the selected detail
    details.style.display = isVisible ? 'none' : 'block';
}


// Custom shorthand for selecting elements
$.js = function (el) {
    return $('[data-js=' + el + ']');
};

// Initialize the carousel with custom settings
function carousel() {
    $.js('timeline-carousel').slick({
        infinite: false,
        arrows: true, // Enable custom arrows
        dots: true, // Enable dots for navigation
        autoplay: false,
        speed: 700,
        slidesToShow: 3, // Show 3 items at a time
        slidesToScroll: 3, // Scroll 3 items at a time
        prevArrow: '<button type="button" class="slick-prev">&#9664;</button>', // Custom Previous Arrow
        nextArrow: '<button type="button" class="slick-next">&#9654;</button>', // Custom Next Arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

// Initialize the carousel when the document is ready
carousel();


