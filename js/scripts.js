(function($){
        //Article Menu

        var openArticle = function () {
            
            $(".article-menu div a").attr('class', 'inactive');
            
            
            $(this).attr('class', 'active');
            
            /*
            $(".climate").css("display", "none");
            $(".gbr").css("display", "none");
            $(".abc").css("display", "none");
            $(".refugees").css("display", "none");
            $(".csg").css("display", "none");
            $(".election").css("display", "none");
            $(".climate").css("display", "none");
            $(".democracy").css("display", "none");
            $(".power").css("display", "none");
            $(".marriage").css("display", "none");
            $(".meet").css("display", "none");
            $(".fairness").css("display", "none");
            $(".forests").css("display", "none");
            */
            
            $(".climate").hide();
            $(".gbr").hide();
            $(".abc").hide();
            $(".refugees").hide();
            $(".csg").hide();
            $(".election").hide();
            $(".climate").hide();
            $(".democracy").hide();
            $(".power").hide();
            $(".marriage").hide();
            $(".meet").hide();
            $(".fairness").hide();
            $(".forests").hide();
            
            var currentId = "." + $(this).parent().attr('id');
            $(console.log(currentId));
            
            $(currentId).show( "fast");
            //console.log()   
        }

        $('.article-menu a').click(openArticle);


        //Toggle classes
        var toggleMenu = function () {
            $("#menuClose").toggleClass("active");
            $("#menuLink").toggleClass("active");
            $("#menu").toggleClass("active");
            //$("#accordion a").toggleClass("active");
            $("#hamburger").toggleClass("active");
            //$(this).toggleClass("active");
            //var scrollHeight = $(window).scrollTop();
            //console.log("menuHeight = "+ menuHeight);
            //$(".menu").css("top", scrollHeight + "px");
        }

        $('#menuClose').click(toggleMenu);
        $('#menuLink').click(toggleMenu);
        $('#accordion a').click(toggleMenu);
        $("#hamburger").click(toggleMenu);


        var clearAllMenuActive = function() {
            $(".active").toggleClass("active");  
        };

        var toggleMenuClass = function() {
            clearAllMenuActive();
          $(this).toggleClass("active");  
        };

        $("#accordion div ul li a").click(toggleMenuClass);



        //menuHeight

        var menuHeight = $("#menu").height()

        //Menu position
       
        
        var checkMenuPos = function() {
                    //var menu   = document.getElementById('menu'),
                    var scrollHeight = $(window).scrollTop();
                    var windowWidth = $(window).width();
                    var topOffset = parseInt($(".menu").css('top')); //Grab the left position left first
                    if (windowWidth > 768 & scrollHeight > 310) {
                         $('.menu').css({
                            'top': scrollHeight - 310
                         });
                    } else {
                         $('.menu').css({
                            'top': '0'
                         }); 
                    }
    };

    checkMenuPos();

     $(window).scroll(checkMenuPos);
     //$('#hamburger').click(checkMenuPos);
     $(window).resize(checkMenuPos);
        
    $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        animate: 200
        
    });

//anchor scrolling 

/*
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 200, function () {
        window.location.hash = href;
    });
    return false;
});
*/

$('#menu').singlePageNav({
	updateHash: true,
	currentClass: 'active',
	beforeStart: function() {
	//	console.log('begin scrolling');
	},
	onComplete: function() {
	}
});

$(window).scroll(function(){
	var currentParent = $('#menu a.active').closest('div.ui-accordion-content').prev('h3');
	if (currentParent.hasClass('ui-state-active')){
		//do nothing
	}
	else {
	currentParent.trigger('click');
		        }
});

$(function() {
    FastClick.attach(document.body);
});

})(jQuery);
