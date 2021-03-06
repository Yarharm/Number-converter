
// Varialbes for the types of the data

var fromBin = false, fromDec = false, fromOct = false, fromHex = false;
var toBin = false, toDec = false, toOct = false, toHex = false;

// If user wants to convert from Binary -->
function fromBinClicked(btn){colorFrom(1); fromBin = true, fromDec = false, fromOct = false, fromHex = false;}

// If user wants to convert from Decimal -->
function fromDecClicked(){colorFrom(2); fromDec = true, fromBin = false, fromOct = false, fromHex = false;}

// If user want to convert from Octal -->
function fromOctClicked(){colorFrom(3); fromOct = true, fromBin =false, fromDec = false, fromHex = false;}
// if user want to convert from Hex -->
function fromHexClicked(){colorFrom(4); fromHex = true, fromBin =false, fromDec = false, fromOct = false;}

// If user wants to convert to Binary -->
function toBinClicked(){colorTo(1); toBin = true, toDec = false; toOct = false, toHex = false;}

// If user wants to convert to Decimal -->
function toDecClicked(){colorTo(2); toDec = true, toBin = false; toOct = false, toHex = false;}

// If user wants to convert to Octal -->
function toOctClicked(){colorTo(3); toOct = true, toDec = false; toBin = false, toHex = false;}

// If user wants to convert to Hex -->
function toHexClicked(){colorTo(4); toHex = true, toDec = false; toBin = false, toOct = false;}

// Convert function for the main button -->
function convert(){
	var input = parseFloat(document.getElementById('input').value, 10);
	var hexInput = document.getElementById('input').value;
	
	// Execution from Binary to Decimal -->
	if(fromBin == true && toDec == true){
		document.getElementById('output').value = binToDec(input);
	}
	// Executiom from Binary to Octal -->
	else if(fromBin == true && toOct == true){ 
		document.getElementById('output').value = decToOct(binToDec(input));
	}
	// Executiom from Binary to Hex -->
	else if(fromBin == true && toHex == true){ 
		document.getElementById('output').value = decToHex(binToDec(input));
	}
	// Executiom from Decimal to Binary -->
	else if(fromDec == true && toBin == true){
		document.getElementById('output').value = decToBin(input);
	}
	// Executiom from Decimal to Octal -->
	else if(fromDec == true && toOct == true){
		document.getElementById('output').value = decToOct(input);
	}
	// Executiom from Decimal to Hex -->
	else if(fromDec == true && toHex == true){
		document.getElementById('output').value = decToHex(input);
	}
	// Execution from Octal to Decimal -->
	else if(fromOct == true && toDec == true){
		document.getElementById('output').value = octToDec(input);
	}
	// Execution from Octal to Binary -->
	else if(fromOct == true && toBin == true){
		document.getElementById('output').value = decToBin(octToDec(input));
	}
	// Execution from Octal to Hex -->
	else if(fromOct == true && toHex == true){
		document.getElementById('output').value = decToHex(octToDec(input));
	}
	// Execution from Hex to Dec -->
	else if(fromHex == true && toDec == true){
		document.getElementById('output').value = hexToDec(hexInput);
	}
	// Execution from Hex to Binary -->
	else if(fromHex == true && toBin == true){
		document.getElementById('output').value = decToBin(hexToDec(hexInput));
	}
	// Execution from Hex to Octal -->
	else if(fromHex == true && toOct == true){
		document.getElementById('output').value = decToOct(hexToDec(hexInput));
	}
	// Execution for other cases-->
	else{
		if(fromHex == true && toHex == true)
			document.getElementById('output').value = hexInput;
		else
			document.getElementById('output').value = input;
	}
}

// Function that converts from Dec to Hex -->
function decToHex(num){
	var result = "";
	var temp;
	var hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	while(num > 0){
	temp = num % 16;
	result = hexValues[temp] + result;
	num = Math.floor(num / 16);
	}
	return result;
}

// Function that converts from the Hex to Dec -->
function hexToDec(num){
	var result = 0;
	var letter;
	for(var i = 0; i < num.length; i++){
		letter = num.charAt(num.length - 1 - i);
		switch(letter){
		case 'A':
			result += 10 * Math.pow(16,i); break;
		case 'B':
			result += 11 * Math.pow(16,i); break;
		case 'C':
			result += 12 * Math.pow(16,i); break;
		case 'D':
			result += 13 * Math.pow(16,i); break;
		case 'E':
			result += 14 * Math.pow(16,i); break;
		case 'F':
			result += 15 * Math.pow(16,i); break;
		default:
			result += parseFloat(letter, 10) * Math.pow(16, i);
		}
	}
	return result;	
}

// Function that converts from the Octal to Decimal -->
function octToDec(num){
	var i = 0;
	var result = 0;
	
	while(num > 0){
	<!-- If num is not a binary value -->
		if(num % 10 > 7){ result = -1; break;}
	
		else{
		result += num % 10 * Math.pow(8,i);
		i++;
		num = Math.floor(num / 10);
		}
	}
	return result;
}

// Function that converts from the Decimal to Octal -->
function decToOct(num){
	var result;
	if(num == 0){
		result = 0;
	}
	else{
	result = num % 8 + 10 * decToOct(Math.floor(num / 8));
	}
	if(result == -1)
		return -1;
	else 
		return result;
}

