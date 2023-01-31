const specLetters = ["á", "é", "í", "ó", "ú", "ä", "ë", "ï", "ö", "ü"];

const fillMockPerson = async () => {
  const response = await fetch("https://randomuser.me/api/?format=json");
  const data = await response.json();  
  document.getElementById("photo").src = data.results[0].picture.large;
  document.getElementById(
    "name"
  ).innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
  document.getElementById("email").innerHTML = data.results[0].email;
  document.getElementById(
    "website"
  ).innerHTML = `www.${data.results[0].name.first}${data.results[0].name.last}.com`;
  document.getElementById(
    "phoneNumber"
  ).innerHTML = `+${data.results[0].phone}`;
};

const changeProgressBars = () => {
  let progressBars = document.getElementsByClassName("progress-bar");
  for (let i = 0; i < progressBars.length; i++) {
    let newValue = (Math.floor(Math.random() * 41) + 60).toString();
    progressBars[i].setAttribute("aria-valuenow", newValue);
    progressBars[i].style = `width: ${newValue}%`;
  }
};

document.getElementById("nuevoUsuario").addEventListener("click", function () {
  changeProgressBars();
  fillMockPerson();
});

fillMockPerson();