document.addEventListener('DOMContentLoaded', function() {
    
    $('.rate-stars').rateYo({
        rating: 4.6,
        starWidth: "15px",
        ratedFill: "#ffc000",
        normalFill: '#c7c8c8',
        readOnly: true
    });

    $('.slick__single-item').slick({
        appendArrows: $('.slider-buttons'),
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });

    let mixer = mixitup('.newest-products__inner');
})