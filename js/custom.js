jQuery(document).ready(function(){
	$( "#menu" ).trigger( "updatelayout" );
	jQuery('.menu-container li a').click(function(even){
		jQuery('.menu-container li').not(jQuery(this).parent('li')).removeClass('active');
		jQuery(this).parent('li').removeClass('active');
		jQuery(this).parents('li').addClass('active');
		if(jQuery(this).parent('li').find('ul').length != 0){
			even.preventDefault();
			jQuery('.menu-container li').not(jQuery(this).parents('li')).find('ul').slideUp();
			jQuery(this).next('ul').slideToggle();
			jQuery(this).parent('li').toggleClass('active');
		}
	});

	jQuery('.menu-container li').each(function(){
		if(jQuery(this).find('ul').length !=0){
			jQuery(this).addClass('haschild');
		}
	});

	jQuery('html, body').click(function(even){
		if(jQuery(even.target).closest('#menu').length == 0){
			jQuery('#menu ul > li').removeClass('active');
			jQuery('#menu ul > li ul').slideUp();
		}
	});

	ddrop();
	imgdrop();
    inputtext();
    l1u7_truefalse();
    choose_teacher();
    record();
});

jQuery(window).load(function() {
	jQuery('.flexslider').flexslider();
	jQuery( "#birthday" ).datepicker();

    // if(jQuery('#level1-u1').is(':visible')){
    // 	jQuery('.slider01').bxSlider();
    // }

	//box();

    jQuery('.ui-loading .ui-loader').hide();

});
$(window).resize(function() {
	//box();
});

var slider = null;

$(document).on("pagechange", function (e, data) {
    if(data.toPage[0].id == "level1-u1"){
        slider = jQuery('.slider01').bxSlider({
            controls: false
        });
    }
    else{
        jQuery('.flexslider').flexslider();
        if(slider){
            slider.destroySlider();
        }
    }
});

$(document).on( "mobileinit", function() {
    $.mobile.defaultPageTransition = "page-one";
}); 

function box() {
	$('.list-tool li').each(function() {
		var htext = $(this).height();
		var hinner = $(this).find('a').height();
		var current = (htext-hinner)/2;
		$(this).find('a').css('padding-top',current + 'px');
	});
}

function ddrop(){
	$('.l1u1pt-e1 .drop_e1 li').each(function(){
        if($(this).find('b').size() == 1){
            $(this).find('b').addClass('class');
            //$(this).find('b').append('<span></span>');
        }
        else{
            $(this).find('b').each(function(i){
                $(this).addClass('class'+i);
                // $(this).append('<span></span>');
            });
        }
    });
    $('.l1u1pt-e1 .div-img span').draggable({
	    revert: 'invalid',
	    helper: 'clone'
	});

    var drop = function(event, ui, li){
        var index = li.data('count');
        li.text(ui.draggable.text());
        li.parent().addClass('addText');
        $('ul.exercise-number li').eq(index).addClass('option_done');
        //ui.helper.remove();
    }

    $('.l1u1pt-e1 .drop_e1 b span').droppable({
        drop: function(event, ui){
            drop(event,ui,$(this));
        }
    });
    jQuery('.l1u1pt-e1 .drop_e1 li:first').show();
    $('.btn-next-ex').click(function(){
        if(jQuery('.l1u1pt-e1 .drop_e1 li:visible').next('li').length != 0){
        	jQuery('.l1u1pt-e1 .drop_e1 li:visible').hide('slow').next('li').show('slow');
        	jQuery('.l1u1pt-e1 .control-nav a.active').removeClass('active').next('a').addClass('active');
        }
    });

    $('.btn-prev-ex').click(function(){
        if(jQuery('.l1u1pt-e1 .drop_e1 li:visible').prev('li').length != 0){
        	jQuery('.l1u1pt-e1 .drop_e1 li:visible').hide('slow').prev('li').show('slow');
        	jQuery('.l1u1pt-e1 .control-nav a.active').removeClass('active').prev('a').addClass('active');
        }
    });

    var count = jQuery('.l1u1pt-e1 .drop_e1 li').length;

    for(i=1; i <= count; i++){
    	jQuery('.l1u1pt-e1 .control-nav').append('<a href="#">'+i+'</a>');
    }
    jQuery('.l1u1pt-e1 .control-nav a').first().addClass('active');

    var result = ['i','i:','i','i:','i','i:'];

    $('.btn-check').click(function(){
    	if(jQuery('.l1u1pt-e1 .section-navigation').is(':hidden')){
	        jQuery('.l1u1pt-e1 .drop_e1 b span').each(function(index){
	        	if(jQuery(this).text() == result[index]){
	        		jQuery(this).addClass('spantrue');
	        		jQuery(this).append('<u class="awrftrue" style="display: inline;"></u>');
	        	}
	        	else{
	        		jQuery(this).addClass('spanfalse');
	        		jQuery(this).append('<u class="awrfalse" style="display: inline;"></u>');
	        	}
	        });
	        jQuery('.l1u1pt-e1 .section-navigation').show();
        }
    });
}

