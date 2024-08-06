

// var utterance = null; // Variable to hold the current utterance

// function showContent(contentId) {
//   // Stop the current speech synthesis if it's ongoing
//   if (utterance) {
//     window.speechSynthesis.cancel();
//     utterance = null;
//   }

//   var contents = document.querySelectorAll(".content");
//   contents.forEach(function (content) {
//     if (content.id === contentId) {
//       content.classList.remove("hidden");
//       if (contentId === "content2") {
//         // Read out the text content under <p> tag
//         var textContent = document.querySelector("#content2 .text").textContent.trim();
//         utterance = speak(textContent);

//         // Read out the content of week divs
//         var weeks = document.querySelectorAll("#content2 .week-content > div");
//         weeks.forEach(function (week) {
//           utterance = speak(week.textContent.trim());
//         });
//       }
//     } else {
//       content.classList.add("hidden");
//     }
//   });
// }

// // Function to speak the given text
// function speak(text) {
//   var speech = new SpeechSynthesisUtterance();
//   speech.text = text;
//   window.speechSynthesis.speak(speech);
//   return speech; // Return the utterance object
// }













var utterance = null; // Variable to hold the current utterance

function showContent(contentId) {
  // Stop the current speech synthesis if it's ongoing
  if (utterance) {
    window.speechSynthesis.cancel();
    utterance = null;
  }

  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    if (content.id === contentId) {
      content.classList.remove("hidden");
      switch (contentId) {
        case "content1":
          // Read out the text content under the .mid-container first
          var midContainerText = document.querySelector("#content1 .mid-container").textContent.trim();
          utterance = speak(midContainerText);

          // Then read out the content of left-sub-container
          var leftSubContainer = document.querySelectorAll("#content1 .left-sub-container > div");
          leftSubContainer.forEach(function (month) {
            utterance = speak(month.textContent.trim());
          });

          // Finally, read out the content of right-sub-container
          var rightSubContainer = document.querySelectorAll("#content1 .right-sub-container > div");
          rightSubContainer.forEach(function (month) {
            utterance = speak(month.textContent.trim());
          });
          break;

        case "content2":
          // Read out the text content under the .text div first
          var textContent = document.querySelector("#content2 .text").textContent.trim();
          utterance = speak(textContent);

          // Then read out the content of week divs
          var weeks = document.querySelectorAll("#content2 .week-content > div");
          weeks.forEach(function (week) {
            utterance = speak(week.textContent.trim());
          });
          break;

        case "content3":
          // Read out the text content under the .text-content div first
          var textContent3 = document.querySelector("#content3 .text-content").textContent.trim();
          utterance = speak(textContent3);

          // Then read out the content of sub-container3
          var subContainer3 = document.querySelectorAll("#content3 .sub-container3 > div");
          subContainer3.forEach(function (day) {
            utterance = speak(day.textContent.trim());
          });
          break;

        default:
          break;
      }
    } else {
      content.classList.add("hidden");
    }
  });
}

// Function to speak the given text
function speak(text) {
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  window.speechSynthesis.speak(speech);
  return speech; // Return the utterance object
}
