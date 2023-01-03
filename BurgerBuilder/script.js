

let button = document.getElementById('burger-builder');
let image = document.getElementById('burger-container');

button.addEventListener('click', function(event) {
  
  let buttonId = event.target.id;

  // CHECK INA BTN OWRINA L IMAGE DYALO

  switch (buttonId) {
    case 'Upper_Bun':
      document.getElementById('Upper_Bunpic').style.display = 'flex';
      break;
    case 'Lettuce':
      document.getElementById('Lettuce_pic').style.display = 'flex';
      break;
    case 'Meat':
      document.getElementById('Meat_pic').style.display = 'flex';
    case 'Pickles':
      document.getElementById('Pickles_pic').style.display = 'flex';
      break;
    case 'Tomato':
      document.getElementById('Tomato_pic').style.display = 'flex';
      break;
    case 'Chicken':
      document.getElementById('Chicken_pic').style.display = 'flex';
      break;
    case 'Cheese':
      document.getElementById('Cheese_pic').style.display = 'flex';
    break;
    case 'Onion':
      document.getElementById('Onion_pic').style.display = 'flex';
    break;
     case 'Lower_Bun':
      document.getElementById('Lower_Bun_pic').style.display = 'flex';
    break;
    case 'reset':
      let images= document.querySelectorAll('img');
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
  }}
});






