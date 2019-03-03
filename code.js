function matchTextwRegExp(inputRegPattern,inputRegFlags,inputText){
    var editor = CodeMirror.fromTextArea(document.getElementById("text"), {
        lineNumbers: true,
        styleSelectedText: true 
        });

    inputText = ""+inputText
    console.log(inputText.match(new RegExp(inputRegPattern,inputRegFlags)))

    var arr = inputText.match(new RegExp(inputRegPattern,inputRegFlags))
    document.getElementById('resultsOfMatch').value = ""
    
    for (i=0;i<arr.length;i++)
    {
        var reg = new RegExp(arr[i])
        console.log(arr[i])

        document.getElementById('resultsOfMatch').value += arr[i]+"\n"
        console.log(typeof(document.getElementById("text").value))
        console.log(reg)
        var match = inputText.match(reg)
        console.log(match)
        console.log(match.index)
        console.log(match.length)
        if (inputText.match(reg)){
            var lastMatchIndex;
            if (match[0].length==1) {
                lastMatchIndex = match.index+1
            }
            else {
                lastMatchIndex  = match.index+match[0].length
            }
            editor.markText({line: 0, ch: match.index}, {line:0 , ch: lastMatchIndex}, {className: "styled-background"});
        }
        
    }

        
    
}
function init(){
    var inputRegPattern = document.getElementById("regExpPattern").value
    var inputRegFlags = document.getElementById("regExpFlags").value
    var inputText = document.getElementById("text").value
    matchTextwRegExp(inputRegPattern,inputRegFlags,inputText)
}
