// Names are saved in an array for later use
var savedNames = [];

function checkLovePercentage() {
  var name = document.getElementById('name').value;
  var lname = document.getElementById('lname').value;

  if (name === "" || lname === "") {
    alert('Please enter both names before calculating.');
    return;
  }

  var lovePercentage = Math.floor(Math.random() * 100);
  document.getElementById('lovevalue').value = lovePercentage + "%";

  // Save the names
  savedNames.push({ name, lname });

  // Change the background image every time the love percentage is calculated
  changeBackgroundImage();
}

function changeBackgroundImage() {
  // Array of background images
  var backgroundImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  // Get a random index for the background image
  var randomIndex = Math.floor(Math.random() * backgroundImages.length);

  // Change the background image
  document.body.style.backgroundImage = 'url(' + backgroundImages[randomIndex] + ')';
}

function saveNamesToFile() {
  if (savedNames.length === 0) {
    alert('No names to save.');
    return;
  }

  var data = "Saved Names:\n\n";
  savedNames.forEach(function (names, index) {
    data += "Entry " + (index + 1) + ":\n";
    data += "Your Name: " + names.name + "\nLove Name: " + names.lname + "\n\n";
  });

  var blob = new Blob([data], { type: 'text/plain' });
  var url = URL.createObjectURL(blob);

  var a = document.createElement('a');
  a.href = url;
  a.download = 'saved_names.txt';
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
