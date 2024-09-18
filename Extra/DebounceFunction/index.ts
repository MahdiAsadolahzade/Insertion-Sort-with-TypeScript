// Implement a Debounce Function

const debounce = (fn: Function, delay: number): Function => {
    let timeoutId : NodeJS.Timeout | null = null

    return (...args:any[]) => {
        if(timeoutId){
            clearTimeout(timeoutId)
        }

        timeoutId= setTimeout(()=>{
            fn(...args)
        },delay)
    }


};


const log =  debounce(() => console.log("Executed"), 1000);
log();
