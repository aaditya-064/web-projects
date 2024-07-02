// fetch("https://jsonplaceholder.typicode.com/users").then((rawResponse) =>{
//     rawResponse.json().then((jsonResponse)=>{
//         const datas = jsonResponse

//         const arr =[]
//         for (let data of datas){
//             const info = {
//                 name: data.name,
//             }
//             arr.push(info)
//         }

//         console.log(arr)
//     })
// }).catch((err)=>{
//     console.log(err)
// })


fetch("https://nepalipatro.com.np/rashifal/getv5/type/dwmy?lang=en").then((rawRespone) =>{
    rawRespone.json().then((jsonResponse)=>{
        // console.log(jsonResponse)
        const horoscope = jsonResponse.np
        // console.log(horoscope)

        const arr = []
        for(let data of horoscope){
            const arrayInfos = {
                type: data.type,
                libra: data.libra
            }
            arr.push(arrayInfos)
            }
            console.log(arr)
            
            const outputResult = document.getElementById("output")
            for (let i = 0; i < arr.length; i ++){
                const pType = document.createElement("p")
                const pLibra = document.createElement("p")
                pType.innerHTML= arr[i].type
                pLibra.innerHTML= arr[i].libra
                outputResult.appendChild(pType)
                outputResult.appendChild(pLibra)    
            }
            
        }).catch((err)=>{
            console.log(err)
    })
})