/*
This Kata is a virtual functioning printer
*/

var mainPrinter = {
	cyan:100,
	magenta:100,
	yellow:100,
	black:100,
	printPage:function(page){
		switch (page.color){
			case "cyan":
				this.cyan = this.cyan - page.text.length;
				break;
			case "magenta":
				this.magenta = this.magenta - page.text.length();
				break;
			case "yellow":
				this.yellow = this.yellow - page.text.length();
				break;
			case "black":
				this.black = this.black - page.text.length();
				break;
			}

		//Final Printout
		$("#output").append(page.text + "<br/>");
		alert(page.text);
		console.log(page.text);
		console.log("in\n");
		console.log(page.color);
	}
};

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
			console.log("\n Magenta:" + (m - this.text.length()));
			console.log("\n Yellow:" + (y));
			console.log("\n Black:" + (k));
			break;
		case "yellow":
			console.log("\n Cyan:" + (c));
			console.log("\n Magenta:" + (m));
			console.log("\n Yellow:" + (y - this.text.length()));
			console.log("\n Black:" + (k));
			break;
		case "black":
			console.log("\n Cyan:" + (c));
			console.log("\n Magenta:" + (m));
			console.log("\n Yellow:" + (y));
			console.log("\n Black:" + (k - this.text.length()));	
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

