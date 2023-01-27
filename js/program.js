const fillMockPerson = async () => {
  const response = await fetch("https://randomuser.me/api/?format=json");
  const data = await response.json();
  console.log(data);
  document.getElementById("photo").src=data.results[0].picture.large
  document.getElementById(
    "name"
  ).innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
  document.getElementById("email").innerHTML=data.results[0].email;
  document.getElementById(
    "website"
  ).innerHTML = `www.${data.results[0].name.first}${data.results[0].name.last}.com`;
  document.getElementById("phoneNumber").innerHTML=`+${data.results[0].phone}`;

};

fillMockPerson();