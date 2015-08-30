var displayPanel, controlPanel, textBox, displayPanel_forcus,checkker,checkker_advice;

window.onload = appInit;

function appInit(){

	displayPanel = document.getElementById("displayPanel");
	controlPanel = document.getElementById("controlPanel");
	displayPanel_forcus = document.getElementById("displayPanel_forcus");
	checkker = document.getElementById("checkker");
	checkker_advice = document.getElementById("checkker_advice");
	textBox = document.getElementById("text_area");
	var applyButton = document.getElementById("applyButton");
	var clearButton = document.getElementById("clearButton");
	
	applyButton.addEventListener("click", applyButtonClick, false);
	clearButton.addEventListener("click", clearText, false);

	document.body.onclick = switchPanel;
	controlPanel.onclick=function(event){event.cancelBubble = true};
}

function applyButtonClick(event){
	var text = textBox.value;
	displayPanel.textContent = text;
	switchPanel();

	if (text.length > 1) displayPanel_forcus.style.color = "blue";
		else displayPanel_forcus.style.color = "black";

	if(text.match(/うるさく/)){
		var text_check = "禁止用語の検出";
		var text_advice = "興奮気味に"+"激しく";
		var text_hit = "うるさい";
		var text_checkans = "推奨される用語";
		
		checkker.textContent = text_check +">>"+ text_hit;
		checkker_advice.textContent = text_checkans+">>"+text_advice;


	}
}

function clearText(){
	displayPanel.textContent = "";
	textContent.value = "";
	displayPanel_forcus.style.color = "black";
}

function switchPanel(event){

	if (controlPanel.style.visibility == "hidden")
			controlPanel.style.visibility = "visible";
		else
			controlPanel.style.visibility = "hidden";
}

