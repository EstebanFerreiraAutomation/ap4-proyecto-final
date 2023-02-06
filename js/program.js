const fillMockPerson = async () => {
  const response = await fetch("https://randomuser.me/api/?format=json");
  const data = await response.json();
  const person = data.results[0];
  document.getElementById("photo").src = person.picture.large;
  document.getElementById(
    "name"
  ).innerHTML = `${person.name.first} ${person.name.last}`;
  document.getElementById("email").innerHTML = person.email;
  const mockWebsite = removeNonAscii(`${person.name.first}${person.name.last}`);
  document.getElementById("website").innerHTML = `www.${mockWebsite}.com`;
  document.getElementById("phoneNumber").innerHTML = `+${person.phone}`;
};

const changeProgressBars = () => {
  let progressBars = document.getElementsByClassName("progress-bar");
  for (let i = 0; i < progressBars.length; i++) {
    let newValue = (Math.floor(Math.random() * 41) + 60).toString();
    progressBars[i].setAttribute("aria-valuenow", newValue);
    progressBars[i].style = `width: ${newValue}%`;
  }
};

const removeNonAscii = (str) => {
  let combining = /[\u0300-\u036F]/g;
  return str.normalize("NFKD").replace(combining, "");
};

document.getElementById("nuevoUsuario").addEventListener("click", function () {
  changeProgressBars();
  fillMockPerson();
});

fillMockPerson();