// Function that converts from the Binary to Decimal -->
function binToDec(num){
	var i = 0;
	var result = 0;
	
	while(num > 0){
	<!-- If num is not a binary value -->
		if(num % 10 > 1){ result = -1; break;}
		
		result += num % 2 * Math.pow(2,i);
		i++;
		num = Math.floor(num / 10);
	}
	return result;
}

// Function that converts from the Decimal to Binary-->
function decToBin(num){
	var result;
	if(num == 0){
		result = 0;
	}
	else{
	result = num % 2 + 10 * decToBin(Math.floor(num / 2));
	}
	return result;
}

// Ceep color of the buttons when clicked -->
function colorFrom(num){
	switch(num){
		case 1:
			document.getElementById('fromBin').style.backgroundColor = "#E6E4EB"; document.getElementById('fromBin').style.color = "#010101";
			document.getElementById('fromDec').style.backgroundColor = "#515151"; document.getElementById('fromDec').style.color = "#FFFFFF";
			document.getElementById('fromOct').style.backgroundColor = "#515151"; document.getElementById('fromOct').style.color = "#FFFFFF";
			document.getElementById('fromHex').style.backgroundColor = "#515151"; document.getElementById('fromHex').style.color = "#FFFFFF"; break;
		case 2:
			document.getElementById('fromBin').style.backgroundColor = "#515151"; document.getElementById('fromBin').style.color = "#FFFFFF";
			document.getElementById('fromDec').style.backgroundColor = "#E6E4EB"; document.getElementById('fromDec').style.color = "#010101";
			document.getElementById('fromOct').style.backgroundColor = "#515151"; document.getElementById('fromOct').style.color = "#FFFFFF";
			document.getElementById('fromHex').style.backgroundColor = "#515151"; document.getElementById('fromHex').style.color = "#FFFFFF"; break;
		case 3:
			document.getElementById('fromBin').style.backgroundColor = "#515151"; document.getElementById('fromBin').style.color = "#FFFFFF";
			document.getElementById('fromDec').style.backgroundColor = "#515151"; document.getElementById('fromDec').style.color = "#FFFFFF";
			document.getElementById('fromOct').style.backgroundColor = "#E6E4EB"; document.getElementById('fromOct').style.color = "#010101";
			document.getElementById('fromHex').style.backgroundColor = "#515151"; document.getElementById('fromHex').style.color = "#FFFFFF"; break;
		case 4:
			document.getElementById('fromBin').style.backgroundColor = "#515151"; document.getElementById('fromBin').style.color = "#FFFFFF";
			document.getElementById('fromDec').style.backgroundColor = "#515151"; document.getElementById('fromDec').style.color = "#FFFFFF";
			document.getElementById('fromOct').style.backgroundColor = "#515151"; document.getElementById('fromOct').style.color = "#FFFFFF";
			document.getElementById('fromHex').style.backgroundColor = "#E6E4EB"; document.getElementById('fromHex').style.color = "#010101"; break;
	}
	
}
function colorTo(num){
	switch(num){
		case 1:
			document.getElementById('toBin').style.backgroundColor = "#E6E4EB"; document.getElementById('toBin').style.color = "#010101";
			document.getElementById('toDec').style.backgroundColor = "#515151"; document.getElementById('toDec').style.color = "#FFFFFF";
			document.getElementById('toOct').style.backgroundColor = "#515151"; document.getElementById('toOct').style.color = "#FFFFFF";
			document.getElementById('toHex').style.backgroundColor = "#515151"; document.getElementById('fromHex').style.color = "#FFFFFF"; break;
		case 2:
			document.getElementById('toBin').style.backgroundColor = "#515151"; document.getElementById('toBin').style.color = "#FFFFFF";
			document.getElementById('toDec').style.backgroundColor = "#E6E4EB"; document.getElementById('toDec').style.color = "#010101";
			document.getElementById('toOct').style.backgroundColor = "#515151"; document.getElementById('toOct').style.color = "#FFFFFF";
			document.getElementById('toHex').style.backgroundColor = "#515151"; document.getElementById('toHex').style.color = "#FFFFFF"; break;
		case 3:
			document.getElementById('toBin').style.backgroundColor = "#515151"; document.getElementById('toBin').style.color = "#FFFFFF";
			document.getElementById('toDec').style.backgroundColor = "#515151"; document.getElementById('toDec').style.color = "#FFFFFF";
			document.getElementById('toOct').style.backgroundColor = "#E6E4EB"; document.getElementById('toOct').style.color = "#010101";
			document.getElementById('toHex').style.backgroundColor = "#515151"; document.getElementById('toHex').style.color = "#FFFFFF"; break;
		case 4:
			document.getElementById('toBin').style.backgroundColor = "#515151"; document.getElementById('toBin').style.color = "#FFFFFF";
			document.getElementById('toDec').style.backgroundColor = "#515151"; document.getElementById('toDec').style.color = "#FFFFFF";
			document.getElementById('toOct').style.backgroundColor = "#515151"; document.getElementById('toOct').style.color = "#FFFFFF";
			document.getElementById('toHex').style.backgroundColor = "#E6E4EB"; document.getElementById('toHex').style.color = "#010101"; break;
	}
}