// const NewDiv=document.querySelector('.new-div');
// const container= document.querySelector('.container');
// NewDiv.style.display='none';
// const weekdays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// let currentIndex = 0;
// const synth = window.speechSynthesis;
// document.addEventListener("DOMContentLoaded", function () {
//   speakWeekday(weekdays[currentIndex]);
// });

// document.getElementById("next-btn").addEventListener("click", function () {
//   if (currentIndex < 6) {
//     currentIndex = currentIndex + 1;
//     const weekday = weekdays[currentIndex];
//     //   showWeekday(weekdays[currentIndex]);
//     showWeekday(weekday);
//     speakWeekday(weekday);
//   }
//   else{
//     container.style.display='none'
//     NewDiv.style.display='block'
//   }
// });

// function showWeekday(weekday) {
//   const weekdayElement = document.querySelector(".weekday");
//   weekdayElement.textContent = weekday;
// }

// function speakWeekday(weekday) {
//   const utterance = new SpeechSynthesisUtterance(weekday);
//   synth.speak(utterance);
// }










// const NewDiv = document.querySelector('.new-div');
// const container = document.querySelector('.container');
// NewDiv.style.display = 'none';

// const weekdays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const mentorInstructions = [
//   "Let's learn the weekdays.",
//   "There are 7 days in a week.",
//   "",
//   "",
//   "",
//   "",
//   "",
//   "",
// ];

// let currentInstructionIndex = 0;
// let currentIndex = 0;
// const synth = window.speechSynthesis;

// document.addEventListener("DOMContentLoaded", function () {
//   speakInstructions(mentorInstructions[currentInstructionIndex]);
// });

// document.getElementById("next-btn").addEventListener("click", function () {
//   if (currentInstructionIndex < mentorInstructions.length - 1) {
//     currentInstructionIndex++;
//     speakInstructions(mentorInstructions[currentInstructionIndex]);
//   } else if (currentIndex < 6) {
//     currentIndex++;
//     const weekday = weekdays[currentIndex];
//     const instructionIndex = currentIndex + 1; // Index for the weekday-specific instruction
//     speakInstructions(`The ${ordinalSuffix(instructionIndex)} day of the week is ${weekday}. Now, repeat after me. ${weekday}.`);
//     showWeekday(weekday);
//     speakWeekday(weekday);
//   } else {
//     container.style.display = 'none'
//     NewDiv.style.display = 'block'
//   }
// });

// function showWeekday(weekday) {
//   const weekdayElement = document.querySelector(".weekday");
//   weekdayElement.textContent = weekday;
// }

// function speakWeekday(weekday) {
//   const utterance = new SpeechSynthesisUtterance(weekday);
//   synth.speak(utterance);
// }

// function speakInstructions(instruction) {
//   const utterance = new SpeechSynthesisUtterance(instruction);
//   synth.speak(utterance);
// }

// // Function to add ordinal suffix to numbers
// function ordinalSuffix(i) {
//   const j = i % 10, k = i % 100;
//   if (j === 1 && k !== 11) {
//     return i + "st";
//   }
//   if (j === 2 && k !== 12) {
//     return i + "nd";
//   }
//   if (j === 3 && k !== 13) {
//     return i + "rd";
//   }
//   return i + "th";
// }




















// const NewDiv = document.querySelector('.new-div');
// const container = document.querySelector('.container');
// NewDiv.style.display = 'none';

// const weekdays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const mentorInstructions = [
//   "Let's learn the weekdays.",
//   "There are 7 days in a week.",
//   "The first day of the week is Monday.",
//   "Now, repeat after me. Monday.",
//   "Well done! Let's continue.",
// ];

// let currentInstructionIndex = 0;
// let currentIndex = 0;
// const synth = window.speechSynthesis;

// document.addEventListener("DOMContentLoaded", function () {
//   speakInstructions(mentorInstructions[currentInstructionIndex]);
// });

// document.getElementById("next-btn").addEventListener("click", function () {
//   if (currentInstructionIndex < mentorInstructions.length - 1) {
//     currentInstructionIndex++;
//     speakInstructions(mentorInstructions[currentInstructionIndex]);
//   } else if (currentIndex < 6) {
//     currentIndex++;
//     const weekday = weekdays[currentIndex];
//     showWeekday(weekday);
//     speakWeekday(weekday);
//   } else {
//     container.style.display = 'none'
//     NewDiv.style.display = 'block'
//   }
// });

