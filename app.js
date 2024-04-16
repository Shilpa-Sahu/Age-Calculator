let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; 
let result = document.getElementById("result");


   //Button
function calculateAge(){
	let birthDate = new Date(userInput.value);
	  // For Your BirthDate
	let d1 = birthDate.getDate();
	let m1 = birthDate.getMonth() + 1;
	let y1 = birthDate.getFullYear();
    
	// For Current Date

	let Today = new Date();

	let d2 = Today.getDate();
	let m2 = Today.getMonth() + 1;
	let y2 = Today.getFullYear();


	// For difference Year, month, date

	let d3,m3, y3;

	y3 = y2 - y1;

	if(m2 >= m1){

        m3 = m2 - m1;
	}else{
		y3--;
		m3 = 12 + m2 - m1;
	}

	if(d2 >= d1){
        d3 = d2 - d1;
	}else{
          m3--;
		  d3 = getDaysInMonth(y1, m1) + d2 - d1;
	}
	

	if(m3 < 0){

		m3 = 11;
		y3--;
	}
	result.innerHTML= `Your age is: ${y3} years, ${m3} months  ${d3} days!` ;

	function getDaysInMonth(year, month){

		return new Date(year, month, 0).getDate();



	}
	




}