(function($){
        //Article Menu

        var openArticle = function () {

            $(".article-menu div a").attr('class', 'inactive');


            $(this).attr('class', 'active');


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

            //var currentId = "." + $(this).parent().attr('id');
            var currentId = $(this).attr('href');
            $(console.log(currentId));

            $(currentId).show( "fast");
            //console.log()
        }

        $('.article-menu a, #menu .article-left-menu a').click(openArticle);

        var closeArticle = function () {
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

          $(".article-menu div a").attr('class', 'inactive');
        }

        $('.btn_close').click(closeArticle);

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
            console.log("menu click");

        }

        $('#menuClose').click(toggleMenu);
        $('#menuLink').click(toggleMenu);
        $('#accordion a').click(toggleMenu);
        //$("#hamburger").click(toggleMenu); was calling toggleMenu twice


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
	currentClass: 'activeDISABLED', //remove 'DISABLED' to activate link updates
	beforeStart: function() {
	//	console.log('begin scrolling');
	},
	onComplete: function() {
	}
});

$('#hamburger').scrollupbar();

/* Open current menu when scrolling

$(window).scroll(function(){
	var currentParent = $('#menu a.active').closest('div.ui-accordion-content').prev('h3');
	if (currentParent.hasClass('ui-state-active')){
		//do nothing
	}
	else {
	currentParent.trigger('click');
		        }
});

*/

$(function() {
    FastClick.attach(document.body);
});

$('#community-button').click(function() {
  $( ".communityrun" ).slideToggle();
});

})(jQuery);

jQuery(document).ready(function($) {

  // site preloader -- also uncomment the div in the header and the css style for #preloader
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });

});
