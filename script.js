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
    name: 'Brian Borowski',
    file: 'bborowski.jpeg'
  },
  {
    name: 'Pearl',
    file: 'Pearl.jpg'
  },
  {
    name: 'Brandon Flowers',
    file: 'BrandonFlowers.jpg'
  },
  {
    name: 'Donald Trump',
    file: 'DonaldTrump.jpg'
  },
  {
    name: 'Sam',
    file: 'SamIAm.jpg'
  }
];

// because we can use jQuery
// just pass any CSS selector
function $(selector) {
    var items = document.querySelectorAll(selector);
    if (items.length == 1)
      return items[0];
    if (items.length == 0)
      return null;
    return items;
}

function summarize() {
  var str = $("#firstname").value.trim() + " " +
            $("#lastname").value.trim() + "<br>" +
            $("#address1").value.trim() + "<br>";
  var field = $("#address2").value;
  if (field !== null && field.trim() !== "") {
    str += field + "<br>";
  }
  str += $("#city").value.trim() + ", " +
         $("#state").value.trim() + " " +
         $("#zipcode").value.trim() + "<br>";
  str += "Meal Type: ";
  var radios = $("[name='meal_type']");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      str += radios[i].value + "<br>";
      break;
    }
  }
  str += "Meal: ";
  var checkboxes = $("[name='meal[]']");
  var selected_meals = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected_meals.push(checkboxes[i].value);
    }
  }
  str += selected_meals + "<br>";
  str += "Date needed: " + $("#date_needed").value + "<br>";
  str += "Quantity: " + $("#quantity").value + "<br>";
  str += "Special Instructions: " + $("#special_instructions").value.trim();

  $("#spinner").style.display = "block";
  setTimeout(function () {
    $("#spinner").style.display = "none";
    $("#summary").innerHTML = str;
    $("#summary_wrapper").style.display = "block";

    var random = Math.floor(Math.random() * results.length);
    $("#hand_name").innerHTML = results[random].name;
    $("#hand_image").alt = results[random].name;
    $("#hand_image").src = 'images/hands/' + results[random].file;
  }, 1000);
}

function reset_form() {
  $("#summary").innerHTML = "";
  $("#summary_wrapper").style.display = "none";
}
