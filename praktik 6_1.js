let audio = document.querySelector('#audio');
let play = document.querySelector('#Playbtn');
let pause = document.querySelector('#Pausebtn');
let loading = document.querySelector('#Loadingbtn');

Playbtn.onclick = function(){
    audio.play()
}

Pausebtn.onclick = function(){
    audio.pause()
}

audio.onoloadstart = function(){
    loading.className='Loading';
}
audio.onprogress = function(){
    loading.className= 'Loading_hidden';
}
audio.onerror =function(){
    alert('ERROR')
}