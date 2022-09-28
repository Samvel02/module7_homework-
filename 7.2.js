const obj = {
    str: 'string',
    num: 27
}

function func (str, num) {
   for(let key in obj){
    if(key == 'string' && 27){
        return true
    } else {
        return false
    }
   }  
}

alert(func(obj))