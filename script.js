$(document).ready(function(){
    
        $('h1').hide().delay(200).slideDown('slow');
        $('p').hide().delay(300).slideDown('slow');
    
        $('form').hide().delay(500).fadeIn('slow');
    
        $('.option1').hide().delay(1500).slideDown('slow');
        $('.option2').hide().delay(1600).slideDown('slow');
        $('.option3').hide().delay(1700).slideDown('slow');
        $('.option4').hide().delay(1800).slideDown('slow');
        $('.option5').hide().delay(1900).slideDown('slow');
        $('.option6').hide().delay(2000).slideDown('slow');
    
        
    
         $('.option1').on('click',function(){
                $('.jumping_dots_container').css('display', 'flex');
                $('.jumping_dots_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'SlateBlue');
                $('form').css('color','white');
                $('p').css('color','white');
                $('h1').css('color','white');
                moveForm();
        });
    
        $('.option2').on('click',function(){
                $('.pulsing_dots_container').css('display', 'flex');
                $('.pulsing_dots_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'Purple');
                $('form').css('color','white');
                $('p').css('color','white');
                $('h1').css('color','white');
                moveForm();
        });
        $('.option3').on('click',function(){
                $('.loading_rectangles_container').css('display', 'flex');
                $('.loading_rectangles_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'MediumSeaGreen');
                $('form').css('color','white');
                $('p').css('color','white');
                $('h1').css('color','white');
                moveForm();
        });
         $('.option4').on('click',function(){
                $('.circles_container').css('display', 'flex');
                $('.circles_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'grey');
                $('form').css('color','white');
                $('p').css('color','white');
                $('h1').css('color','white');
                moveForm();
        });
        $('.option5').on('click',function(){
                $('.loading_figures_container').css('display', 'flex');
                $('.loading_figures_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'PaleGoldenRod');
                $('form').css('color','black');
                $('p').css('color','black');
                $('h1').css('color','black');
                moveForm();
        });
         $('.option6').on('click',function(){
                $('.loading_text_container').css('display', 'flex');
                $('.loading_text_container').siblings('div').css('display', 'none');
                $('body').css('backgroundColor', 'white');
                $('form').css('color','black');
                $('p').css('color','black');
                $('h1').css('color','black');
                moveForm();
        });


    
    function moveForm(){
        var form =$('form');
        form.animate({
            'padding-top': '30vh',
            'padding':'0',
            'transform':'rotate(360deg)'
        },2000);
    }
  

});
  