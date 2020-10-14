const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeImageItem = ({ url, alt }) => {
  const imageItemEl = document.createElement("li");

  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("alt", alt);
  image.setAttribute("width", 500);

  imageItemEl.append(image);

  return imageItemEl;
};

const elements = images.map(makeImageItem);

const ingredientList = document.querySelector("#gallery");
ingredientList.append(...elements);
