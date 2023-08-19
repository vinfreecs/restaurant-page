export default function card() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const heading = document.createElement("h1");
  heading.textContent = "Bridge 4 Restaurant";
  const image = document.createElement("img");
  image.src = "https://coppermind.net/w/images/Bridge4_Tattoos.svg";
  const matter = document.createElement("p");
  matter.textContent =
    "Hyderabadi biryani (also known as Hyderabadi dum biryani) is a style of biryani originating from Hyderabad, India made with basmati rice and meat (mostly mutton). Originating in the kitchens of the Nizam of Hyderabad, it combines elements of Hyderabadi and Mughlai cuisines.Hyderabad biryani is a key dish in Hyderabadi cuisine and it is so famous that the dish is considered synonymous with the city of Hyderabad.";
  const time = document.createElement("p")
  time.textContent = "24/7"
  document.querySelector("#content").appendChild(heading);
  document.querySelector("#content").appendChild(image);
  document.querySelector("#content").appendChild(matter);
  document.querySelector("#content").appendChild(time);
}
