/*
This Kata is a virtual functioning printer
*/

var mainPrinter = {
	cyan:100,
	magenta:100,
	yellow:100,
	black:100,
	inkOut:false,
	paperTrayCount:500,
	//Final Printout
	printPage:function(page){
		if(page.text != ""){
			switch (page.color){
				case "cyan":
					if((this.cyan- page.text.length) >= 0 && this.paperTrayCount > 0){
						this.cyan = this.cyan - page.text.length
						$("#output").append("<div class=\"printer-" + page.color + "\">" + "<br/>" + page.text + "<br/>" + "</div>");
						this.paperTrayCount -= 1;
						console.log(page.text);
						console.log("in\n");
						console.log(page.color);
					}
					else if(this.paperTrayCount == 0){
						alert('Insufficient Paper');
						inkOut = true;
						this.cyan = this.cyan + page.text.length
					}
					else{
						alert('Insufficient Ink Level');
						inkOut = true;
					};
					break;
				case "magenta":
					if((this.cyan- page.text.length) >= 0 && this.paperTrayCount > 0){
						this.magenta = this.magenta - page.text.length
						$("#output").append("<div class=\"printer-" + page.color + "\">" + "<br/>" + page.text + "<br/>" + "</div>");
						this.paperTrayCount -= 1;
						console.log(page.text);
						console.log("in\n");
						console.log(page.color);
					}
					else if(this.paperTrayCount == 0){
						alert('Insufficient Paper');
						inkOut = true;
						this.cyan = this.cyan + page.text.length
					}
					else{
						alert('Insufficient Ink Level');
						inkOut = true;
					};
					break;
				case "yellow":
					this.yellow = this.yellow - page.text.length
					if((this.cyan- page.text.length) >=0 && this.paperTrayCount > 0){
						$("#output").append("<div class=\"printer-" + page.color + "\">" + "<br/>" + page.text + "<br/>" + "</div>");
						this.paperTrayCount -= 1;
						console.log(page.text);
						console.log("in\n");
						console.log(page.color);
					}
					else if(this.paperTrayCount == 0){
						alert('Insufficient Paper');
						inkOut = true;
						this.cyan = this.cyan + page.text.length
					}
					else{
						alert('Insufficient Ink Level');
						inkOut = true;
					};
					break;
				case "black":
					this.black = this.black - page.text.length
					if((this.cyan- page.text.length) >=0 && this.paperTrayCount>0){
						$("#output").append("<div class=\"printer-" + page.color + "\">" + "<br/>" + page.text + "<br/>" + "</div>");
						this.paperTrayCount -= 1;
						console.log(page.text);
						console.log("in\n");
						console.log(page.color);
					}
					else if(this.paperTrayCount == 0){
						alert('Insufficient Paper');
						inkOut = true;
						this.cyan = this.cyan + page.text.length
					}
					else{
						alert('Insufficient Ink Level');
						inkOut = true;
					};
					break;
				}
			}
			else{
				alert("Please enter text to print");
			}

		}
	};

mainPrinter.displayPaperTray = function(){
	var paperDisplay = this.paperTrayCount + " Pages left.";
	alert(paperDisplay);
};

mainPrinter.displayInkLevels = function(){
	var leveDisplay = "Cyan: " + this.cyan + "\nMagenta: " + this.magenta + "\nYellow: " + this.yellow + "\nBlack: " + this.black;
	alert(leveDisplay);
};

mainPrinter.addPaper = function(){
	mainPrinter.paperTrayCount += 500;

	if (mainPrinter.paperTrayCount > 1000){
		alert("Tray Full");
		mainPrinter.paperTrayCount = 1000;
	}
	else {
		alert("Paper Added");
	}
}

mainPrinter.addColor = function(){
	mainPrinter.cyan = 100;
	mainPrinter.magenta = 100;
	mainPrinter.yellow = 100;
	alert("Color cartridge changed");
}

mainPrinter.addBlack = function(){
	mainPrinter.black = 100;
	alert("Black cartridge changed");
}

function Page(color, text){
	this.color=color;
	this.text=text;
};

//Displays the ink levels after the page is printed
Page.prototype.displayPotentialUsage = function(printer){
	var c = printer.cyan;
	var m = printer.magenta;
	var y = printer.yellow;
	var k = printer.black;
	console.log("This page will cause ink levels to drop to:");

	switch (this.color){
		case "cyan":
			console.log("\n Cyan:" + (c - this.text.length));
			console.log("\n Magenta:" + (m));
			console.log("\n Yellow:" + (y));
			console.log("\n Black:" + (k));
			break;
		case "magenta":
			console.log("\n Cyan:" + (c));
			console.log("\n Magenta:" + (m - this.text.length));
			console.log("\n Yellow:" + (y));
			console.log("\n Black:" + (k));
			break;
		case "yellow":
			console.log("\n Cyan:" + (c));
			console.log("\n Magenta:" + (m));
			console.log("\n Yellow:" + (y - this.text.length));
			console.log("\n Black:" + (k));
			break;
		case "black":
			console.log("\n Cyan:" + (c));
			console.log("\n Magenta:" + (m));
			console.log("\n Yellow:" + (y));
			console.log("\n Black:" + (k - this.text.length));	
			break;
		}
};

function printUserPage(){

	var userColor = document.getElementsByName("Color");

	function getUserColor(userColorIn){
		for (var i = 0, length = userColorIn.length; i < length; i++) {
	    	if (userColorIn[i].checked) {
	        	return userColorIn[i].value;

	        	break;

	    	}
		}
	}

	var userPage = new Page( getUserColor(userColor), document.getElementById("userText").value );

	userPage.displayPotentialUsage(mainPrinter);
	
	mainPrinter.printPage(userPage);

}
