$(document).ready(function () {

    /* PESTAÑAS CAMBIAR INFO */
    
    const catg = document.querySelectorAll(".tab");
    const infCatg = document.querySelectorAll(".info_tab");

    let selectCatg = null;
    
    catg.forEach((pest) => {
       
        pest.addEventListener("click", (e) => {
            catg.forEach((el) => {
                el.classList.remove("active");
            });
            e.currentTarget.classList.toggle("active");
            
            selectCatg = pest.dataset.cat;
            
            infCatg.forEach((infel) => {
               if(infel.dataset.cat === selectCatg){
                   infel.classList.add("active_info");
               }else{
                   infel.classList.remove("active_info");
               } 
            });
        });
        
    });

    /**** desplegar menu principal en movil ****/

    $('.btn_menu_movil').click(function(){
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav').removeClass('active');
        }else{
            $(this).addClass('active');
            $('.nav').addClass('active');
        }
    });

    /*********
    Aplica smaller al header con sccroll
    **********/
    $(function () {
        $('a[href*=\\#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*----detectar elemento entrar viewport para animacion */

    if ($(window).width() >= 1200) {

        $.fn.isInViewport = function() {
           var elementTop = $(this).offset().top;
           var elementBottom = elementTop + $(this).outerHeight();
    
           var viewportTop = $(window).scrollTop();
           var viewportBottom = viewportTop + $(window).height();
    
           return elementBottom > viewportTop && elementTop < viewportBottom;
         };
    
    
        $(window).on('resize scroll', function() {
    
            $('.in_top, .in_down, .in_left, .in_right, .esp_anim').each(function() {
    
                if($(this).isInViewport()){
    
                    $(this).addClass('act_anim');
                }
    
            });
    
         });
    }else{
        $('.in_top, .in_down, .in_left, .in_right, .esp_anim').addClass('act_anim');
    }


    /* FUNCION ARROWS FOOTER */

    function navFooter(){
    
        let btn = document.querySelectorAll('.col_mid_men_pie .h_cl_pie');
        let container = document.querySelectorAll('.menu_pie');
        
        $(btn).click( function(){

            if( $(this).hasClass('active') ){
                $(this).next(container).slideUp();
                $(this).removeClass('active');
            }else{
                $(container).slideUp();
                $(btn).removeClass('active');
                $(this).addClass('active');
                $(this).next().slideToggle();
            }

        });

    }

    if ($(window).width() < 768) {
        navFooter();
    }
    
});
