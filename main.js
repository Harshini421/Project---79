menu_list_array=["Chicken Tandoori Pizza",
                 "Veg Supreme Pizza",
                 "Deluxe Veggise Pizza",
                 "Panner Tikka Pizza",
                 "Veg Extravaganza Pizza"];
function getmenu(){
var htmldata;
htmldata = "<ol class = 'menulist'>"
menu_list_array.sort();
for(var i = 0;i< menu_list_array.length; i++){
    htmldata = htmldata+'<li>'+menu_list_array[i]+'</li>'
}
htmldata = htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = menu_list_array;
}
function additem(){
    var htmldata;
    var item = document.getElementById("add item ");
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class = 'cards'>"
    for (i =i < menu_list_array.length; i++;) {
        htmldata= htmldata + "<div class = 'card'>" + '<img scr = "pizzaImg.png"/>' + menu_list_array + "</div>"
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addmenu").innerHTML = htmldata;
}