const videos = [
    {name:'Forever', artist:'Gyaki', video:'Videos/Addison Rae - Diet Pepsi (Lyrics)(720P_HD).mp4', length:'3:19', id:'1' , playing:false, views:'31M', imageUrl:'ForeverSong.png'}, 
    {name:'Agora hills', artist:'Doja Cat', video:'Videos/All Too Well _ Taylor Swift (Lyrics)(720P_HD).mp4', length:'4:25', id:'2', playing:false, views:'31M', imageUrl:'agorahills.png'},
    {name:'Suicidal', artist:'YNM Melly', video:'Videos/Anne-Marie _ Khalid - YOU _ I [Pakx Chill ReMix]----(360P).mp4', length:'3:44', id:'3', playing:false, views:'31M', imageUrl:'melly.png'},
    {name:'Yatapita Review', artist:'Diamond Platnumz', video:'Videos/Astrid S - Hurts So Good (Lyrics) _ When it hurts but it hurts so good(360P).mp4', length:'5:27', id:'4', playing:false, views:'31M', imageUrl:'yatapita.png'},
    {name:'Wine To The Top', artist:'Vybz Kartel ft Wiz Kid', video:'Videos/Cardi B Enough lyrics(720P_HD).mp4', length:'3:00', id:'5', playing:false, views:'31M', imageUrl:'winetothetop.png'},
    {name:'Work From Home', artist:'Fifth Harmony', video:'Videos/Chris Brown - Under The Influence (Official Video)(360P).mp4', length:'3:39', id:'6', playing:false, views:'31M', imageUrl:'workfromhome.png'},
    {name:'Dont Call Me Up', artist:'Mabel', video:'Videos/Clean Bandit - Symphony (feat. Zara Larsson) [Official Video](MP3_160K).mp3', length:'2:58', id:'7', playing:false, views:'31M', imageUrl:'mabel.png'},
    {name:'Gimmidat', artist:'Rayvanny ft Mayorkun', video:'Videos/Duncan Laurence - Arcade (Lyrics) ft. FLETCHER(720P_HD).mp4', length:'3:36', id:'8', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'We Dont Care', artist:'Rj The Dj ft Meddy ft Rayvanny', video:'Videos/Ed Sheeran - Shivers (Lyrics)(720P_HD).mp4', length:'2:51', id:'9', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Let You Love Me', artist:'Rita Ora', video:'Videos/Fave - Mr Man (Visualizer)(240P).mp4', length:'3:10', id:'10', playing:false, views:'31M', imageUrl:'ritaora.png'},
    {name:'Doja', artist:'Central Cee', video:'Videos/Halsey - Bad At Love (Lyrics)(720P_HD).mp4', length:'1:45', id:'11', playing:false, views:'31M', imageUrl:'centralcee.png'},
    {name:'Umeme', artist:'Willy Paul', video:'Videos/Halsey - Without Me (Lyrics)(360P).mp4', length:'3:52', id:'12', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Alcohol', artist:'JoeBoy', video:'Videos/Helplessly _ Tatiana Manaois (Official Music Video)(240P).mp4', length:'2:38', id:'13', playing:false, views:'31M', imageUrl:'joeboy.png'},
    {name:'Woman', artist:'Otile Brown X Harmonize', video:'Videos/Ibraah - Rara (Official Music Video)(240P).mp4', length:'3:29', id:'14', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Better', artist:'Khalid', video:'Videos/Jason Derulo x David Guetta - Goodbye (feat. Nicki Minaj _ Willy William) [Official HD Lyric Video](240P).mp4', length:'3:50', id:'15', playing:false, views:'31M', imageUrl:'khalid.png'},
    {name:'Like It', artist:'Darassa ft Sho Madjonzi', video:'Videos/Jennifer Lopez - Ain_t Your Mama (Lyrics) we used to be crazy in love(1080P_HD).mp4', length:'3:23', id:'16', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Understand', artist:'Omalay', video:'Videos/KAROL G_ Nicki Minaj - Tusa (Official Video)(720P_HD).mp4', length:'3:07', id:'17', playing:false, views:'31M', imageUrl:'omalay.png'},
    {name:'Body & Soul', artist:'JoeBoy', video:'Videos/Kusah - Wa Sasa (Official Lyrics Video)(720P_HD).mp4', length:'3:14', id:'18', playing:false, views:'31M', imageUrl:'joeboy.png'},
    {name:'Vibration', artist:'FireBoy DML', video:'Videos/Lauv - I Like Me Better (Lyrics)(720P_60FPS).mp4', length:'3:20', id:'19', playing:false, views:'31M', imageUrl:'vibration.png'},
    {name:'Be Honest', artist:'Burna Boy ft Jorja Smith', video:'Videos/Lava Lava - Desh Desh (Official Music Video)(240P).mp4', length:'4:20', id:'20', playing:false, views:'31M', imageUrl:'behonest.png'},
    {name:'Castle on the Hill', artist:'Edsheeran', video:'Videos/Lizzy McAlpine - ceilings (Lyrics)(720P_HD).mp4', length:'4:48', id:'21', playing:false, views:'31M', imageUrl:'photograph.png'},
    {name:'Beautiful Mistakes', artist:'Maroon 5 ft. Megan Thee Stallion', video:'Videos/Lost in the Middle of Nowhere (feat. Becky G) (Spanish Remix) (Official Music Video)(240P).mp4', length:'3:48', id:'22', playing:false, views:'31M', imageUrl:'beautifulmistakes.png'},
    {name:'Photograph', artist:'Edsheeran', video:'Videos/Maroon 5 _ Girls like you [ Animation version ](360P).mp4', length:'4:17', id:'23', playing:false, views:'31M', imageUrl:'photograph.png'},
    {name:'What I Put You Through', artist:'Conor Maynard', video:'Videos/Natalie Taylor - Surrender (Lyrics)(720P_HD).mp4', length:'3:22', id:'24', playing:false, views:'31M', imageUrl:'conor.png'},
    {name:'Joy in Chaos', artist:'Holy Drill', video:'Videos/New West - Those Eyes (Lyrics)(720P_60FPS).mp4', length:'2:40', id:'25', playing:false, views:'31M', imageUrl:'chaos.png'},
    {name:'Believer', artist:'Imagine Dragons', video:'Videos/Nicki Minaj - Fly (Lyrics) Feat. Rihanna(720P_HD).mp4', length:'3:24', id:'26', playing:false, views:'31M', imageUrl:'believer.png'},
    {name:'Waka Waka (This Time For Africa)', artist:'Shakira', video:'Videos/Reed Wonder_ Aurora Olivas - The Machine (Lyrics)(720P_HD).mp4', length:'3:30', id:'27', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', video:'Videos/Ruger - Snapchat (Official Video)(240P).mp4', length:'3:40', id:'28', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Forever', artist:'Gyaki', video:'Videos/Ruth B. - Dandelions (Lyrics)(360P).mp4', length:'3:19', id:'1' , playing:false, views:'31M', imageUrl:'ForeverSong.png'}, 
    {name:'Agora hills', artist:'Doja Cat', video:'Videos/Taylor Swift - Cornelia Street (Lyric Video)(720P_HD).mp4', length:'4:25', id:'2', playing:false, views:'31M', imageUrl:'agorahills.png'},
    {name:'Royalty', artist:'Egzod _ Maestro Chives ft. Neoni', video:'Videos/Taylor Swift - Daylight (Lyric Video)(720P_HD).mp4', length:'3:40', id:'28', playing:false, views:'31M', imageUrl:'music20.png'},
    {name:'Forever', artist:'Gyaki', video:'Videos/Tyla - PUSH 2 START (Official Music Video)(720P_HD).mp4', length:'3:19', id:'1' , playing:false, views:'31M', imageUrl:'ForeverSong.png'}, 
    {name:'Agora hills', artist:'Doja Cat', video:'Videos/Ya Levis - Chocolat (English Lyrics)(720P_HD).mp4', length:'4:25', id:'2', playing:false, views:'31M', imageUrl:'agorahills.png'}
];

function displayVideos() {
// const videosContainer = document.getElementById("videos");

videos.forEach((videoItem, index)  => {
    const newVideoElement = document.createElement('div');
    newVideoElement.classList.add('videos-page');
    // videoElement.setAttribute('id', videoItem.id);
    const videoDetails = `
     <div class="card-container">
            <div class="card">
                <img src='postpics/${videoItem.imageUrl}' alt="" class="card-image">
                <div class="play-button" id="btn-${videoItem.id}" onclick="playSong('${videoItem.id}')" >
                    <i class="fa-solid fa-play" class="play-icon" id="icon1"></i> 
                    <div class="tooltip">play</div>
                </div>
                <p class="video-length">${videoItem.length}</p>
                <div class="card-content">
                        <div class="song-info"> 
                            <div class="song-info-first-session">
                                <img src='postpics/${videoItem.imageUrl}' class="profile-image">
                            </div>
                            <div song-info-last-session>
                                <h3>${videoItem.name}</h3>
                                <p>${videoItem.artist}</p>
                            </div>
                        <div class="views">
                        <i  class="fa-solid fa-headphones" id="views" class="view-icon"></i>
                        <div class="number">${videoItem.views}</div>
                        <div class="tooltip">views</div>
                    </div>
                </div>
            </div>
    
        </div>
         `;
         newVideoElement.innerHTML = videoDetails;
         const getElement =  document.querySelector('body');
         getElement.appendChild(videoElement);
});
}

displayVideos();

function playSong(id) {
    const btnID = `btn-${id}` ;
    const btn = document.getElementById('btnID');
    const btnHTML = btn.innerHTML;
    console.log ('btn HTML:', btnHTML);
    if(btnHTML === '<i class="fa-solid fa-play"></i>') {
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}


//more dropdown code
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}