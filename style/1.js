window.onload=function(){
	var oShow=document.getElementById('showImg');
	var num=0;
	var divset=oShow.getElementsByTagName('div');
	var showpic=document.getElementById('showpic')
	for(num=0;num<50;num++){
		oShow.innerHTML+='<div>'+'</div>'
	}
for(var m=10;m<60;m=m+10){
for(var i=m-10;i<m;i++){divset[i].style.top=(m-10)/10*90+'px';divset[i].style.left=(i-(m-10))*80+'px'}}
for(var n=0;n<50;n++){divset[n].onmouseover = function(){this.style.background='none';} }

	
 showpic.onclick=function(){
 	for(var z=0;z<divset.length;z++){
 	alldiv=divset[z]
 	alldiv.style.background='none'
 }
}

}
	