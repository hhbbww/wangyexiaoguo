/*
* @Author: Thinkpad
* @Date:   2017-09-18 17:11:47
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-19 19:18:44
*/
window.onload = function(){
	let aside = document.getElementsByClassName('aside-nav')[0];
	let lis = aside.getElementsByTagName('li');
	let nav1= document.getElementsByClassName('aside-nav1');
	let btns = document.getElementsByClassName('img-list')[0];
	let img1 = btns.getElementsByTagName('a');
	let btns1 = document.getElementsByClassName('btn-list')[0];
	let btnsdian=btns1.getElementsByTagName('li')
	let banner = document.getElementsByClassName('banner')[0];
	let num = 0 ;
	// for(let i = 0;i<lis.length;i++){
	// 	lis[i].onmouseover =function(){
	// 		nav1[i].style.display = 'block';
	// 	}
	// 	lis[i].onmouseout = function(){
	// 		nav1[i].style.display = 'none';
	// 	}
	// }
	for(let i = 0;i<lis.length;i++){
		lis[i].onmouseover =function(){
			nav1[i].className='aside-nav1 nav2';
		}
		lis[i].onmouseout = function(){
			nav1[i].className='aside-nav1';
		}
	}
	
	for(let i=0;i<btnsdian.length;i++){
		btnsdian[i].onclick = function(){
			for(let i=0;i<6;i++){
				img1[i].style.display= 'none';
				btnsdian[i].style.background= '#17171c';
			}
			img1[i].style.display = 'block';
			btnsdian[i].style.background= '#999';
			num = i;
		}
	}
	// let now = 0;
	
	// for(var i= 0;i<btnsdian.length;i++){
	// 	btnsdian[i].index = i;
	// 	btnsdian[i].onclick = (function(i){
	// 		return function ()   {
	// 			img1[num].style.display='none';
	// 			img1[i].style.display='block';
	// 			num = i;
	// 		}
	// 	})(i)
	// }
	
	let s = setInterval(move, 3000);
	banner.onmouseover=function(){
		 clearInterval(s);
	}
	banner.onmouseout=function(){
		s = setInterval(move, 3000);
	}
	
	function move (){
		num ++;
		if(num==img1.length){
			num = 0;
		}
		for(let i=0;i<img1.length;i++){
			img1[i].style.display= 'none'
			btnsdian[i].style.background= '#17171c';
		}
		img1[num].style.display = 'block';
		btnsdian[num].style.background= '#999';
	}
}