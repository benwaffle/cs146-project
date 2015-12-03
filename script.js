function summarize() {
  "use strict";
  var i, str, field, radios, checkboxes, selected_meals;
  str = "Summary: " + document.getElementById("firstname").value.trim() + " " +
                    document.getElementById("lastname").value.trim() + "<br />" +
                    document.getElementById("address1").value.trim() + "<br />";
  field = document.getElementById("address2").value;
  if (field !== null && field.trim() !== "") {
    str += field + "<br />";
  }
  str += document.getElementById("city").value.trim() + ", " +
                 document.getElementById("state").value.trim() + " " +
                 document.getElementById("zipcode").value.trim() + "<br />";
  str += "Meal Type: ";
  radios = document.getElementsByName("meal_type");
  for (i = 0; i < radios.length; i = i + 1) {
    if (radios[i].checked) {
      str += radios[i].value + "<br />";
      break;
    }
  }
  str += "Meal: ";
  checkboxes = document.getElementsByName("meal[]");
  selected_meals = [];
  for (i = 0; i < checkboxes.length; i = i + 1) {
    if (checkboxes[i].checked) {
      selected_meals.push(checkboxes[i].value);
    }
  }
  str += selected_meals + "<br />";
  str += "Date needed: " + document.getElementById("date_needed").value + "<br />";
  str += "Quantity: " + document.getElementById("quantity").value + "<br />";
  str += "Special Instructions: " +       document.getElementById("special_instructions").value.trim();
  document.getElementById("summary").innerHTML = str;
  document.getElementById("summary_wrapper").style.display = "block";
}

function reset_form() {
  "use strict";
  document.getElementById("summary").innerHTML = "";
  document.getElementById("summary_wrapper").style.display = "none";
}