console.log('Hello');

function Waiter(condition, sec) {
    return new Promise((resolve, reject) => {
            var tout = setTimeout(()=>{
                clearInterval(interval)
                reject({error:'Превышен интервал ожидания'})
            },1000*sec)
            var interval = setInterval(function () {
                if (condition()) {
                    try {
                        clearTimeout(tout)
                        clearInterval(interval)
                        resolve()
                    } catch (e) {
                        reject(e)
                    }
                } else {

                }
            }, 1000)
    })
}


console.log('Before waiter')
var key=0
setTimeout(()=>{
    key = 7
    console.log('Variable set to seven')
},3000)

Waiter(function () {
    return key==7
}, 10).then(() => console.log('Waiter stop')).catch(e => {console.log(e)
    console.log('все печально, не дождались')
})

console.log('waiter...........')

