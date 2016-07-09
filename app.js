// alert("Hello")
// var typed_stuff = prompt ("Enter your name")
// if(typed_stuff == "Mr.Lewis"){
// alert("That's a dumb name.")
// } else {
// alert("that's a nice name")
// }
var field = document.getElementById("search_field")
var button = document.getElementById("search_button")
field.value = "search Here"
var search = function(search_term){
  alert(search_term)
}

button.addEventListener('click', function(){
  search(field.value)
})
