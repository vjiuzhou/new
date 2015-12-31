// JavaScript Document

/*renwudating-zhezhao*/
window.onload=function() 
 { 
  var zhezhao=document.getElementById("zhezhao"); 
  var xiangqing=document.getElementById("xiangqing"); 
  var bt=$("td[name=bt]");
  var btclose=document.getElementById("btclose"); 
 	bt.click(function(){
			zhezhao.style.display="block"; 
   			xiangqing.style.display="block"; 
		})
  btclose.onclick=function() 
  { 
   zhezhao.style.display="none"; 
   xiangqing.style.display="none";  
  } 
 } 
/*renwudating-zhezhao-end*/

$(document).ready(function()
{hov();tab();hover();tab1(); tab2();tab3();tab4();tab5();hover2(); rwtab(); hide();yxmttab();grzxtab();grzxhover();b();
mtfwbuy();label(); exchange();order();hide2();tjmttab();mtzgrzx1();mtzgrzx2();
tjzh1();tjzh2();tjzh3();tjzh4();tjzh5();tjzh6(); wddd();
});

/*index*/
function hov(){
		$('#logo nav a').hover(
		function(){
			$('#logo nav a').removeClass('pink')
			$(this).addClass('pink')
			},
		function(){
			$(this).removeClass('pink')
			$('#logo nav a:eq(0)').addClass('pink')
			}
		)
}
//banner-tab
 function tab(){
	$("#tab dl").hide();
	$("#tab dl:eq(0)").show();
	
	$("#qiehuan li").hover(function(){
		var num=$(this).index();
		$("#tab dl").hide();
		$("#tab dl:eq("+num+")").show()})
}
//banner-tab
//index-banner-tab-hover 
function hover(){
		$('#qiehuan li').hover(
			function(){
				$('li').removeClass('red')
				$(this).addClass('red')}
)} 
//index-banner-tab-hover
function tab1(){
	$("#tab1 ul").hide();
	$("#tab1 ul:eq(0)").show();
	
	$(".switch a").hover(function(){
		var num=$(this).index();
		$("#tab1 ul").hide();
		$("#tab1 ul:eq("+num+")").show()})
}
		

function tab2(){
	$("#tab2 ul").hide();
	$("#tab2 ul:eq(0)").show();
	
	$(".switch2 a").hover(function(){
		var num=$(this).index();
		$("#tab2 ul").hide();
		$("#tab2 ul:eq("+num+")").show()})
}

		
function tab3(){
	$("#tab3 table").hide();
	$("#tab3 table:eq(0)").show();
	
	$(".switch3 a").hover(function(){
		var num=$(this).index();
		$("#tab3 table").hide();
		$("#tab3 table:eq("+num+")").show()})
}

function tab4(){
	$("#tab4 ul").hide();
	$("#tab4 ul:eq(0)").show();
	
	$(".switch4 a").hover(function(){
		var num=$(this).index();
		$("#tab4 ul").hide();
		$("#tab4 ul:eq("+num+")").show()})
}	

function tab5(){
	$("#tab5 li").hide();
	$("#tab5 li:eq(0)").show();
	
	$(".switch5 a").hover(function(){
		var num=$(this).index();
		$("#tab5 li").hide();
		$("#tab5 li:eq("+num+")").show()})
}

	function hover2(){
		$('.switch5 a').hover(
			function(){
				$('a').removeClass('pink')
				$(this).addClass('pink')}
		)}		
