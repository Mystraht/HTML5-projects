define([],
function () {
	parsing = function () {

	}

	parsing.prototype.getElementByValue = function (value) {
		var btns = document.getElementsByTagName('input');
		for(i=0;i<btns.length;i++)
		{
		    if(btns[i].value==value)
		    {
		       return btns[i];
		    }
		}
	}

	parsing.prototype.getElementByClass = function (string, value, occurence) {
		var spanName = string.getElementsByTagName('span');
		var index = 1
		for(i=0;i<spanName.length;i++)
		{
		    if(spanName[i].className==value)
		    {
		    	spanName[i].onclick = 'alert("test")';
		    	if (index >= occurence) {
		    		return spanName[i];
		    	} else {
		    		index++;
		    	}
		    }
		}
	}

	parsing.prototype.getElementByTr = function (string, occurence) {
		var trName = string.getElementsByTagName('tr');
		var index = 1
		for(i=0;i<trName.length;i++) {
	    	if (index >= occurence) {
	    		return trName[i];
	    	} else {
	    		index++;
	    	}
		}
	}

	parsing.prototype.getString = function (content, stringBeforeValue, charToStop, occurence) {
		var index
		index = content.search(stringBeforeValue);

	}
	
	return new parsing();
});