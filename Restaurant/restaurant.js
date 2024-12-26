$(document).ready(function () {
  // Alert on page load
  alert("Welcome to Our Restaurant!");

  // Change background color on page load
  $("body").css("background-color", "#f0f8ff");

  // Change styling of a specific paragraph
  $("#our-story").css({
    "font-weight": "bold",
    color: "navy",
  });

  // Fade out clicked object (only the specific element clicked)
  $("body").on("click", "h1, .subheading, p", function () {
    $(this).fadeOut();
  });

  // Fade out the image when clicked
  $("#foodImage").on("click", function () {
    $(this).fadeOut(); // 'this' refers to the clicked image
  });

  // Create dropdown menu with accordion effect
  $(".subheading").hover(function () {
    $(this).next(".dropdown").slideToggle("fast");
  });

  // Dropdown menu options
  $(".dropdown").html(`
      <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Desserts</li>
          <li>Drinks</li>
      </ul>
  `);

  // Chained effect to slide elements around
  function slideElements() {
    $("h1, .subheading, p").slideUp(500).slideDown(500);
    $("body").css("background-color", getRandomColor());
  }

  setInterval(slideElements, 3000);

  // Fade in and out images
  $("#fadeInButton").click(function () {
    $("#foodImage").fadeIn(3000).fadeOut(3000);
  });

  // Stop animation
  $("#stopButton").click(function () {
    $("h1, .subheading, p").stop(true, true);
  });

  // Example of chained jQuery effects on buttons
  $("button").css("color", "blue").slideDown(500).slideUp(500);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
