import areaList from './area-list.js';
import addressParse,{parseArea} from './address-parse.js';

parseArea(areaList);//必须先进行一次parseArea


var rlzy = document.getElementById('tj_button');
rlzy.addEventListener('click', clickRlButton, false);

function clickRlButton() {
  var el = document.getElementById("tj_input");   // Username input
  var elText = el.value;
  let result = addressParse(elText);
 document.getElementById("province").value=result.province;
 document.getElementById("detailInfo").value=result.addr;
 document.getElementById("district").value=result.area;
 document.getElementById("city").value=result.city;
 document.getElementById("mobile").value=result.mobile;
 document.getElementById("name").value=result.name;
 document.getElementById("telphone").value=result.phone;
 document.getElementById("zipcode").value=result.zip_code;
  
};