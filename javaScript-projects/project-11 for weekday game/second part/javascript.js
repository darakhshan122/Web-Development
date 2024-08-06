
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentIndex = 0;
let isCorrectSelection = false; // Variable to track correct selection

// Array containing URLs of images
const imageArray = [
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',

  // Add more image URLs as needed
];


function playWrongSound() {
    const audio = document.getElementById('audio');
    audio.play();
    console.log("wrong");
  }
  

  function playCorrectSound() {
    const audio = document.getElementById('audio2');
    audio.play();
    console.log("correct");
  }

// Function to change the displayed weekday
function changeWeekday() {
  const weekdayDiv = document.getElementById('weekday');
  weekdayDiv.textContent = weekdays[currentIndex];
}

// Function to generate and display random pictures
function generateRandomPics() {
  const randomPicDivs = document.querySelectorAll('.random-pic');
  randomPicDivs.forEach(div => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImage = imageArray[randomIndex];
    div.style.backgroundImage = `url(${randomImage})`;
  });
}



// // Function to shuffle an array
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   // Function to generate and display random pictures
//   function generateRandomPics() {
//     const weekdayDiv = document.getElementById('weekday');
//     const randomPicDivs = document.querySelectorAll('.random-pic');
//     const shuffledDivs = [weekdayDiv, ...shuffle(Array.from(randomPicDivs))]; // Shuffle divs
    
//     // Append shuffled divs to parent of random pic divs
//     randomPicDivs.forEach((div, index) => {
//       div.parentNode.insertBefore(shuffledDivs[index], div.nextSibling);
//     });
//   }
  




function handleWeekdayClick(event) {
    const clickedDiv = event.target;
    const weekdayDiv = document.getElementById('weekday');
    
    console.log('Clicked Div ID:', clickedDiv.id);
    console.log('Weekday Div ID:', weekdayDiv.id);
  
    if (clickedDiv.id === weekdayDiv.id) {
      isCorrectSelection = true;
      console.log('Correct Selection');
      playCorrectSound();
    } else {
      isCorrectSelection = false;
      playWrongSound();
      console.log('Wrong Selection');
    }
  }

  // Add click event listeners to all divs with the class "random-pic"
const randomPicDivs = document.querySelectorAll('.random-pic');
randomPicDivs.forEach(div => {
  div.addEventListener('click', handleWeekdayClick);
});

  

// Function to handle the "Next" button click
document.getElementById('next-btn').addEventListener('click', function() {
  if (isCorrectSelection) {
    currentIndex = (currentIndex + 1) % weekdays.length;
    changeWeekday();
    generateRandomPics();
    isCorrectSelection = false; // Reset selection for next page
  } else {
    console.log('Please select the correct weekday before proceeding.');
  }
});

// Add click event listeners to weekday divs
const weekdayDivs = document.querySelectorAll('.weekday');
weekdayDivs.forEach(div => {
  div.addEventListener('click', handleWeekdayClick);
});

// Initial call to change the weekday and generate random pics
changeWeekday();
generateRandomPics();






