function saveTextAsFile()
{
    var textToSave = document.getElementById("transliterateTextarea").value;
	
	textToSave += "\r\n";
	textToSave += "\r\n";
	var about_link = 'This Document Created Using - ';
	about_link += "\r\n";
	about_link = about_link + 'http://typingzz.com';
	textToSave = textToSave + about_link;
	
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
	var fileNameToSaveAs = "typingzz.txt";
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function copy() {
    let textarea = document.getElementById("transliterateTextarea");
    textarea.select();
    document.execCommand("copy");
  }