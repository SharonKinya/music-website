const ctrlIcon = document.querySelector("#ctrlIcon");
const song = document.querySelector("#song");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const trackTitle = document.querySelector(".track-title");
const artistName = document.querySelector(".artist-name");
const songImg = document.querySelector(".song-img");
const slider = document.querySelector(".slider");
const thumb = document.querySelector(".slider-thumb");
const progress = document.querySelector(".progress");
const time = document.querySelector(".time");
const fullTime = document.querySelector(".full-time");
const volumeSlider = document.querySelector(".volume-slider .slider");
const volumeProgress = document.querySelector(".volume-slider .progress");
const volumeIcon = document.querySelector(".volume-icon");


// Global Variables
// Is the track playing
let trackPlaying = false;
// Is the volume muted
let volumeMuted = false;
/*which track is currently loaded
(based on the numerical id)*/
let trackId = 0 ;
// Data
// Track names
const tracks = [
    "Forever",
    "Agora Hills",
    "Suicidal",
    "Yatapita ",
    "Wine To The Top",
    "Work From Home",
    "Don't Call Me Up",
    "Gimmidat",
    "We Don't Care",
    "Let You Love Me",
    "Doja",
    "Alcohol",
    "Umeme",
    "Woman",
    "Better",
    "Like It",
    "Understand",
    "Body & Soul",
    "Vibration",
    "Be Honest",
    "Castle on the Hill",
    "Beautiful Mistakes",
    "photograph",
    "What I Put<br> You Through",
    "Joy in Chaos",
    "Believer",
    "Waka Waka",
    "Royalty"
];
// artist names
const artists = [
    "Gyaki",
    "Doja Cat",
    "YNW Melly",
    "Diamond Platinumz",
    "Vybz Kartel ft Wiz Kid",
    "Fifth Harmony",
    "Mabel",
    "Rayvanny ft Mayorkun",
    "Rj The Dj ft Meddy ft Rayvanny",
    "Rita Ora",
    "Central Cee",
    "Joe Boy",
    "Willy Paul",
    "Otile Brown ft Harmonize",
    "Khalid",
    "Darassa ft Sho Madjonzi",
    "Omalay",
    "Joe Boy",
    "FireBoy DML",
    "Burna Boy ft Jorja Smith",
    "Edsheeran",
    "Maroon 5 ft. Megan Thee Stallion",
    "Edsheeran",
    "Conor Maynard",
    "Holy Drill",
    "Imagine Dragons",
    "Shakira",
    "Egzod_Maestro Chives ft. Neoni"
];
// covers/images
const covers = [
    "ForeverSong",
    "agorahills",
    "melly",
    "yatapita",
   "winetothetop",
    "workfromhome",
    "mabel",
    "mabel",
    "mabel",
    "ritaora",
    "centralcee",
    "joeboy",
    "joeboy",
    "khalid",
    "khalid",
    "omalay",
    "joeboy",
    "vibration",
    "behonest",
    "photograph",
    "beautifulmistakes",
    "photograph",
    "conor",
    "chaos",
    "believer",
    "wakawaka",
    "wakawaka"
];
// tracks/songs
const songs = [
    "Gyakie - Forever (Official Music Video)(MP3_128K)",
    "Doja Cat - Agora Hills (Lyrics)(M4A_128K)",
    "YNW Melly -  Suicidal [Official Video](M4A_128K)",
    "Diamond Platnumz - Yatapita (Official Lyric Audio)(MP3_128K)",
    "Vybz Kartel, Wiz Kid - Wine To The Top (Official Music Video)_uxq-S07Rc9U",
    "Fifth Harmony - Work from Home (Official Video) ft. Ty Dolla ign(1)",
    "Mabel - Don_t Call Me Up (Lyrics)(MP3_128K)",
    "Rayvanny Ft Mayorkun - GimmiDat (Official Music Video)(M4A_128K)",
    "We Don_t Care - Rj The Dj ft Meddy _ Rayvanny (Official Video)(M4A_128K)",
    "Rita Ora - Let You Love Me-2",
    "Central Cee - Doja(1)",
    "Joeboy - Sip (Alcohol) [Lyric Video](MP3_128K)",
    "Willy Paul - Umeme ( Official Video )(M4A_128K)",
    "Otile Brown X Harmonize - Woman (Official Music Video) sms skiza 7301951 to 811",
    "Khalid - Better",
    "Darassa Feat. Sho Madjozi - I Like It (Official Music Video)(MP3_128K)",
    "Omah Lay - Understand (Official Music Video)(MP3_128K)",
    "Joeboy - Body & Soul",
    "FIREBOY DML - VIBRATION",
    "Jorja Smith - Be Honest (feat. Burna Boy)",
    "Ed Sheeran - Castle On The Hill [Official]",
    "Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion",
    "Ed Sheeran - Photograph",
    "Conor Maynard - What I Put You Through(MP3_160K)",
    "Joy In Chaos - Holy Drill (Lyrics)(M4A_128K)",
    "Imagine Dragons - Believer",
    "Shakira - Waka Waka (This Time For Africa)",
    "Egzod _ Maestro Chives - Royalty (Lyrics) ft. Neoni(MP3_160K)"
];
// Add a click event on the play button
ctrlIcon.addEventListener('click', playTrack);
// Play track function
function playTrack() {
    // If the audio is not playing
    if(trackPlaying === false) {
        // Play the audio
        song.play();
        // Add a pause icon inside the button
        ctrlIcon.innerHTML = `
        <i class="fa-solid fa-pause" ></i>
         `;
        /*Set the trackPlaying to true,
        because the track is now playing*/
        trackPlaying = true;
    } else {
        song.pause();
        // Add a play icon inside the button
        ctrlIcon.innerHTML = `
        <i class="fa-solid fa-play" ></i>
         `;
         /*Set the trackPlaying to false,
        because the track is now paused again*/
        trackPlaying = false;
    }
}

