console.log("Hello World from JavaScript");
//alert("Hello world, welcome to my bakery web page");
function addRow() {
    var name = document.getElementById('name').value;
    var desc = document.getElementById('desc').value;
    var price = document.getElementById('price').value;
    var image = document.getElementById('imageURL').value;
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(2);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    var img = document.createElement("img");

    img.src = image;


    cel1.innerHTML = name;
    cel2.innerHTML = desc;
    cel3.innerHTML = price;
    cel4.innerHTML = '<img src="' + image + '" alt="picture of ' + name + '">';

}