function imgdrop(){
	$('.txt-awr li').draggable({
        revert: "invalid",
        helper: "clone",
        drag: function(event, ui){
            ui.helper.css('z-index', 2);
        }
    });
    var drop = function (event, ui, li){
        li.find('.answer-choice').text(ui.draggable.text());
        index = li.index();
        //li.find('.answer-choice').css('background','url(/bundles/sol90educate/img/bgr-done.png) repeat-x');
        li.find('.answer-choice').addClass('addTexted').css('background-color','#ffdd58');
        //ui.helper.remove();
        ui.draggable.css({background:'#ECECEC',color: '#ccc'});
        ui.draggable.find('.headphone').addClass('choosed').attr('src','images/icon-voice2.png').show();
        ui.draggable.find('span.span-awr-divider').css('visibility','hidden');
        ui.helper.hide();
        ui.option('disabled');
    }

    var index = 0;
    $('.awr ul.items li').droppable({
        drop: function(event,ui){
	        drop(event,ui,$(this));
	    }
    });

    jQuery('.l1u1wu .awr ul.items').first().show();
    jQuery('.txt-awr > ul').first().show();

    $('.l1u1wu .btn-next-ex').click(function(){
        if(jQuery('.l1u1wu .awr ul.items:visible').next('ul.items').length != 0){
        	jQuery('.l1u1wu .awr ul.items:visible').hide('slow').next('ul.items').show('slow');
        	jQuery('.txt-awr > ul:visible').hide('slow').next('.txt-awr > ul').show('slow');
        	jQuery('.l1u1wu .control-nav a.active').removeClass('active').next('a').addClass('active');
        }
    });

    $('.l1u1wu .btn-prev-ex').click(function(){
        if(jQuery('.l1u1wu .awr ul.items:visible').prev('ul.items').length != 0){
        	jQuery('.l1u1wu .awr ul.items:visible').hide('slow').prev('ul.items').show('slow');
        	jQuery('.txt-awr > ul:visible').hide('slow').prev('.txt-awr > ul').show('slow');
        	jQuery('.l1u1wu .control-nav a.active').removeClass('active').next('a').addClass('active');
        }
    });

    var count = jQuery('.l1u1wu .awr ul.items').length;

    for(i=1; i <= count; i++){
    	jQuery('.l1u1wu .control-nav').append('<a href="#">'+i+'</a>');
    }
    jQuery('.l1u1wu .control-nav a').first().addClass('active');


    var result2 = ["Gardener", "Computer Operator", "Cashier", "Engineer", "Engineer", "Musician", "Dentist", "Teacher"];

    $('.l1u1wu .btn-check').click(function(evt){
        evt.preventDefault();
        if (!$(this).attr("disabled")) {
            $('.awr ul.items li').each(function(index){
                if(jQuery(this).find('.answer-choice').text().trim() == result2[index].trim()){
                	jQuery(this).find('.answer-choice').addClass('awr-true');

                }
                else{
                	jQuery(this).find('.PairPicturesRightAnswer').text(result2[index]).show();
                	jQuery(this).find('.answer-choice').addClass('awr-false');
                	jQuery(this).find('.right_answer').show();
                }
            });
            $(this).attr("disabled", true);
            jQuery('.l1u1wu .section-navigation').show();
            jQuery('.l1u1wu .txt-awr').hide();
        }
    });
}


