function includeHTML() 
{
    menu = document.getElementById("menu");

    var htmlCode = '<table width="100%">';
    htmlCode += '<tr><td><a href="./Index.html">Home</a></td>';
    htmlCode += '<td><a href="./About BT.html">About BT</a></td>';
    htmlCode += '<td><a href="./Contact.html">Contact The Bunny</a></td></tr>';
    htmlCode += '</table>';

    menu.innerHTML = htmlCode;
}

function ChangeHeader() {
    document.getElementById("heading").innerText = "New Title";
}