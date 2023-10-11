//array of images
let dalmation_imagaes = [
    "https://pngimg.com/uploads/dalmatian/dalmatian_PNG14.png",
    "https://i.pinimg.com/originals/34/72/f2/3472f2daa80391bdd6a99a8a8729cf33.png",
    "https://w7.pngwing.com/pngs/967/839/png-transparent-dalmatians-sitting-on-the-ground-pet-animal-dog.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Dalmatian_puppy%2C_four_months.png"
];


window.onload = function() {
    // changes background image
    document.body.style.backgroundImage = `url(${dalmation_imagaes[Math.floor(Math.random() * dalmation_imagaes.length)]})`;

    // changes all images
    const imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * dalmation_imagaes.length)
        imgs[i].src = dalmation_imagaes[randomImg]
    }

    // changes all h1
    const headers = document.getElementsByTagName("h1");
    for (let i = 0; i < headers.length; i++){
        headers[i].innerText = "Dalmations are the best thing ever";
    }

    // changes all h2
    const headers2 = document.getElementsByTagName("h2");
    for (let i = 0; i < headers2.length; i++){
        headers2[i].innerText = "Dalmation domination";
    }

    // changes all h3
    const headers3 = document.getElementsByTagName("h3");
    for (let i = 0; i < headers3.length; i++){
        headers3[i].innerText = "101 Dalmations";
    }

    // changes all p
    const p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++){
        p[i].innerText = "everyone loves dalmations";
    }
   

    // changes all inputs that are submit types
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].type == "submit"){
            inputs[i].value = "Click here for more dalmations";
        }
    }

    // changes every link
    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++){
        links[i].href = "https://www.gettyimages.ie/photos/dalmatian-dog";
        links[i].style.background = "none";
    }


    // changes all buttons
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].innerText = "Click here for more dalmations";
    }


    // changes every list item
    const li = document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++){
        li[i].innerText = "Click here for more dalmations";
    }

    const title = document.getElementsByTagName("title");
    for (let i = 0; i < title.length; i++){
        title[i].innerText = "Dalmation World";
    }

    // changes icons of tabs (sometimes doesn't work)
    let ListOfLinks = document.getElementsByTagName("link");
    for (let i = 0; i < ListOfLinks.length; i++)
    {
        if((ListOfLinks[i].getAttribute("rel") == "icon")||(ListOfLinks[i].getAttribute("rel") == "shortcut icon")||(ListOfLinks[i].getAttribute("rel") == "apple-touch-icon")||(ListOfLinks[i].getAttribute("rel") == "mask-icon"))
        {
            ListOfLinks[i].setAttribute("href", dalmation_imagaes[Math.floor(Math.random() * dalmation_imagaes.length)]);
        }
    }    
}