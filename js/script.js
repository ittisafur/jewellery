$(function(){

    $('#simple-menu').sidr();

    // Contact form animation
    var contactForm = $('.contact').find('form'),
        contactClose = $('.contact').find('form span');

    contactForm.hide();	

    // $.fn.FadeSlideToggle = function(speed){
    //     return $(this).animate({
    //         'height': 'toggle',
    //         opacity: 'toggle'
    //     }, speed || 800);
    // };

    // $('#contactbtn').on('click', function(){
    //     contactForm.FadeSlideToggle(900);
    // });

    $('#contactbtn').on('click', function(){

    	contactForm.slideDown(500, function(){
    		$('#contactbtn').fadeOut();
    	});

    	
    });

    contactClose.on('click',function(){
        contactForm.slideUp(500, function(){
            
               $('#contactbtn').fadeIn();
            
        });
    });

// $('.contact').find('form').hide();
//     var contactForm ={
//         contact: $('.contact').find('form'),
//         justcontact: $('.contact'),

//         init:function(){
//             $('#contactbtn').on('click',this.show);
//         },

//         show: function(){
//             contactForm.contact.show();
//         },

//         hide:function(){
//             $('span#spun').on('click', function(){
//                 contactForm.justcontact.hide();
//             });
//         }
//     }

//     contactForm.init();
  


    $('#top').on('click', function(){
         $('html, body').animate({ scrollTop: 0 }, 2000);
    });

    


    
});