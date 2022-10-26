// let songs = [new Audio('musics/mislitoe.mp3'),new Audio('musics/dynamite.mp3'), new Audio('musics/shapeof.mp3'),new Audio('musics/bhardojholi.mp3'),new Audio('musics/kesariya.mp3'),new Audio('musics/terimitti.mp3') ];

const maxsong = 6;
let songs =[];

for(let i=1;i<=maxsong;i++){
    songs.push(new Audio(`musics/${i}.mp3`));
}

function stopAll(){
    if(maxsong==0) return;
    for (let i=0;i<songs.length;i++){
        songs[i].pause();
        songs[i].currentTime =0;
    }
}

function play(x){
    stopAll();
    songs[x-1].play();
}
let sum=[]
for(let i=0;i<=100;i++){
    if(i%2==0){
         sum = sum+i; return;
    }
    i++;
    console.log()
}