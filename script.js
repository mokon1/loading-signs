$(document).ready(function(){
    
    var body = $('body');
    var form =$('form');
    var inputs = $('input');
    var option1 = $('input#option1');
    var option2 = $('input#option2');
    var option3 = $('input#option3');
    var option4 = $('input#option4');
    var option5 = $('input#option5');
    var option6 = $('input#option6');
    var box_title = $('div.box_title');
    
    $('h1').hide().delay(200).slideDown('slow');
    $('p').hide().delay(300).slideDown('slow');
    form.hide().fadeIn('slow');
    inputs.hide();
    option1.delay(1500).slideDown('slow');
    option2.delay(1600).slideDown('slow');
    option3.delay(1700).slideDown('slow');
    option4.delay(1800).slideDown('slow');
    option5.delay(1900).slideDown('slow');
    option6.delay(2000).slideDown('slow');

    
    inputs.each(function(){
        $(this).one('click', function(){
            moveForm();
        })
    })
    
    option1.on('click',function(){
        $('div#jumping_dots_container').css('display', 'flex');
        $('div#jumping_dots_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', 'darkblue');
    });
    option2.on('click',function(){
        $('div#pulsing_dots_container').css('display', 'flex');
        $('div#pulsing_dots_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', 'Purple');
    });
    option3.on('click',function(){
        $('div#loading_rectangles_container').css('display', 'flex');
        $('div#loading_rectangles_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', 'darkgreen');
    });
    option4.on('click',function(){
        $('div#circles_container').css('display', 'flex');
        $('div#circles_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', 'DimGray');
    });
    option5.on('click',function(){
        $('div#loading_figures_container').css('display', 'flex');
        $('div#loading_figures_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', '#b3b300');
    });
    option6.on('click',function(){
        $('div#loading_text_container').css('display', 'flex');
        $('div#loading_text_container').siblings('div').not(box_title).css('display', 'none');
        body.css('backgroundColor', '#b30000');
    });


    function moveForm(){
        form.animate({
            'padding': '30vh',
            'padding-left':'0'
        },1500);
    }
});