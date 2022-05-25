const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";

// Note: AudioPlayer is defined in audio-player.js
const audioFile =
  "https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c";
const audioPlayer = AudioPlayer();

const search = (ev) => {
  const term = document.querySelector("#search").value;
  console.log("search for:", term);
  // issue three Spotify queries at once...
  getTracks(term);
  getAlbums(term);
  getArtist(term);
  if (ev) {
    ev.preventDefault();
  }
};

const getTracks = (term) => {
  // Clear tracks
  counter = 0;
  document.querySelector('#tracks').innerHTML = "";


  fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + term)
  .then(response => response.json())
    .then(tracks => {
      console.log(tracks);
      for (const track of tracks) {
        document.querySelector('#tracks').innerHTML += `
        <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)" >
        <img src="${track.album.image_url}" alt="${track.name}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.name}</h2>
            <p>
                ${track.artist.name}
            </p>
        </div>
    </button>`;

    counter += 1;
    if (counter >= 5){
      break;
    }

        
    }
        
      })

    };
    


const getAlbums = (term) => {
  // Clear albums.

  document.querySelector('#albums').innerHTML = "";

  console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);

  // This code fetches tracks based on a search term and prints them to the console:

  fetch('https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term)
    .then(response => response.json())
    .then(albums => {
      console.log(albums);
      for (const album of albums) {
        document.querySelector('#albums').innerHTML += `
        <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
                        <div>
                            <img src="${album.image_url}" alt="${album.name}">
                            <h2>${album.name}</h2>
                            <div class="footer">
                                <a href="https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`;
        
      }
    })
  }




const getArtist = (term) => {
  let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        let firstArtist = data[0];

        //   create a function that converts this data to html

        let html = artist2Html(firstArtist);

        // plug that html into the index.html file
        document.querySelector("#artist").innerHTML = html;
      } else {
        let html = "<p> No artists have been found </p>";
        document.querySelector("#artist").innerHTML = html;
      }
    });
};

const artist2Html = (artist) => {
  return `
    <section class="artist-card" id=${artist.id}>
        <div>
            <img src=${artist.image_url} alt="${artist.name}">
            <h2>${artist.name}</h2>
            <div class="footer">
                <a href=${artist.spotify_url} target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>  `;
};

const handleTrackClick = (ev) => {
  const previewUrl = ev.currentTarget.getAttribute("data-preview-track");
  console.log(previewUrl);
  audioPlayer.setAudioFile(previewUrl);
  audioPlayer.play();
};

document.querySelector("#search").onkeyup = (ev) => {
  // Number 13 is the "Enter" key on the keyboard
  console.log(ev.keyCode);
  if (ev.keyCode === 13) {
    ev.preventDefault();
    search();
  }
};