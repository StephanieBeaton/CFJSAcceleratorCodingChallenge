
// --------------------------------------------------------------------
// (2.) Make a simple html page that uses jQuery to manage Todos *
// It should have an input field.
// When the user enters text in the input field,
// ...show that input in the page.
// When an existing item is clicked, it should disappear from the page.
// In addition to pushing the answer to your Github account,
// ... please also setup a http://jsfiddle.net/ with the solution
// ... and enter the saved URL here so we can take a look.
// ---------------------------------------------------------------------

// register handlers when the DOM is available
// ... short hand for  $(document).ready(handler)
$(function() {

  // we are going to be dynamically adding list items
  // ... so need to delegate to "ul" tag
  $("#todos-ul").on("click", "li", function () {
    $(this).remove();
  });

  // When the form is submitted,
  // ... an anonymous function is called.
  // It is passed the event object.
  $("#save-form").on("submit", function (e) {
    //alert("inside input handler !!");

    // stop the form from being submitted
    e.preventDefault();

    // The :text selector picks the
    // ... <input> element whose type
    // ... attribute has a value of text.
    // ... and the .val() method gets the
    // ... value the user entered into it.
    // This value is stored in the variable
    // ... textOfToDo.
    var textOfToDo = $("input:text").val();

    // debugging
    // alert(textOfToDo);

    // create a "li" element
    var $newLi = $("<li>" + textOfToDo + "</li>");

    // attach "li" element to bottom of "ul"
    //$("#todos-ul").appendChild($newLi);   <-- doesn't work

    var $ul = $("#todos-ul")
    $newLi.appendTo($ul);

    // This doen't work. Don't know why
    // $newLi.val(textOfToDo);

    // clear out entry field
    $("input:text").val("");
  });
});
