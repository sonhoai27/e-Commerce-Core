const delay = (function(){
    let timer: any = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})()

export default delay