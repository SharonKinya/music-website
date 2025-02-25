const covers = [
    {title:'Hot List', image:'postpics/music1.png', id:'1' }, 
    {title:'Hot List', image:'postpics/music1.png', id:'2' }, 
    {title:'Hot List', image:'postpics/music1.png', id:'3' }, 
    {title:'Hot List', image:'postpics/music1.png', id:'4' }, 
    {title:'Hot List', image:'postpics/music1.png', id:'5' },    
];

function displayCovers(){
    songs.forEach((covers, index) =>{
        const newCoverElement = document.createElement('div');
        newCoverElement.classList.add('sections');
        const coverDetails = `  
        <div class="top-line">
            <h1  class="page-title">${covers.title}</h1>
            <span>more >></span>
        </div>

        <div class="container">

            <i class="fa-solid fa-angle-left" id="left"></i>
            <div class="loop">
                <img src=${covers.image} alt="">
            </div>

            <i class="fa-solid fa-angle-right" id="right"></i>

        </div>`;
            newCoverElement.innerHTML = coverDetails;
            const getElement = document.querySelector('home-page-container');
            getElement.appendChild(newCoverElement);     
    });

 
}

displaySongs();
















`
               <div class="left-section" id='${song.id}'>
               
                    <div class="img-container"> 
                        <img src="postpics/music23.png" class="song-img" alt="song-img"> 

                        <div class="play-button" id="songPlaying${song.id}" onclick="toggleMusicPlay('${song.id}')">
                            <i class="fa-solid fa-play" class="play-icon" id="icon1"></i> 
                            <div class="tooltip">play</div>
                        </div>
                        <div class="views"> 
                            <i  class="fa-solid fa-headphones" id="views" class="view-icon"></i>
                            <div class="number">${song.views}</div>
                            <div class="tooltip">views</div>
                        </div>
                         <div class="song-length">${song.length}</div>
                    </div>                 
               </div>

               <audio id="mySong1">
                    <source src="Songs/Gyakie - Forever (Official Music Video)(MP3_128K).mp3">
               </audio>         
    
               <div class="middle-section">
                   <div>
                        <p><span class="song-title">${song.name}</span> - <span class="song-writer">${song.artist}</span></p>
                        <p class="type-of-song"> #${song.genre} </p>
                        
                        <div class="middle-buttons">
                            <div class="like-button">
                                <i class="fa-solid fa-heart" id="like" class="like-icon"></i>
                                <span class="number-of-likes">3,412</span>
                                <div class="tooltip">like</div>
                            </div>

                            <div class="comment-button">
                            <i class="fa-solid fa-message" id="comment" class="comment-icon"></i>
                            <span class="number-of-comments">256</span>
                            <div class="tooltip">comment</div>
                            </div>
                        </div>
            
                   </div> 
               </div>
    
               <div class="general-right-section">
                    <div class="more-button">
                        <i class="fa-solid fa-ellipsis-vertical" class="more-icon"></i>
                        <div class="tooltip">more</div>
                    </div>
               </div>`