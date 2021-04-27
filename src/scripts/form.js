function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

window.onload = function () {
  const first = getQueryVariable("first");
  const last = getQueryVariable("last");
  const company = getQueryVariable("company");
  const position = getQueryVariable("position");
  const email = getQueryVariable("email");
  const phone = getQueryVariable("phone")
    ? getQueryVariable("phone")
    : getQueryVariable("mobile");
  if (first) {
    document.getElementById("first").value = first;
  }
  if (last) {
    document.getElementById("last").value = last;
  }
  if (company) {
    document.getElementById("company").value = company;
  }
  if (position) {
    document.getElementById("position").value = position;
  }
  if (email) {
    document.getElementById("email").value = email;
  }
  if (phone) {
    document.getElementById("phone").value = phone;
  }
};
