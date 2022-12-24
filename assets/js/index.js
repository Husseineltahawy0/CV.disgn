$(document).ready(function(){
    $('.loading').fadeOut(2000,function(){
        $('.isLoading').slideUp(2000,function(){
            $('.isLoading').remove()
            $('body').css('overflow','auto')
        })
    })
})

// console.log($('#me img').offset());
var imgOffset =$('#me img').offset().top;


$(window).scroll(function(){
    // console.log($(window).scrollTop());
    var widowScroll =$(window).scrollTop()

    if(widowScroll>imgOffset){
        $('#x').css('backgroundColor' , '#2B3A55')
    }
    else if(widowScroll ==0){
        
        $('#x').css('backgroundColor' , 'transparent')
    }
})







// window.addEventListener('scroll',function(){
//     console.log(window.scrollY);
    
// })