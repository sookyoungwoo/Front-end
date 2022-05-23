window.onload = function(){
    clock();
}

function clock(){
    let today = new Date();
    let todayHour = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = ap(today.getSeconds());

    const watchEl = document.getElementById('watch');
    watchEl.innerHTML=`${todayAmPm}${todayHour}:${todayMin}:${todaySec}`
    windos.setInterval('clock()',1000);

    function ap(h){
        let ampm = Math.floor(h/12);
        if(ampm == 0){
            return 'AM';
        }else{
            return 'PM';
        }
    }
}

function to12(h){
    let hour12 = h % 12;
    
}

function doubleDigit(a){
    if(a>9){
        return a;
    }
    else{
        return '0'+a;
    }
}