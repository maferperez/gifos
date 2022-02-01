fetch ("https://api.giphy.com/v1/gifs/search?api_key=U11CfHnhf9zlOH9TXLGYgbXjmOx3mjw9&q=car").then(results)

function results(resultado){
  resultado.json().then(informacion)
}


function informacion(data) {
  console.log(data.data[0].images.preview_gif.url)
  let img=document.createElement("img");
  img.src=data.data[0].images.preview_gif.url;
  img.width="300";
  img.height="300";
  document.body.appendChild(img)
  
}