// Switching tracks function
function switchTrack() {
    // If the audio is playing
    if(trackPlaying === true) {
        // Keep playing the audio
        song.play();
    }
}

// Get track source
const trackSrc = 'Songs/' + songs[trackId] + ".mp3";
// Load track function
function loadTrack() {
    // Set the audio track source
    song.src = 'Songs/' + songs[trackId] + ".mp3";
    // Re-load the audio track
    song.load();
    // Set the track title
    trackTitle.innerHTML = tracks[trackId];
    // Set the artist name
    artistName.innerHTML = artists[trackId];
    // Set the song image/ cover
    songImg.src = 'postpics/' + covers[trackId] + ".png";
    // Set the timeline slider to the beginning
    progress.style.width = 0;
    thumb.style.left = 0;
    // Wait for the audio data to load
    song.addEventListener('loadeddata', () => {
        // Display the duration of the audio file
        setTime(fullTime, song.duration);
        // Set max value to slider
        slider.setAttribute ("max", song.duration);
    });
}

// Initially load the track
loadTrack();
// Set the click event to previous button
btnPrev.addEventListener('click', () => {
    // Decrement track id
    trackId--;
    // If the track id goes below 0
    if(trackId < 0) {
        //Go to the last track
        trackId= tracks.length - 1;
    }
    //Load the track
    loadTrack();
    // Run the switchtrack function
    switchTrack();
});

// Set click event to the next button
btnNext.addEventListener('click', nextTrack);
// Next tack function
function nextTrack() {
    //Increament track id
    trackId++;
    if(trackId > tracks.length - 1) {
        // Go to the first track
        trackId = 0;
    }
    //Load the track
    loadTrack();
    // Run the switchtrack function
    switchTrack();
}

// When the audio ends, switch to the next track
song.addEventListener('ended', nextTrack);

// format the time
function setTime(output, input) {
    // Calculate minutes from input
    const minutes = Math.floor(input / 60);
    // Calculate seconds from input
    const seconds = Math.floor(input / 60);
    // If the seconds are under 10
    if(second < 10) {
        // Add a zero before the first number
        output.innerHTML = minutes + ":0" + seconds;
    } else {
        // Output the time without a zero
        output.innerHTML = minutes + ":" + seconds;
    }
}

// Output the audio track duration
setTime(fullTime, song.duration);
// When the time changes on the audio track
song.addEventListener('timeupdate', () => {
    // Get the current audio time
    const currentAudioTime =Math.floor(song.currentTime);
    // Get the percentage
    const timePercentage = (currentAudioTime / song.duration) *100 + "%";
    // Output the current audio time
    setTime(time, currentAudioTime);
    // Set the slider progress to the percentage
    progress.style.width = timePercentage;
    thumb.style.left = timePercentage;
});

// Function for handling the slider values
function customSlider() {
    //get the percentage
    const val = (slider.value / song.duration) *100 + "%";
    // Set the thumb and progress to the current value
    progress.style.width = val;
    thumb.style.left = val;
    // Output the audio current time
    setTime(time, slider.value);
    // Set audio current time to the slider value
    currentAudioTime = slider.value;
}
// Call function initially
customSlider();
/*Repeat the function when the slider is selected*/
slider.addEventListener('input', customSlider);

// Volume slider current value
let val;
// volume slider 
function customVolumeSlider() {
    // Get max attribute value from slider
    const maxVal = volumeSlider.getAttribute("max");
    // Get the percentage
    val = (volumeSlider.value / maxVal) * 100 + "%"
    // Set the thumb and progress to the current value
    volumeProgress.style.width = val;
    // Set the audio volume to current valu
    song.volume = volumeSlider.value / 100;
    // Change volume icons
    // If the volume is high
    if(song.volume > 0.5) {
        // Set the volume up icon
        volumeIcon.innerHTML =
       ` <i class="fa-solid fa-volume-high"></i>`;
       // If the volume is muted
    } else if(song.volume === 0) {
        // Set the mute icon
        volumeIcon.innerHTML =
        ` <i class="fa-solid fa-volume-xmark"></i>`;
        // If the volume is low
    } else {
        // Set the mute icon
        volumeIcon.innerHTML =
        ` <i class="fa-solid fa-volume-low"></i>`;
    }
}

// Run the volume slider function
customVolumeSlider();

// Run the function again on when the volume slider is selected
volumeSlider.addEventListener("input", customVolumeSlider);

// Add a click event to the volume icon
volumeIcon.addEventListener('click', () => {
    // if the volume is not muted
    if(volumeMuted === false) {
        // Set the mute volume icon
        volumeIcon.innerHTML =
        `<i class="fa-solid fa-volume-xmark"></i>`;
        // mute the audio
        song.volume = 0;
        // Set the volume slider to zero
        volumeProgress.style.width = 0;
        // Set the volumeMuted to true, because the volume is now mutes
        volumeMuted = true;
        // if the volume is mute
    } else {
        // Set the volume down icon
        volumeIcon.innerHTML =
       ` <i class="fa-solid fa-volume-low"></i>`;
        // Unmute the volume by setting anything above zero
       song.volume = 0.5;
       // Set the volume progress slider to the current value
       volumeProgress.style.width = val;
    //    Set the volumeMuted to false, because the volume is no longer muted
    volumeMuted = false;

    }
});