		var total = 0;
  		var flag_one=0;
		var flag_two=0;
		var flag_three=0;
		var flag_four=0;
		var flag_five=0;
		var flag_six=0;
		var flag_7=0;
		var flag_8=0;
		var flag_9=0;
		var flag_10=0;
		var flag_11=0;
		var flag_12=0;
		var flag_11=0;
		var flag_12=0;
		var flag_13=0;
		var flag_14=0;
		var sum_price_one= 0;
		var sum_price_two= 0;
		var sum_price_three= 0;
		var sum_price_four= 0;
		var sum_price_five= 0;
		var sum_price_six= 0;
		var sum_price_7= 0;
		var sum_price_8= 0;
		var sum_price_9= 0;
		var sum_price_10= 0;
		var sum_price_11= 0;
		var sum_price_12= 0;
		var sum_price_13= 0;
		var sum_price_14= 0;
		var sum_price = 0;
		
		
		
		function num() {
		var value = document.getElementById("num").value.split(".")[0];
		if(value.length == 1)
			$('#num').attr('maxlength',4);
		else
			$('#num').attr('maxlength',5);
		if(value > 12)
			document.getElementById("num").value=12;
		else if(value < 1)
			document.getElementById("num").value='';
		}
		

		
		
	
		 function price_one_j(){
			var checkValue=$("#one").val(); //获取Select选择的Value
			window.location.href = 'checkout.html?flag=1&checkValue=' + checkValue;
		 }
		 function price_two_j(){
			 var checkValue=$("#two").val(); //获取Select选择的Value
			 window.location.href = 'checkout.html?flag=2&checkValue=' + checkValue;
		 }
		 function price_three_j(){
			 var checkValue=$("#three").val(); //获取Select选择的Value
			 window.location.href = 'checkout.html?flag=3&checkValue=' + checkValue;
		 }
		 function price_four_j(){
			 var checkValue=$("#four").val(); //获取Select选择的Value
			 window.location.href = 'checkout.html?flag=4&checkValue=' + checkValue;
		 }
		 function price_five_j(){
			 window.location.href = 'checkout.html?flag=' + 5;
		 }
		 function price_six_j(){
			 window.location.href = 'checkout.html?flag=6';
		 }
		 function price_7_j(){
			 window.location.href = 'checkout.html?flag=7';
		 }
		 function price_8_j(){
			 window.location.href = 'checkout.html?flag=8' ;
		 }
		 function price_9_j(){
			 window.location.href = 'checkout.html?flag=9';
		 }
		 function price_10_j(){
			 window.location.href = 'checkout.html?flag=10';
		 }
		 function price_11_j(){
			 window.location.href = 'checkout.html?flag=11';
		 }
		 function price_12_j(){
			 window.location.href = 'checkout.html?flag=12';
		 }
		 function price_13_j(){
			 var checkValue=$("#13").val(); //获取Select选择的Value
			 window.location.href = 'checkout.html?flag=13&checkValue=' + checkValue;
		 }
		 function price_14_j(){
			 var checkValue=$("#14").val(); //获取Select选择的Value			 
			 window.location.href = 'checkout.html?flag=14&checkValue=' + checkValue;
		 }
		 function price_one(one){
			  if(window.flag_one==0){
			  var tr = "<tr id = \"tr1\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"meatpizza.jpg\"><span class=\"pname\">Meat Lovers(<span id = \"sone\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>28</span></td>"+
					 " <td><button onclick=\"btnOperateOne('-')\">-</button><input id=\"num1\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateOne('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count1\" value=\"28\" disabled></td>"+
					 "<td><button onclick=\"del_one()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("sone").innerText = one;
					window.flag_one = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 28;
					sum_price_one = 28;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
  
          function price_two(two){
			  if(window.flag_two==0){
			  var tr = "<tr id = \"tr2\" data-pid=\"p002\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"vegpizza.jpg\"><span class=\"pname\">vegpizza(<span id = \"stwo\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>22</span></td>"+
					 " <td><button onclick=\"btnOperateTwo('-')\">-</button><input id=\"num2\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateTwo('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count2\" value=\"22\" disabled></td>"+
					 "<td><button onclick=\"del_two()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("stwo").innerText = two;
					window.flag_two = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 22;
					sum_price_two = 22;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
		  
		  function price_three(three){
			  if(window.flag_three==0){
			  var tr = "<tr id = \"tr3\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"seapizza.jpg\"><span class=\"pname\">seapizza(<span id = \"sthree\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>25</span></td>"+
					 " <td><button onclick=\"btnOperateThree('-')\">-</button><input id=\"num3\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateThree('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count3\" value=\"25\" disabled></td>"+
					 "<td><button onclick=\"del_three()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("sthree").innerText = three;
					window.flag_three = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 25;
					sum_price_three = 25;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
		  
		  function price_four(four){
			  if(window.flag_four==0){
			  var tr = "<tr id = \"tr4\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"dessertpizza.jpg\"><span class=\"pname\">dessertpizza(<span id = \"sfour\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>19</span></td>"+
					 " <td><button onclick=\"btnOperateFour('-')\">-</button><input id=\"num4\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateFour('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count4\" value=\"19\" disabled></td>"+
					 "<td><button onclick=\"del_four()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("sfour").innerText = four;
					window.flag_four = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 19;
					sum_price_four = 19;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
  
		  function price_five(){
			  if(window.flag_five==0){
			  var tr = "<tr id = \"tr5\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"blueberry.jpg\"><span class=\"pname\">blueberry</span> </td>"+
					 "<td class=\"price\">$<span>6</span></td>"+
					 " <td><button onclick=\"btnOperateFive('-')\">-</button><input id=\"num5\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateFive('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count5\" value=\"6\" disabled></td>"+
					 "<td><button onclick=\"del_five()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_five = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 6;
					sum_price_five = 6;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
		  
		  function price_six(){
			  if(window.flag_six==0){
			  var tr = "<tr id = \"tr6\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"cupcakes.jpg\"><span class=\"pname\">Limoncellp cupcakes</span> </td>"+
					 "<td class=\"price\">$<span>4</span></td>"+
					 " <td><button onclick=\"btnOperateSix('-')\">-</button><input id=\"num6\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperateSix('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count6\" value=\"4\" disabled></td>"+
					 "<td><button onclick=\"del_six()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_six = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 4;
					sum_price_six = 4;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
  
  
  function price_7(){
			  if(window.flag_7==0){
			  var tr = "<tr id = \"tr7\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"drink.jpg\"><span class=\"pname\">PINOT NOIR</span> </td>"+
					 "<td class=\"price\">$<span>16</span></td>"+
					 " <td><button onclick=\"btnOperate7('-')\">-</button><input id=\"num7\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate7('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count7\" value=\"16\" disabled></td>"+
					 "<td><button onclick=\"del_7()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_7 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 16;
					sum_price_7 = 16;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
  
  
  function price_8(){
			  if(window.flag_8==0){
			  var tr = "<tr id = \"tr8\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"drink.jpg\"><span class=\"pname\">PINOT GRIS</span> </td>"+
					 "<td class=\"price\">$<span>15</span></td>"+
					 " <td><button onclick=\"btnOperate8('-')\">-</button><input id=\"num8\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate8('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count8\" value=\"15\" disabled></td>"+
					 "<td><button onclick=\"del_8()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_8 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 15;
					sum_price_8 = 15;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
  function price_9(){
			  if(window.flag_9==0){
			  var tr = "<tr id = \"tr9\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"drink.jpg\"><span class=\"pname\">WATER</span> </td>"+
					 "<td class=\"price\">$<span>5</span></td>"+
					 " <td><button onclick=\"btnOperate9('-')\">-</button><input id=\"num9\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate9('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count9\" value=\"5\" disabled></td>"+
					 "<td><button onclick=\"del_9()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_9 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 5;
					sum_price_9 = 5;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
	function price_10(){
			  if(window.flag_10==0){
			  var tr = "<tr id = \"tr10\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"bruschetta.jpg\"><span class=\"pname\">bruschetta</span> </td>"+
					 "<td class=\"price\">$<span>12</span></td>"+
					 " <td><button onclick=\"btnOperate10('-')\">-</button><input id=\"num10\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate10('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count10\" value=\"12\" disabled></td>"+
					 "<td><button onclick=\"del_10()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_10= 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 12;
					sum_price_10 = 12;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }	  
		  
		  
	function price_11(){
			  if(window.flag_11==0){
			  var tr = "<tr id = \"tr11\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"fries.jpg\"><span class=\"pname\">fries</span> </td>"+
					 "<td class=\"price\">$<span>8</span></td>"+
					 " <td><button onclick=\"btnOperate11('-')\">-</button><input id=\"num11\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate11('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count11\" value=\"8\" disabled></td>"+
					 "<td><button onclick=\"del_11()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_11 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 8;
					sum_price_11 = 8;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }	  
	
function price_12(){
			  if(window.flag_12==0){
			  var tr = "<tr id = \"tr12\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"img/msticks.jpg\"><span class=\"pname\">msticks</span> </td>"+
					 "<td class=\"price\">$<span>15</span></td>"+
					 " <td><button onclick=\"btnOperate12('-')\">-</button><input id=\"num12\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate12('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count12\" value=\"15\" disabled></td>"+
					 "<td><button onclick=\"del_12()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					window.flag_12= 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 15;
					sum_price_12= 15;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }

function price_13(s13){
			  if(window.flag_13==0){
			  var tr = "<tr id = \"tr13\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"pizza.jpg\"><span class=\"pname\">pizza(<span id = \"s13\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>16</span></td>"+
					 " <td><button onclick=\"btnOperate13('-')\">-</button><input id=\"num13\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate13('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count13\" value=\"16\" disabled></td>"+
					 "<td><button onclick=\"del_13()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("s13").innerText = s13;
					window.flag_13 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 16;
					sum_price_13 = 16;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }

	function price_14(s14){
			  if(window.flag_14==0){
			  var tr = "<tr id = \"tr14\" data-pid=\"p001\">     <td><input type=\"checkbox\" class=\"pid\" checked=\"checked\"></td>"+
					 " <td> <img src=\"margeritapizza.jpg\"><span class=\"pname\">margeritapizza(<span id = \"s14\"></span>)</span> </td>"+
					 "<td class=\"price\">$<span>20</span></td>"+
					 " <td><button onclick=\"btnOperate14('-')\">-</button><input id=\"num14\" value=\"1\" disabled style=\"width:30px\">"+
                     "   <button onclick=\"btnOperate14('+')\">+</button></td>"+
					 "        <td class=\"count\"><input id=\"count14\" value=\"20\" disabled></td>"+
					 "<td><button onclick=\"del_14()\">Del</button></td>  </tr>" 
					$('table').append(tr);
					document.getElementById("s14").innerText = s14;
					window.flag_14 = 1;
					total += 1;
					document.getElementById("total").innerText = window.total;
					sum_price = Number(sum_price) + 20;
					sum_price_14 = 20;
					document.getElementById("sumPrice").innerText = sum_price;
				}	   
		  }
		  
		  function btnOperateOne(op){
			var value = document.getElementById("num1").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num1").value=value;
			document.getElementById("count1").value=document.getElementById("num1").value*28;
			sum_price_one = document.getElementById("count1").value;
			document.getElementById("sumPrice").innerText = Number(sum_price_one) + Number(window.sum_price_two) + Number(window.sum_price_three) + Number(window.sum_price_four);
			sum_price = document.getElementById("sumPrice").innerText;
		}
		  
		  
		  
		  function btnOperateTwo(op){
			var value = document.getElementById("num2").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num2").value=value;
			document.getElementById("count2").value=document.getElementById("num2").value*22;
			window.sum_price_two = document.getElementById("count2").value;
			document.getElementById("sumPrice").innerText = Number(sum_price_one) + Number(window.sum_price_two) + Number(window.sum_price_three) + Number(window.sum_price_four);
			sum_price = document.getElementById("sumPrice").innerText;
		}
		
		function btnOperateThree(op){
			var value = document.getElementById("num3").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num3").value=value;
			document.getElementById("count3").value=document.getElementById("num3").value*25;
			window.sum_price_three = document.getElementById("count3").value;
			document.getElementById("sumPrice").innerText = Number(sum_price_one) + Number(window.sum_price_two) + Number(window.sum_price_three) + Number(window.sum_price_four);
			sum_price = document.getElementById("sumPrice").innerText;
		}
		
		function btnOperateFour(op){
			var value = document.getElementById("num4").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num4").value=value;
			document.getElementById("count4").value=document.getElementById("num4").value*19;
			window.sum_price_four = document.getElementById("count4").value;
			document.getElementById("sumPrice").innerText = Number(sum_price_one) + Number(window.sum_price_two) + Number(window.sum_price_three) + Number(window.sum_price_four);
			sum_price = document.getElementById("sumPrice").innerText;
		}
		  
		function btnOperateFive(op){
			var value = document.getElementById("num5").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num5").value=value;
			document.getElementById("count5").value=document.getElementById("num5").value*6;
			window.sum_price_five = document.getElementById("count5").value;
			document.getElementById("sumPrice").innerText = sum_price_five;
			sum_price = document.getElementById("sumPrice").innerText;
		}
		
		function btnOperateSix(op){
			var value = document.getElementById("num6").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num6").value=value;
			document.getElementById("count6").value=document.getElementById("num6").value*4;
			window.sum_price_six = document.getElementById("count6").value;
			document.getElementById("sumPrice").innerText = sum_price_six;
			sum_price = document.getElementById("sumPrice").innerText;
		}  
		  
		  
		function btnOperate7(op){
			var value = document.getElementById("num7").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num7").value=value;
			document.getElementById("count7").value=document.getElementById("num7").value*16;
			window.sum_price_7 = document.getElementById("count7").value;
			document.getElementById("sumPrice").innerText = sum_price_7;
			sum_price = document.getElementById("sumPrice").innerText;
		} 


function btnOperate8(op){
			var value = document.getElementById("num8").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num8").value=value;
			document.getElementById("count8").value=document.getElementById("num8").value*15;
			window.sum_price_8 = document.getElementById("count8").value;
			document.getElementById("sumPrice").innerText = sum_price_8;
			sum_price = document.getElementById("sumPrice").innerText;
		} 


function btnOperate9(op){
			var value = document.getElementById("num9").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num9").value=value;
			document.getElementById("count9").value=document.getElementById("num9").value*5;
			window.sum_price_9 = document.getElementById("count9").value;
			document.getElementById("sumPrice").innerText = sum_price_9;
			sum_price = document.getElementById("sumPrice").innerText;
		}
 

function btnOperate10(op){
			var value = document.getElementById("num10").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num10").value=value;
			document.getElementById("count10").value=document.getElementById("num10").value*12;
			window.sum_price_10 = document.getElementById("count10").value;
			document.getElementById("sumPrice").innerText = sum_price_10;
			sum_price = document.getElementById("sumPrice").innerText;
		} 

function btnOperate11(op){
			var value = document.getElementById("num11").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num11").value=value;
			document.getElementById("count11").value=document.getElementById("num11").value*8;
			window.sum_price_11 = document.getElementById("count11").value;
			document.getElementById("sumPrice").innerText = sum_price_11;
			sum_price = document.getElementById("sumPrice").innerText;
		} 


function btnOperate12(op){
			var value = document.getElementById("num12").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num12").value=value;
			document.getElementById("count12").value=document.getElementById("num12").value*15;
			window.sum_price_12 = document.getElementById("count12").value;
			document.getElementById("sumPrice").innerText = sum_price_12;
			sum_price = document.getElementById("sumPrice").innerText;
		} 
		
		function btnOperate13(op){
			var value = document.getElementById("num13").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num13").value=value;
			document.getElementById("count13").value=document.getElementById("num13").value*16;
			window.sum_price_13 = document.getElementById("count13").value;
			document.getElementById("sumPrice").innerText = sum_price_13;
			sum_price = document.getElementById("sumPrice").innerText;
		} 	

		

function btnOperate14(op){
			var value = document.getElementById("num14").value;
			if(op == '+'){
				value =  Number(value) + 1;
				
			}else if(op == '-'){
				if(value <= 1){
					 value = 1;
				}else{
					 value = Number(value) - 1;
				}
			}
			document.getElementById("num14").value=value;
			document.getElementById("count14").value=document.getElementById("num14").value*20;
			window.sum_price_14 = document.getElementById("count14").value;
			document.getElementById("sumPrice").innerText = sum_price_14;
			sum_price = document.getElementById("sumPrice").innerText;
		} 
		
		
		
		
		
		
		
		
		






		
		  
		   $(document).ready(function(){
			   document.getElementById("total").innerText = window.total;
		   });
	
		  
		  
		  
		  
		  
		  function del_one() {
		 	
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_one);
			$("#tr1").remove();			<!--根据元素id删除元素-->
		  }
		  
		   function del_two() {
		 	
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_two);
			$("#tr2").remove();
		  }
		  
		   function del_three() {
		 	
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_three);	
			$("#tr3").remove();
		  }
		  
		   function del_four() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_four);
			$("#tr4").remove();
		  }
		  
		  function del_five() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_five);
			$("#tr5").remove();
		  }
		  
		  function del_six() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_six);
			$("#tr6").remove();
		  }
		  
		  
		  function del_7() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_7);
			$("#tr7").remove();
		  }
		  
		  function del_8() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_8);
			$("#tr8").remove();
		  }
		  
		  function del_9() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_9);
			$("#tr9").remove();
		  }
		  
		  function del_10() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_10);
			$("#tr10").remove();
		  }
		  
		  function del_11() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_11);
			$("#tr11").remove();
		  }
		  
		  function del_12() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_12);
			$("#tr12").remove();
		  }
		  
		  function del_13() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_13);
			$("#tr13").remove();
		  }
		  
		  function del_14() {
		 
			window.total -= 1;
			document.getElementById("total").innerText = window.total;
			document.getElementById("sumPrice").innerText = Number(document.getElementById("sumPrice").innerText) - Number(window.sum_price_14);
			$("#tr14").remove();
		  }
		  
		  
		  
		  
		  