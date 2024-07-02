function itCallsback(link, cb){
    let script = document.createElement("script")
    script.src= link;
    script.onload= ()=>{
        console.log("script loaded" + link)
        cb();
    }
    document.body.appendChild(script);
}   

function hello() {
    alert('sup brokie')
}

function goodnight(){
    alert("good night brokie")
}

itCallsback("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)