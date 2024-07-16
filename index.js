const data = [
    {artist: "Drake", song: "In My Feelings"},
    {artist: "Ed Sheeran", song: "Shape of You"},
    {artist: "Billie Eilish", song: "Bad Guy"},
    {artist: "Post Malone", song: "Rockstar"},
    {artist: "Ariana Grande", song: "7 Rings"},
    {artist: "Lil Nas X", song: "Old Town Road"},
    {artist: "The Weeknd", song: "Blinding Lights"},
    {artist: "Camila Cabello", song: "Havana"},
    {artist: "Imagine Dragons", song: "Believer"},
    {artist: "Taylor Swift", song: "Shake It Off"},
    {artist: "Shawn Mendes", song: "Señorita"},
    {artist: "Bruno Mars", song: "Uptown Funk"},
    {artist: "Rihanna", song: "Work"},
    {artist: "Justin Bieber", song: "Sorry", image: "justin",streamed: 44332211},
    {artist: "Katy Perry", song: "Roar"},
    {artist: "Cardi B", song: "Bodak Yellow"},
    {artist: "Maroon 5", song: "Sugar"},
    {artist: "Halsey", song: "Without Me"},
    {artist: "Dua Lipa", song: "New Rules"},
    {artist: "Imagine Dragons", song: "Radioactive"},
    {artist: "The Chainsmokers", song: "Closer"},
    {artist: "Sam Smith", song: "Stay with Me"},
    {artist: "Beyoncé", song: "Formation"},
    {artist: "Coldplay", song: "Viva La Vida"},
    {artist: "Sia", song: "Cheap Thrills"},
  ];

const input=document.querySelector('input')
const list=document.querySelector('ul')

input.addEventListener('keyup',()=>{
    list.innerHTML=""
    if(input.value){
        data.forEach((item)=>{
            if (item.artist.toLowerCase().includes(input.value.toLowerCase()) || item.song.toLowerCase().includes(input.value.toLowerCase())){
                const ListItem=document.createElement('li')
                ListItem.innerHTML=`${item.artist}`
                ListItem.style.margin='15px+0'
                ListItem.style.fontSize="20px"
                ListItem.style.padding="10px+20px"
                list.appendChild(ListItem)
            }
        })
    }
})