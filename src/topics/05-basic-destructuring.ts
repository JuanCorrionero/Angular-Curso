interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const { song: anotherSong, details } = audioPlayer;

const { author } = details;

// console.log(anotherSong);
// console.log(author);

 const [, , trunks = 'Not Found']: string[] = ['Vegeta','Goku']

console.log(trunks);

export {};
