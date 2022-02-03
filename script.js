function search_gif(){

    let valor= document.getElementById("searchbar").value
    let previos= document.getElementById("sugerencias")
    previos.innerHTML="";
    console.log(valor)
   fetch ("https:/api.giphy.com/v1/gifs/search/tags?api_key=U11CfHnhf9zlOH9TXLGYgbXjmOx3mjw9&q="+valor).then(results)
    function results(resultado){
        resultado.json().then(informacion)
      }
    function informacion(data){
        console.log(data.data[0]);
            for (let i= 0; i< data.data.length; i++) {
                const gif =data.data[i];
                const gifDiv=document.createElement("div");
                gifDiv.innerHTML=gif.name;
                previos.appendChild(gifDiv);
            }
    }
    console.log("hola soy mafe")
}

