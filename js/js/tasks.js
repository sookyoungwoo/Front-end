document.addEventListener('DOMContentLoaded', function(){    
    SubmitEvent.disabled=true;
    
    newTask.onkeyup = () => {
        if(newTask.value.length > 0){
            SubmitEvent.disabled = false;
        }
        else{
            SVGNumberList.disabled = true;
        }
    }
    
    document.querySelector('form').onsubmit = () =>{
        const task = newTask.value;
    
        const li = document.createElement('li');
        li.innerHTML = task;
    
        document.querySelector('#tasks').append(li);
    
        newTask.value = '';
    
        submit.disabled=true;
    
        return false;
    }
});

