$(document).ready(function(){
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
    