function inputtext(){
    var parrafo = $('.arranging-word > p').text();
    var output = parrafo.match(/\{+(\w|\w')+\}+/g);
    for(i = 0; i < output.length; i++){
        var txt = output[i].replace('{','').replace('}','');
        parrafo = parrafo.replace(output[i],'<input type="text" name="" id="" />');
    }
    $('.arranging-word > p').html(parrafo);

    $('.timetowrite-e1 .btn-check').click(function(even){
        even.preventDefault();
        jQuery('.arranging-word > p input:text').each(function(index){
            output[index] = output[index].replace('{','').replace('}','').trim();
            if(jQuery(this).val().trim() == output[index]){
                jQuery(this).addClass('awr_true');
                jQuery(this).after('<img src="images/yes-h.png" alt=""/>');
            }
            else{
                jQuery(this).removeClass('awr_false');
                jQuery(this).after('<img src="images/No-h.png" alt=""/>');
            }
        });
        for(i = 0; i < output.length; i++){
            var txt = output[i].replace('{','').replace('}','');
            parrafo = parrafo.replace(output[i],'<input type="text" name="" id="" />');
        }
        jQuery('.timetowrite-e1 .section-navigation').show();
    });
}

function l1u7_truefalse(){
    jQuery('.l1u1tr-e1 .l1u1tr-text').first().show();

    $('.l1u1tr-e1 .btn-next-ex').click(function(){
        if(jQuery('.l1u1tr-e1 .l1u1tr-text:visible').next('.l1u1tr-text').length != 0){
            jQuery('.l1u1tr-e1 .l1u1tr-text:visible').stop(true,true).css('display','none').next('.l1u1tr-text').show('slow');
            jQuery('.l1u1tr-e1 .control-nav a.active').removeClass('active').next('a').addClass('active');
        }
    });

    $('.l1u1tr-e1 .btn-prev-ex').click(function(){
        if(jQuery('.l1u1tr-e1 .l1u1tr-text:visible').prev('.l1u1tr-text').length != 0){
            jQuery('.l1u1tr-e1 .l1u1tr-text:visible').stop(true,true).css('display','none').prev('.l1u1tr-text').show('slow');
            jQuery('.l1u1tr-e1 .control-nav a.active').removeClass('active').prev('a').addClass('active');
        }
    });
    var count = jQuery('.l1u1tr-e1 .l1u1tr-text').length;
    for(i=1; i <= count; i++){
        jQuery('.l1u1tr-e1 .control-nav').append('<a href="#">'+i+'</a>');
    }
    jQuery('.l1u1tr-e1 .control-nav a').first().addClass('active');

    $('.l1u1tr-e1 li span').click(function(){
        $(this).parents('li').find('span').removeClass();
        $(this).removeClass();
        $(this).parents('li').find('span').addClass('awr-awr-false');
        $(this).removeClass('awr-awr-false').addClass('awr_awr');
    });
    result3 = ["false","true","false","true","false","true"];
    $('.l1u1tr-e1 .btn-check').click(function(evt){
        evt.preventDefault();
        if (!$(this).attr("disabled")) {
            $('.l1u1tr-e1 li').each(function(index){
                if(jQuery(this).find('.awr_awr').text() == result3[index]){
                    jQuery(this).addClass('t_true');
                }
                else{
                    jQuery(this).addClass('t_false');
                }
            });
            $(this).attr("disabled", true);
            jQuery('.l1u1tr-e1 .section-navigation').show();
        }
    });
}

function choose_teacher(){
    jQuery('.choose-teacher ul.list-teacher li').click(function(){
        jQuery('.choose-teacher ul.list-teacher li').not(this).removeClass('active');
        jQuery(this).addClass('active');
    });
}

function record(){
    jQuery('.record-talk ul.list-text li:first').show();
    $('.record-talk .btn-next-ex').click(function(){
        if(jQuery('.record-talk ul.list-text li:visible').next('.record-talk ul.list-text li').length != 0){
            jQuery('.record-talk ul.list-text li:visible').stop(true,true).css('display','none').next('.record-talk ul.list-text li').show('slow');
            jQuery('.record-talk .control-nav a.active').removeClass('active').next('a').addClass('active');
        }
    });

    $('.record-talk .btn-prev-ex').click(function(){
        if(jQuery('.record-talk ul.list-text li:visible').prev('.record-talk ul.list-text li').length != 0){
            jQuery('.record-talk ul.list-text li:visible').stop(true,true).css('display','none').prev('.record-talk ul.list-text li').show('slow');
            jQuery('.record-talk .control-nav a.active').removeClass('active').prev('a').addClass('active');
        }
    });
    var count = jQuery('.record-talk ul.list-text li').length;
    for(i=1; i <= count; i++){
        jQuery('.record-talk .control-nav').append('<a href="#">'+i+'</a>');
    }
    jQuery('.record-talk .control-nav a').first().addClass('active');

    $('.record-talk .btn-check').click(function(){
        jQuery('.record-talk .section-navigation').show();
    });
}