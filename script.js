function showHideRecipe(id) {
  var r = document.getElementById(id);
  if (r.style.display === "block") {
    r.style.display = "none";
  } else {
    r.style.display = "block";
  }
}