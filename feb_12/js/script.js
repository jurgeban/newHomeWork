let url = "https://jsonplaceholder.typicode.com/photos"

fetch(url) 
.then((res) => res.json()) 
.then((data) => {
  let arr = data.filter((e) => e.albumId == 35);
  console.log(arr)
  render(arr)
})

//----------

const wrapper = document.querySelector('.wrapper');


const render = (arg) => {
   arg.forEach((e) => {
      const cardElem = document.createElement('div');
      const image = document.createElement('img');
      image.src = e.url;
      image.classList.add('pic');

      const h1 = document.createElement('h1');
      h1.innerText = e.title;

      cardElem.classList.add('user_card');
      cardElem.append(h1)
      cardElem.append(image)

      wrapper.append(cardElem);
   }) 
}




