var xhr = new XMLHttpRequest();                
xhr.onload = function() {                       
  
  if(xhr.status === 200) {                      
    a = JSON.parse(xhr.responseText);
    for (var i = 0; i < a.length; i++) {
	    for (let j =0;j<a[i].cityList.length;j++) {
			 if (a[i].cityList[j].districtList.length==0){ //处理没有区县的地方，比如北京天津上海重庆中山东莞等
				 console.log(a[i].name,',',a[i].id,',',a[i].name,',',a[i].id,',',a[i].cityList[j].name,',',a[i].cityList[j].id);
				 } 
			for(let k=0;k<a[i].cityList[j].districtList.length;k++) {	 
			console.log(a[i].name,',',a[i].id,',',a[i].cityList[j].name,',',a[i].cityList[j].id,',',a[i].cityList[j].districtList[k].name,',',a[i].cityList[j].districtList[k].id);
			 }
		 }
    }
 }
};

xhr.open('GET', 'data/data.json', true);       
xhr.send(null);                                

/*
{"name":"山东省","id":370000,"cityList":[{"districtList":[{"name":"市辖区","pid":370100,"id":370101},{"name":"历下区","pid":370100,"id":370102},{"name":"市中区","pid":370100,"id":370103},{"name":"槐荫区","pid":370100,"id":370104},{"name":"天桥区","pid":370100,"id":370105},{"name":"历城区","pid":370100,"id":370112},{"name":"长清区","pid":370100,"id":370113},{"name":"平阴县","pid":370100,"id":370124},{"name":"济阳县","pid":370100,"id":370125},{"name":"商河县","pid":370100,"id":370126},{"name":"章丘市","pid":370100,"id":370181}],"name":"济南市","pid":370000,"id":370100}
*/