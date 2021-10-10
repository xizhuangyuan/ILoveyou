document.getElementsByClassName('disappear')[0].onclick = function(){
        document.getElementById('wrap').setAttribute('class','box')
    }
    setTimeout(() => {
        document.getElementsByClassName('disappear')[0].style.display = 'block';
    }, 15000);
