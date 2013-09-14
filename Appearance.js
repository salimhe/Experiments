/*Copyleft(2013) Salim Said Hemed, File Contains numerous Appearance hacks for HTML5 including 
 -Fullscreen API
 -Drag and Drop
 */
//Begin FullScreen
function fullScreen(element){
if (element.requestFullScreen){
element.requestFullScreen()
}
else if(element.mozRequestFullScreen){
element.mozRequestFullScreen()
}
else if(element.webkitRequestFullScreen){
element.webkitRequestFullScreen()
}
}
//End Full Screen
