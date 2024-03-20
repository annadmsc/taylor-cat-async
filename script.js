
const catDiv = document.getElementById('cat');
const songDiv = document.getElementById('song')

const actDiv = document.getElementById('act')

const randomNum = Math.floor(Math.random() * 177) + 1;

const taylorButton = document.getElementById('taylorButton');
const catButton = document.getElementById('catButton');

taylorButton.addEventListener('click', () => {
    fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${randomNum.toFixed(0)}`)
        .then(response => response.json())
        .then(data => {

            const song = document.createElement('h2');
            song.textContent = data.song_title;
            songDiv.innerHTML = '';
            songDiv.appendChild(song);

            fetch(`https://taylorswiftapi.onrender.com/get?song=${data.song_title}`).then(respose => respose.json()).then(
                data => {

                    const lyrics = document.createElement('p');
                    lyrics.textContent = data.quote;
                    songDiv.appendChild(lyrics);
                    const album = document.createElement('h3');
                    album.textContent = data.album;
                    cor = "black"

                    switch (data.album) {
                        case 'Taylor Swift':
                            cor = "green"
                            break;
                        case "Speak Now":
                            cor = "purple"
                            break;
                        case "Fearless":
                            cor = "yellow"
                            break;
                        case "Red":
                            cor = "red"
                            break;
                        case "1989":
                            cor = "aqua"
                            break;
                        case "Reputation":
                            cor = "black"
                            break;
                        case "Lover":
                            cor = "pink"
                            break;
                        case "Folklore":
                            cor = "grey"
                            break;
                        case "Evermore":
                            cor = "brown"
                            break;
                        case "Midnights":
                            cor = "blue"
                            break;
                    }
                    album.style.color = cor
                    songDiv.appendChild(album);
                }
            )
        });
});

catButton.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search?size=small')
        .then(response => response.json())
        .then(data => {
            const catImage = document.createElement('img');
            catImage.src = data[0].url;
            catDiv.innerHTML = '';
            catDiv.appendChild(catImage);
        });
});
