$(document).ready(function(){
    //buttons
     $(".hp").click(function () {
        $('.HP').fadeToggle();
    });
    $(".dill").click(function () {
        $('.DILL').fadeToggle();
    });
   
    $(".apple").click(function () {
        $('.APPLE').fadeToggle();
    });
     $(".lenovo").click(function () {
        $('.LENOVO').fadeToggle();
    });
    $(".acer").click(function () {
        $('.ACER').fadeToggle();
    });

    $(".asus").click(function () {
        $('.ASUS').fadeToggle();
    });
        $(".i-life").click(function () {
        $('.I-LIFE').fadeToggle();
    });
    $(".fujitsu").click(function () {
        $('.FUJITSU').fadeToggle();
    });
    

    
    $('.carousel').carousel({
        interval : 5000
    })
    //nice scroll
    $("html").niceScroll();
    
    //show color-option div
    
    $('.gear-check').click(function(){
        $(".color-option").fadeToggle()
    })
    
    //change Theme color on click
    var colorLi = $('.color-option ul li')
    
    colorLi    
        .eq(0).css("backgroundColor","#bd8f5e").end()
        .eq(1).css("backgroundColor","forestgreen").end()
        .eq(2).css("backgroundColor","darkblue").end()
        .eq(3).css("backgroundColor","yellow")
    
    colorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    })
    // Button scroll
    var scrollButton = $(".scroll-top");
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
            
    
            
                    }) 
    scrollButton.click(function(){
        $("html,body").animate({ scrollTop : 0 },600)
        
    }) 
    })