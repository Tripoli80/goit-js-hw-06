const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const makeGaleryList = ({ url, alt }) => {
  const li = document.createElement("li");
  const image = document.createElement("img");
  li.classList.add("picture-item");

  image.classList.add("picture");
  image.src = url;
  image.alt = alt;

  li.append(image);
  return li;
};
const myList = images.map(makeGaleryList);

document.querySelector(".gallery").append(...myList);