/*index-end*/	
/*任务大厅*/	
function rwtab(){
	$("#rwtab ul").hide();
	$("#rwtab ul:eq(0)").show();
	
	$(".rwswitch a").hover(function(){
		var num=$(this).index();
		$("#rwtab ul").hide();
		$("#rwtab ul:eq("+num+")").show()})
}	
/*任务大厅-end*/
function hide(){
		$("#yc span").click(function(){
			$("#yc .yincang").toggle();
			$("#yc .hide1").toggle();
			$("#yc .hide2").toggle();
			$("#yc dd").toggleClass("biankuang");
			})
}
/*优选媒体*/	
function yxmttab(){
	$("#yxmt ul").hide();
	$("#yxmt ul:eq(0)").show();
	
	$(".yxmttab a").hover(function(){
		var num=$(this).index();
		$("#yxmt ul").hide();
		$("#yxmt ul:eq("+num+")").show()})
}	
/*优选媒体-edn*/
/*个人中心主*/
function hide2(){
	$("#personal .left dl dd").click(function(){
		$(this).children(".hide1").toggle();
		$(this).children(".hide2").toggle();
		$(this).siblings("ul").toggle();
		})
}
function grzxhover(){
		$('#personal .right .font div .p1').hover(
			function(){
				$('.p1').removeClass('pink')
				$(this).addClass('pink')}
)} 
//tab
function grzxtab(){
	$("#personal #neirong .tab").hide();
	$("#personal #neirong .tab:eq(0)").show();
	$("#personal .font .p2").hide();
	$("#personal .font .p2:eq(0)").show();
	
	$("#personal .right .font div").hover(function(){
		var num=$(this).index();
		$("#personal #neirong .tab").hide();
		$("#personal #neirong .tab:eq("+num+")").show()})
		
	$("#personal .right .font div").hover(function(){
		var num=$(this).index();
		$("#personal .font .p2").hide();
		$("#personal .font .p2:eq("+num+")").show()})
}	
//tab-end
/*个人中心主-end*/
function tjmttab(){
	$("#neirong-tjmtz .tjmtz").hide();
	$("#neirong-tjmtz .tjmtz:eq(0)").show();
	
	$("#tjmtz1 a").hover(function(){
		var num=$(this).index();
		$("#neirong-tjmtz .tjmtz").hide();
		$("#neirong-tjmtz .tjmtz:eq("+num+")").show()})
}
/*媒体服务购买页*/
//top
$(function(){
	$("#mtfw .top dd li").hover(function(){
	var index=$("#mtfw .top dd li").index(this);
	$(this).parent().parent().find(".switch").hide();
	$("#mtfw .switch").eq(index).show();
	})
})
function b(){
		$("#mtfw .top ul li b").click(function(){
			$(this).toggleClass("b");
			})
}
//top-end
//content li
function mtfwbuy(){
		$('#mtfw .content ul li').hover(
			function(){
				$('li').removeClass('hover')
				$(this).addClass('hover')}
)} 
//content li-end
//content-tab3
function label(){
		$('#mtfw .content .tab .tab3 label').click(
			function(){
				$('label').removeClass('hover')
				$(this).addClass('hover')}
)}
//content-tab3-end
function exchange(){
	$("#mtfw .left .footer .tab .exchange").hide();
	$("#mtfw .left .footer .tab .exchange:eq(0)").show();
	
	$("#mtfw .left .footer .switch li").hover(function(){
		var num=$(this).index();
		$("#mtfw .left .footer .tab .exchange").hide();
		$("#mtfw .left .footer .tab .exchange:eq("+num+")").show()})
}
//订单点击显示
function order(){
	$("#mtfw .top .dj").click(function(){
		$("#mtfw #zhezhao").show();
		$("#mtfw #xiangqing").show();
		})
}
//订单点击显示-end
/*媒体服务购买页-end*/
	
/*媒体主个人中心首页*/
function mtzgrzx1(){
		$('#mtzgrzx .right .li4 .top a').hover(
		function(){
			$('#mtzgrzx .right .li4 .top a').removeClass('pink')
			$(this).addClass('pink')
			},
		function(){
			$(this).removeClass('pink')
			$('#mtzgrzx .right .li4 .top a:eq(3)').addClass('pink')
			}
		)
}
function mtzgrzx2(){
$('#mtzgrzx .right .middle dl').hover(
	function(){
		$('#mtzgrzx .right .middle dl').removeClass('bj')
		$(this).addClass('bj')}
)}
/*媒体主个人中心首页-end*/		

/*个人主页-添加账号*/
function tjzh1(){
	$('#tjzh1 .sorting1 a').click(
		function(){
			$('#tjzh1 .sorting1 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
function tjzh2(){
	$('#tjzh1 .sorting2 a').click(
		function(){
			$('#tjzh1 .sorting2 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
function tjzh3(){
	$('#tjzh1 .sorting3 a').click(
		function(){
			$('#tjzh1 .sorting3 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
function tjzh4(){
	$('#tjzh1 .sorting4 a').click(
		function(){
			$('#tjzh1 .sorting4 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
function tjzh5(){
	$('#tjzh1 .sorting5 a').click(
		function(){
			$('#tjzh1 .sorting5 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
function tjzh6(){
	$('#tjzh1 .sorting6 a').click(
		function(){
			$('#tjzh1 .sorting6 a').removeClass('orange')
			$(this).addClass('orange')}
	)}
/*个人主页-添加账号-end*/

/*我的订单*/
function wddd(){
		$("#wddd .wddd1-main1 .dj").click(function(){
			$("#wddd #zhezhao").show();
			$("#wddd #xiangqing").show();
			})
	}				
/*我的订单*/          