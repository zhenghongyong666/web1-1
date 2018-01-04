
$(function(){  
	var currentFile = location.href.split('/').pop();
	var ua = navigator.userAgent;

	$("#sidecolumn a img").hover(function(){
		$(this).css("opacity", "0.2");
		$(this).css("filter", "alpha(opacity=20)");
		$(this).fadeTo("slow", 1.0);
	});
	
	try{
		$("div a").fancybox({
			'zoomOpacity' : true,'overlayShow' : false,'zoomSpeedIn' : 500,'zoomSpeedOut' : 500});
	}catch(e){}
	$('a img').each(function(){
		var imgSrc = $(this).attr('src');
		if(imgSrc.match(/(.*)_off(\..*)/)){
			var repSrc = RegExp.$1+'_on'+RegExp.$2;
			$('<img />').attr('src',repSrc);
			$(this).hover(function(){
				$(this).attr('src',repSrc);
				$(this).css({opacity: '1',filter: 'alpha(opacity=100)'});
			},function(){
				$(this).attr('src',imgSrc);
			})
		}else if(!$(this).hasClass('not')){
			$(this).hover(function(){
					$(this).css({
						opacity: '0.8',
						filter: 'alpha(opacity=80)'
					});
			},function(){
					$(this).css({
						opacity: '1',
						filter: 'alpha(opacity=100)'
					});
			}
			
			);
		}
	});
	$('form p.submit input').mousedown(function(){
		$(this).css({position:'relative',top:'1px',left:'1px'});
	}).mouseup(function(){
		$(this).css({position:'static'});
	}).mouseout(function(){
		$(this).css({position:'static'});
	})
	  .hover(function(){
		$(this).attr('src',$(this).attr('src').replace(/^(.*)_off.(.*)$/,'$1_on.$2'));
	},function(){
		$(this).attr('src',$(this).attr('src').replace(/^(.*)_on.(.*)$/,'$1_off.$2'));
	});
	$('form p.submit input').mousedown(function(){
		$(this).css({position:'relative',top:'1px',left:'1px'});
	}).mouseup(function(){
		$(this).css({position:'static'});
	}).mouseout(function(){
		$(this).css({position:'static'});
	})
	  .hover(function(){
		$(this).css({opacity:0.2});
		$(this).fadeTo('slow',1.0);
	});
});