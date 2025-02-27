let availableKeywords = [
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
    "Royalty",

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

const resultsBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
           return keyword.toLowerCase().includes(input.toLowerCase());
        });

    }

    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>" ;
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}



 

