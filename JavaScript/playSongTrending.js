const songs = [
    {name:'Forever', artist:'Gyaki', genre:'AfroBeats', length:'3:19', id:'1' , playing:false, views:'31M', imageUrl:'ForeverSong.png', audio:'Songs/Gyakie - Forever (Official Music Video)(MP3_128K).mp3'}, 
    {name:'Agora hills', artist:'Doja Cat', genre:'UrbanHits', length:'4:25', id:'2', playing:false, views:'31M', imageUrl:'agorahills.png', audio:'Songs/Doja Cat - Agora Hills (Lyrics)(M4A_128K).mp3'},
    {name:'Suicidal', artist:'YNM Melly', genre:'HipHop', length:'3:44', id:'3', playing:false, views:'31M', imageUrl:'melly.png', audio:'Songs/YNW Melly -  Suicidal [Official Video](M4A_128K).mp3'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', genre:'Bongo', length:'5:27', id:'4', playing:false, views:'31M', imageUrl:'yatapita.png', audio:'Songs/Diamond Platnumz - Yatapita (Official Lyric Audio)(MP3_128K).mp3'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', genre:'DanceHall', length:'3:00', id:'5', playing:false, views:'31M', imageUrl:'winetothetop.png', audio:'Songs/Vybz Kartel, Wiz Kid - Wine To The Top (Official Music Video)_uxq-S07Rc9U.mp3'},
    {name:'Work From Home', artist:'Fifth Harmony', genre:'UrbanHits', length:'3:39', id:'6', playing:false, views:'31M', imageUrl:'workfromhome.png', audio:'Songs/Fifth Harmony - Work from Home (Official Video) ft. Ty Dolla ign(1).mp3'},
    {name:'Dont Call Me Up', artist:'Mabel', genre:'Pop', length:'2:58', id:'7', playing:false, views:'31M', imageUrl:'mabel.png', audio:'Songs/Mabel - Don_t Call Me Up (Lyrics)(MP3_128K).mp3'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', genre:'Bongo', length:'3:36', id:'8', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Rayvanny Ft Mayorkun - GimmiDat (Official Music Video)(M4A_128K).mp3'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', genre:'Bongo', length:'2:51', id:'9', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/We Don_t Care - Rj The Dj ft Meddy _ Rayvanny (Official Video)(M4A_128K).mp3'},
    {name:'Let You Love Me', artist:'Rita Ora', genre:'RockPop', length:'3:10', id:'10', playing:false, views:'31M', imageUrl:'ritaora.png', audio:'Songs/Rita Ora - Let You Love Me-2.mp3'},
    {name:'Doja', artist:'Central Cee', genre:'HipHop', length:'1:45', id:'11', playing:false, views:'31M', imageUrl:'centralcee.png', audio:'Songs/Central Cee - Doja(1).mp3'},
    {name:'Umeme', artist:'Willy Paul', genre:'Bongo', length:'3:52', id:'12', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Willy Paul - Umeme ( Official Video )(M4A_128K).mp3'},
    {name:'Alcohol', artist:'JoeBoy', genre:'AfroBeats', length:'2:38', id:'13', playing:false, views:'31M', imageUrl:'joeboy.png', audio:'Songs/Joeboy - Sip (Alcohol) [Lyric Video](MP3_128K).mp3'},
    {name:'Woman', artist:'Otile Brown X Harmonize', genre:'Bongo', length:'3:29', id:'14', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Otile Brown X Harmonize - Woman (Official Music Video) sms skiza 7301951 to 811.mp3'},
    {name:'Better', artist:'Khalid', genre:'R&B', length:'3:50', id:'15', playing:false, views:'31M', imageUrl:'khalid.png', audio:'Songs/Khalid - Better.mp3'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', genre:'Bongo', length:'3:23', id:'16', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Darassa Feat. Sho Madjozi - I Like It (Official Music Video)(MP3_128K).mp3'},
    {name:'Understand', artist:'Omalay', genre:'AfroBeats', length:'3:07', id:'17', playing:false, views:'31M', imageUrl:'omalay.png', audio:'Songs/Omah Lay - Understand (Official Music Video)(MP3_128K).mp3'},
    {name:'Body & Soul', artist:'JoeBoy', genre:'AfroBeats', length:'3:14', id:'18', playing:false, views:'31M', imageUrl:'joeboy.png', audio:'Songs/Joeboy - Body & Soul.mp3'},
    {name:'Vibration', artist:'FireBoy DML', genre:'AfroBeats', length:'3:20', id:'19', playing:false, views:'31M', imageUrl:'vibration.png', audio:'Songs/FIREBOY DML - VIBRATION.mp3'},
    {name:'Be Honest', artist:'Burna Boy ft Jorja Smith', genre:'AfroBeats', length:'4:20', id:'20', playing:false, views:'31M', imageUrl:'behonest.png', audio:'Songs/Jorja Smith - Be Honest (feat. Burna Boy).mp3'},
    {name:'Castle on the Hill', artist:'Edsheeran', genre:'Pop', length:'4:48', id:'21', playing:false, views:'31M', imageUrl:'photograph.png', audio:'Songs/Ed Sheeran - Castle On The Hill [Official].mp3'},
    {name:'Beautiful Mistakes', artist:'Maroon 5 ft. Megan Thee Stallion', genre:'Rockpop', length:'3:48', id:'22', playing:false, views:'31M', imageUrl:'beautifulmistakes.png', audio:'Songs/Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion.mp3'},
    {name:'Photograph', artist:'Edsheeran', genre:'Rockpop', length:'4:17', id:'23', playing:false, views:'31M', imageUrl:'photograph.png', audio:'Songs/Ed Sheeran - Photograph.mp3'},
    {name:'What I Put You Through', artist:'Conor Maynard', genre:'RockPop', length:'3:22', id:'24', playing:false, views:'31M', imageUrl:'conor.png', audio:'Songs/Conor Maynard - What I Put You Through(MP3_160K).mp3'},
    {name:'Joy in Chaos', artist:'Holy Drill', genre:'Drill', length:'2:40', id:'25', playing:false, views:'31M', imageUrl:'chaos.png', audio:'Songs/Joy In Chaos - Holy Drill (Lyrics)(M4A_128K).mp3'},
    {name:'Believer', artist:'Imagine Dragons', genre:'RockPop', length:'3:24', id:'26', playing:false, views:'31M', imageUrl:'believer.png', audio:'Songs/Imagine Dragons - Believer.mp3'},
    {name:'Waka Waka (This Time For Africa)', artist:'Shakira', genre:'RockPop', length:'3:30', id:'27', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Shakira - Waka Waka (This Time For Africa).mp3'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', genre:'RockPop', length:'3:40', id:'28', playing:false, views:'31M', imageUrl:'music20.png', audio:'Songs/Egzod _ Maestro Chives - Royalty (Lyrics) ft. Neoni(MP3_160K).mp3'}
];

function displaySongs(){
    songs.forEach((song, index) =>{
        const newSongElement = document.createElement('div');
        newSongElement.classList.add('page-entity');
        const songDetails = `
                <div class="left-section" id='${song.id}'>
                    <p class="serial-no">${song.id}</p>

                    <div class="img-container"> 
                        <img src='postpics/${song.imageUrl}' alt="" class="song-img">

                        <div class="play-button" id="songPlaying${song.id}" onclick="toggleMusicPlay('${song.id}')">
                            <i class="fa-solid fa-play" class="play-icon" id="icon1"></i> 
                            <div class="tooltip">play</div>
                        </div>
                        
                        <div class="views"> 
                            <i  class="fa-solid fa-headphones" id="views" class="view-icon"></i>
                            <div class="number">${song.views}</div>
                            <div class="tooltip">views</div>
                        </div>  
                    </div>  
                </div>
                
               <audio id="mySong${song.id}">
                    <source src='${song.audio}' >
               </audio>         
    
               <div class="middle-section">
                   <div class="first-section">
                        <p><span class="song-title">${song.name}</span></p>
                        <p><span class="song-writer">${song.artist}</span></p>
                   </div>
                   
                   <div class="last-section">
                        <p class="type-of-song"> #${song.genre} </p>

                        <div class="middle-buttons">
                            <div class="like-button">
                                <i class="fa-solid fa-heart" id="like" class="like-icon"></i>
                                <span class="number-of-likes">14.6k</span>
                                <div class="tooltip">like</div>
                            </div>

                        
                        </div>

                    </div>
               </div>
    
               <div class="general-right-section">
                    <div class="download-button">
                        <i class="fa-solid fa-download" class="download-icon"></i>
                        <div class="tooltip">download</div>
                    </div>

                    
               
                    <div class="more-button" onclick="toggleMenu()">
                        <i class="fa-solid fa-ellipsis-vertical" class="more-icon"></i>
                        <div class="tooltip">more</div>

                        <div class="sub-menu-wrap" id="subMenu"> 
                            <div class="sub-menu"> 
                                <div class="song-dropdown-info"> 
                                    <div class="dropdown-first-session">
                                        <img src="postpics/img5.png" class="song-dropdown-image">
                                    </div>
                                    <div dropdown-last-session>
                                        <h3>${song.name}</h3>
                                        <p>${song.artist} <i class="fa-solid fa-angle-right"></i> </p>
                                    </div>
                                </div>
                                <hr>
                                <div>
                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-share"></i>
                                        <p>Share</p>
                                    </a>

                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-heart"></i>
                                        <p>Favourite</p>
                                    </a>

                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-plus"></i>
                                        <p>Add to Playlist</p>
                                    </a>

                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-message"></i>
                                        <p>Comment</p>
                                    </a>

                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-download"></i>
                                        <p>Download</p>
                                    </a>

                                    <a href="#" class="sub-menu-link">
                                        <i class="fa-solid fa-share"></i>
                                        <p>Play Next</p>
                                    </a>
                                </div>      
                            </div>
                        </div>
                    </div>
    
               </div>`;
            newSongElement.innerHTML = songDetails;
            const getElement = document.querySelector('body');
            getElement.appendChild(newSongElement);     
    });

 
}

displaySongs();

//playing the song

function toggleMusicPlay(songId) {
    const songIdElement = document.getElementById(`songPlaying${songId}`);
    const mySongElement = document.getElementById(`mySong${songId}`);
    
       if(mySongElement.paused){
        mySongElement.play();
        songIdElement.innerHTML =  `<i class="fa-solid fa-pause" class="play-icon" id="icon1"></i>`;
       } else {
        mySongElement.pause();
        songIdElement.innerHTML =  `<i class="fa-solid fa-play" class="play-icon" id="icon1"></i>`;
       };
    };   


