var results = [
  {
    name: 'chinese food worker',
    file: 'ChineseFoodWorker.jpg'
  },
  {
    name: 'Property Brothers',
    file: 'PropertyBrothers.jpg'
  },
  {
    name: 'Ron Stoppable',
    file: 'RonStoppable.png'
  },
  {
    name: 'Sam',
    file: 'SamIAm.jpg'
  }
];

function id(id) {
  return document.getElementById(id);
}

function summarize() {
  var str = id("firstname").value.trim() + " " +
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

  id("spinner").style.display = "block";
  setTimeout(function () {
    id("spinner").style.display = "none";
    id("summary").innerHTML = str;
    id("summary_wrapper").style.display = "block";

    var random = Math.floor(Math.random() * results.length);
    id("hand_name").innerHTML = results[random].name;
    id("hand_image").alt = results[random].name;
    id("hand_image").src = 'images/hands/' + results[random].file;
  }, 1000);
}

function reset_form() {
  id("summary").innerHTML = "";
  id("summary_wrapper").style.display = "none";
}
