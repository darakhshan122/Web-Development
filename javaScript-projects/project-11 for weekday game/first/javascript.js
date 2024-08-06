// document.addEventListener('DOMContentLoaded', function () {
//     // Array of weekdays
//     const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//     // Index to keep track of current weekday
//     let currentDayIndex = 0;
  
//     // Variable to store the currently playing audio
//     let currentAudio;
  
//     // Audio files for each day of the week
//     const audioFiles = [
//       'audio_monday.wav',
//       'Play.ht - !!!!! second day of the week!!!!!!....wav',
//       'Play.ht - !!!!! third day of the....wav',
//       'Play.ht - !!!!! fourth day of the....wav',
//       'Play.ht - !!!!! fifth day of the week!!!!!!friday.wav',
//       'Play.ht - !!!!! sixth day of the week!!!!!!saturday.wav',
//       'Play.ht - !!!!! last day of the week!!!!!! sunday.wav'
//     ];
  
//     // Function to update content and play audio
//     function updateContent() {
//       const weekdayElement = document.querySelector('.weekday');
//       weekdayElement.textContent = weekdays[currentDayIndex];
  
//       // Stop currently playing audio, if any
//       if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0; // Reset audio to start
//       }
  
//       // Play corresponding audio
//       currentAudio = new Audio(audioFiles[currentDayIndex]);
//       currentAudio.play();
//     }
  
//     // Function to play audio for Monday when the page loads
//     function playAudioForMonday() {
//       currentDayIndex = 0; // Set the index to Monday
//       updateContent(); // Play audio for Monday
//     }
  
//     // Play audio for Monday when the page loads
//     playAudioForMonday();
  
//     // Click event listener for the "Next" button
//     document.getElementById('next-btn').addEventListener('click', function () {
//       // Increment the current day index
//       currentDayIndex++;
  
//       // If it exceeds the length of weekdays array, reset it
//       if (currentDayIndex >= weekdays.length) {
//         currentDayIndex = 0;
//       }
  
//       // Update content and play audio
//       updateContent();
//     });
//   });









// document.addEventListener('DOMContentLoaded', function () {
//     // Array of weekdays
//     const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
//     // Index to keep track of current weekday
//     let currentDayIndex = 0;
  
//     // Variable to store the currently playing audio
//     let currentAudio;
  
//     // Audio files for each day of the week
//     const audioFiles = [
//       'audio_monday.wav',
//       'Play.ht - !!!!! second day of the week!!!!!!....wav',
//       'Play.ht - !!!!! third day of the....wav',
//       'Play.ht - !!!!! fourth day of the....wav',
//       'Play.ht - !!!!! fifth day of the week!!!!!!friday.wav',
//       'Play.ht - !!!!! sixth day of the week!!!!!!saturday.wav',
//       'Play.ht - !!!!! last day of the week!!!!!! sunday.wav'
//     ];
  
//     // Function to update content and play audio
//     function updateContent() {
//       const weekdayElement = document.querySelector('.weekday');
//       weekdayElement.textContent = weekdays[currentDayIndex];
  
//       // Stop currently playing audio, if any
//       if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0; // Reset audio to start
//       }
  
//       // Play corresponding audio
//       currentAudio = new Audio(audioFiles[currentDayIndex]);
//       currentAudio.play();
//     }
  
//     // Function to play audio for Monday when the page loads
//     function playAudioForMonday() {
//       currentDayIndex = 0; // Set the index to Monday
//       updateContent(); // Play audio for Monday
//     }
  
//     // Play audio for Monday when the page loads
//     playAudioForMonday(); // <--- Added this line
  
//     // Click event listener for the "Next" button
//     document.getElementById('next-btn').addEventListener('click', function () {
//       // Increment the current day index
//       currentDayIndex++;
  
//       // If it exceeds the length of weekdays array, reset it
//       if (currentDayIndex >= weekdays.length) {
//         currentDayIndex = 0;
//       }
  
//       // Update content and play audio
//       updateContent();
//     });
// });









window.onload = function() {
    // Array of weekdays
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    // Index to keep track of current weekday
    let currentDayIndex = 0;
  
    // Variable to store the currently playing audio
    let currentAudio;
  
    // Audio files for each day of the week
    const audioFiles = [
      'audio_monday.wav',
      'Play.ht - !!!!! second day of the week!!!!!!....wav',
      'Play.ht - !!!!! third day of the....wav',
      'Play.ht - !!!!! fourth day of the....wav',
      'Play.ht - !!!!! fifth day of the week!!!!!!friday.wav',
      'Play.ht - !!!!! sixth day of the week!!!!!!saturday.wav',
      'Play.ht - !!!!! last day of the week!!!!!! sunday.wav'
    ];

    // Function to update content and play audio
    function updateContent() {
      const weekdayElement = document.querySelector('.weekday');
      weekdayElement.textContent = weekdays[currentDayIndex];
  
      // Stop currently playing audio, if any
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset audio to start
      }
  
      // Play corresponding audio
      currentAudio = new Audio(audioFiles[currentDayIndex]);
      currentAudio.play();
    }

    // Play audio for Monday when the page loads
    updateContent();

    // Click event listener for the "Next" button
    document.getElementById('next-btn').addEventListener('click', function () {
      // Increment the current day index
      currentDayIndex++;
  
      // If it exceeds the length of weekdays array, reset it
      if (currentDayIndex >= weekdays.length) {
        currentDayIndex = 0;
      }
  
      // Update content and play audio
      updateContent();
    });
};

  
  
  
  