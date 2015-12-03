function id(id) {
  return document.getElementById(id);
}

function summarize() {
  var str = "Summary: " + id("firstname").value.trim() + " " +
                    id("lastname").value.trim() + "<br />" +
                    id("address1").value.trim() + "<br />";
  var field = id("address2").value;
  if (field !== null && field.trim() !== "") {
    str += field + "<br />";
  }
  str += id("city").value.trim() + ", " +
                 id("state").value.trim() + " " +
                 id("zipcode").value.trim() + "<br />";
  str += "Meal Type: ";
  var radios = document.getElementsByName("meal_type");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      str += radios[i].value + "<br />";
      break;
    }
  }
  str += "Meal: ";
  var checkboxes = document.getElementsByName("meal[]");
  var selected_meals = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected_meals.push(checkboxes[i].value);
    }
  }
  str += selected_meals + "<br />";
  str += "Date needed: " + id("date_needed").value + "<br />";
  str += "Quantity: " + id("quantity").value + "<br />";
  str += "Special Instructions: " + id("special_instructions").value.trim();

  id("summary").innerHTML = str;
  id("summary_wrapper").style.display = "block";
}

function reset_form() {
  id("summary").innerHTML = "";
  id("summary_wrapper").style.display = "none";
}
