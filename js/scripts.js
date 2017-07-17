
// pobiera referencję do wszystkich elementów
var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
  // drukujemy do konsoli wartość właściwości innterText dla każdego
  // przycisku z osobna
  alert(buttons[i].innerText);
}