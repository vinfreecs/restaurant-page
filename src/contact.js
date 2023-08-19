export default function contactCard(){
    const content = document.getElementById("content")
    content.innerHTML= "";
    const contact = document.createElement("div")
    contact.classList.add(".contact")
    const name = document.createElement("h1")
    name.textContent = "Rock"
    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    const phone = document.createElement("p")
    phone.textContent="+16 4769336900"
    contact.appendChild(name)
    contact.appendChild(image)
    contact.append(phone)
    content.appendChild(contact)
    console.log("contact")
}