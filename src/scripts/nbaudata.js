function updateNumbers(data) {
  if (data) {
    document.getElementById("num-pledged").innerHTML = data.signups;
    document.getElementById("num-pledged-block").style.display = "block";
    document.getElementById("num-pledged").innerHTML = data.signups;
    document.getElementById("num-pledged-block").style.display = "block";
    document.getElementById("businesses").innerHTML = data.signups;
    document.getElementById("employees").innerHTML = data.employees;
    document.getElementById("businesses-pretext").innerHTML = "We are";
    document.getElementById("text-below-big").innerHTML = "Businesses";
    document.getElementById("over").innerHTML = "";
    document.getElementById("list-of-participants").innerHTML = data.list;
  }
}

window.onload = function () {
  fetch("https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/nbau")
    .then((response) => response.json())
    .then((data) => updateNumbers(data));
};

/*
Atlassian
Patagonia
Canva
Future Super
Intrepid
Who Gives A Crap
Huddle Insurance
Amber Electric
*/
