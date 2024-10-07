type Music = {
    name: string;
    author: string;
    description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        name: "Shape of You",
        author: "Ed Sheeran",
        description: "Um hit pop dançante.",
        urlAudio: "/musics/shape_of_you.mp3", 
        image: "https://upload.wikimedia.org/wikipedia/en/4/42/Shape_of_You.jpg"
    },
    {
        name: "Blinding Lights",
        author: "The Weeknd",
        description: "Uma música com uma batida contagiante.",
        urlAudio: "/musics/blinding_lights.mp3", 
        image: "https://upload.wikimedia.org/wikipedia/en/1/17/The_Weeknd_-_Blinding_Lights.png"
    },
    {
        name: "Rolling in the Deep",
        author: "Adele",
        description: "Uma poderosa balada de amor.",
        urlAudio: "/musics/rolling_in_the_deep.mp3", 
        image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Rolling_in_the_Deep.png"
    }
];