// function showWeekday(weekday) {
//   const weekdayElement = document.querySelector(".weekday");
//   weekdayElement.textContent = weekday;
// }

// function speakWeekday(weekday) {
//   const utterance = new SpeechSynthesisUtterance(weekday);
//   synth.speak(utterance);
// }

// function speakInstructions(instruction) {
//   const utterance = new SpeechSynthesisUtterance(instruction);
//   synth.speak(utterance);
// }

















// const NewDiv = document.querySelector('.new-div');
// const container = document.querySelector('.container');
// NewDiv.style.display = 'none';

// const weekdays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// const mentorInstructions = [
//   "Let's learn the weekdays.",
//   "There are 7 days in a week.",
//   "The first day of the week is Monday.",
//   "Now, repeat after me. Monday.",
//   "Well done! Let's continue.",
// ];

// let currentInstructionIndex = 0;
// let currentIndex = 0;
// const synth = window.speechSynthesis;

// document.addEventListener("DOMContentLoaded", function () {
//   // Speak all instructions for Monday
//   speakInstructions(mentorInstructions[0]); // "Let's learn the weekdays."
//   setTimeout(() => speakInstructions(mentorInstructions[1]), 2000); // Delayed to allow for pauses
//   setTimeout(() => speakInstructions(mentorInstructions[2]), 4000);
//   setTimeout(() => speakInstructions(mentorInstructions[3]), 6000);
//   setTimeout(() => {
//     speakInstructions(mentorInstructions[4]);
//     // Once all instructions for Monday are spoken, start with the weekday
//     const weekday = weekdays[currentIndex];
//     showWeekday(weekday);
//     speakWeekday(weekday);
//   }, 8000);
// });

// document.getElementById("next-btn").addEventListener("click", function () {
//   if (currentIndex < 6) {
//     currentIndex++;
//     const weekday = weekdays[currentIndex];
//     showWeekday(weekday);
//     speakWeekday(weekday);
//   } else {
//     container.style.display = 'none';
//     NewDiv.style.display = 'block';
//   }
// });

// function showWeekday(weekday) {
//   const weekdayElement = document.querySelector(".weekday");
//   weekdayElement.textContent = weekday;
// }

// function speakWeekday(weekday) {
//   const utterance = new SpeechSynthesisUtterance(weekday);
//   synth.speak(utterance);
// }

// function speakInstructions(instruction) {
//   const utterance = new SpeechSynthesisUtterance(instruction);
//   synth.speak(utterance);
// }














const NewDiv = document.querySelector('.new-div');
const container = document.querySelector('.container');
NewDiv.style.display = 'none';

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const mentorInstructions = [
  "Let's learn the weekdays.",
  "There are 7 days in a week.",
];

let currentInstructionIndex = 0;
let currentIndex = 0;
const synth = window.speechSynthesis;

document.addEventListener("DOMContentLoaded", function () {
  speakInstructions(mentorInstructions[currentInstructionIndex]); // Initial instructions
  setTimeout(() => {
    speakCurrentDayInstructions(); // Speaks the current weekday instructions
  }, 2000); // Delayed to allow for pauses
});

document.getElementById("next-btn").addEventListener("click", function () {
  if (currentIndex < 6) {
    currentIndex++;
    speakCurrentDayInstructions(); // Speaks the instructions for the current weekday
    showWeekday(weekdays[currentIndex]);
    speakWeekday(weekdays[currentIndex]);
  } else {
    container.style.display = 'none';
    NewDiv.style.display = 'block';
  }
});

function showWeekday(weekday) {
  const weekdayElement = document.querySelector(".weekday");
  weekdayElement.textContent = weekday;
}

function speakWeekday(weekday) {
  const utterance = new SpeechSynthesisUtterance(weekday);
  synth.speak(utterance);
}

function speakInstructions(instruction) {
  const utterance = new SpeechSynthesisUtterance(instruction);
  synth.speak(utterance);
}

function speakCurrentDayInstructions() {
  const dayIndex = currentIndex + 1;
  const dayName = weekdays[currentIndex];
  speakInstructions(`The ${ordinalSuffix(dayIndex)} day of the week is ${dayName}. Now, repeat after me. ${dayName}.`);
}

// Function to add ordinal suffix to numbers
function ordinalSuffix(i) {
  const j = i % 10, k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}


