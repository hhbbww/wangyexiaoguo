/*
* @Author: Thinkpad
* @Date:   2017-09-18 22:50:07
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-19 19:13:21
*/
window.onload = function(){
	let aside = document.getElementsByClassName('aside-nav')[0];
	let lis = aside.getElementsByTagName('li');
	let nav1= document.getElementsByClassName('aside-nav1');
	let btns = document.getElementsByClassName('img-list')[0];
	let img1 = btns.getElementsByTagName('li');
	let btns1 = document.getElementsByClassName('btn-list')[0];
	let btnsdian=btns1.getElementsByTagName('li');
	let left = document.getElementsByClassName('banner-left')[0];
	let right = document.getElementsByClassName('banner-right')[0];
	let banner = document.getElementsByClassName('banner')[0];
	let num = 0
	console.log(left)
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
				// 先让所有的都消失掉 对应的显示
				img1[i].style.display= 'none';
				btnsdian[i].style.background= '#17171c';
			}
			img1[i].style.display = 'block';
			btnsdian[i].style.background= '#999';
			num = i;
		}
	}
	////////////////////////////////////////
	let s = setInterval(move, 3000);
	banner.onmouseover=function(){
		 clearInterval(s);
	}
	banner.onmouseout=function(){
		s = setInterval(move, 3000);
	}
	
	left.onclick=function(){
		movel();
	}
	right.onclick =function(){
		move();
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
	function movel (){
		num --;
		if(num<0){
			num = img1.length-1;
		}
		for(let i=0;i<img1.length;i++){
			img1[i].style.display= 'none'
			btnsdian[i].style.background= '#17171c';
			
		}
		img1[num].style.display = 'block';
		btnsdian[num].style.background= '#999';
	}
}