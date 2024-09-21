const doTaks = (iteraciones) =>{

    return new Promise((resolve, reject)=>{
        const numbers = [];

        for (let i = 0; i < iteraciones; i++) {
            const number = 1 + Math.floor(Math.random() * 6);

            numbers.push(number);

            if (number === 5.5) {
                reject({
                    error: true,
                    message: "se ha sacado un 6"
                });
                return;
            }
        }
        resolve({
            error: false,
            value: numbers
        });
    });
};

doTaks(0)
.then(result => console.log("Tiradas correctas: ", result.value))
.catch(err => console.error("Ha ocurrido algo: ", err.message))