var map = L.map('map', {
  center: [45.0, 100],
  zoom: 3
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

const stories=[
  {
  name: "Aidina's Story",
  coords: [39.976,75.571],
  file: "stories/aidina.html"
},
{
  name: "Nargul's Story",
  coords: [39.222,73],
  file:"stories/nargul.html"
},
{
  name: "Tea.",
  coords:[39.156,79.321],
  file:"stories/tea.html"
},
{
  name: "Lin Yue's Story",
  coords:[25.8617,104.1954],
  file:"stories/china.html"
},
{
  name: "Yuzuki's Story",
  coords:[28.2048,140.2529],
  file:"stories/japan.html"
}
];
var myIcon = L.icon({
  iconUrl:'starIcon.png',
  iconSize:[45,45],
  iconAnchor:[22,94],
  popupAnchor:[-3,-76]
});
stories.forEach(story=>{
  L.marker(story.coords,{icon:myIcon}).addTo(map)
  .bindPopup(`<b>${story.name}</b><br><button onclick = "openStory('${story.file}')" class = "button">Read</button>`);

});

function openStory(file){
  document.body.innerHTML=`<button onclick = "location.reload()"
  style = "position: absolute;
  z-index:999;
  top:20px;
  left: 10px;" class = "button"> Back </button>
  <iframe src = "${file}" class = "stories" style = "width:100vw; height:100vh; border:none;"></iframe>`;
}