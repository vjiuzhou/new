// JavaScript Document
/*renwudating-zhezhao*/
window.onload=function() 
 { 
  var zhezhao=document.getElementById("zhezhao"); 
  var xiangqing=document.getElementById("xiangqing"); 
  var bt=document.getElementById("bt"); 
  var btclose=document.getElementById("btclose"); 
   
  bt.onclick=function() 
  { 
   zhezhao.style.display="block"; 
   xiangqing.style.display="block"; 
  } 
  btclose.onclick=function() 
  { 
   zhezhao.style.display="none"; 
   xiangqing.style.display="none";  
  } 
 } 
/*renwudating-zhezhao-end*/

$(document).ready(function()
{tab();hover();tab1(); tab2();tab3();tab4();tab5();hover2(); rwtab(); hide();yxmttab();
});

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

//banner-tab-hover 
function hover(){
		$('#qiehuan li').hover(
			function(){
				$('li').removeClass('red')
				$(this).addClass('red')}
)} 
//banner-tab-hover
 
 
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
		
		
function rwtab(){
	$("#rwtab ul").hide();
	$("#rwtab ul:eq(0)").show();
	
	$(".rwswitch a").hover(function(){
		var num=$(this).index();
		$("#rwtab ul").hide();
		$("#rwtab ul:eq("+num+")").show()})
}	

function hide(){
		$("#yc span").click(function(){
			$("#yc .yincang").toggle();
			$("#yc .hide1").toggle();
			$("#yc .hide2").toggle();
			$("#yc dd").toggleClass("biankuang");
			})
	}
	
function yxmttab(){
	$("#yxmt ul").hide();
	$("#yxmt ul:eq(0)").show();
	
	$(".yxmttab a").hover(function(){
		var num=$(this).index();
		$("#yxmt ul").hide();
		$("#yxmt ul:eq("+num+")").show()})
}	