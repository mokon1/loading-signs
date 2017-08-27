$(document).ready(function(){
    
    var box_title = $('div.box_title');
    
    $('h1').hide().delay(200).slideDown('slow');
    $('p').hide().delay(300).slideDown('slow');
    
    $('form').hide().fadeIn('slow');
    
    $('.option1').hide().delay(1500).slideDown('slow');
    $('.option2').hide().delay(1600).slideDown('slow');
    $('.option3').hide().delay(1700).slideDown('slow');
    $('.option4').hide().delay(1800).slideDown('slow');
    $('.option5').hide().delay(1900).slideDown('slow');
    $('.option6').hide().delay(2000).slideDown('slow');
    
        
    $('.option1').on('click',function(){
        $('.jumping_dots_container').css('display', 'flex');
        $('.jumping_dots_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', 'darkblue');
        moveForm();
    });
    $('.option2').on('click',function(){
        $('.pulsing_dots_container').css('display', 'flex');
        $('.pulsing_dots_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', 'Purple');
        moveForm();
    });
    $('.option3').on('click',function(){
        $('.loading_rectangles_container').css('display', 'flex');
        $('.loading_rectangles_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', 'darkgreen');
        moveForm();
    });
    $('.option4').on('click',function(){
        $('.circles_container').css('display', 'flex');
        $('.circles_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', 'DimGray');
        moveForm();
    });
    $('.option5').on('click',function(){
        $('.loading_figures_container').css('display', 'flex');
        $('.loading_figures_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', '#b3b300');
        moveForm();
    });
    $('.option6').on('click',function(){
        $('.loading_text_container').css('display', 'flex');
        $('.loading_text_container').siblings('div').not(box_title).css('display', 'none');
        $('body').css('backgroundColor', '#b30000');
        moveForm();
    });


    function moveForm(){
        var form =$('form');
        
        form.animate({
            'padding': '30vh',
            'padding-left':'0'
        },1500);
    }
});