const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API:
const count = 10;
const apiKey = '7oziyW4RyeK0ixo9z57S93ek707VIiLknq0bLQBQA6o';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Helper function to setAttributes on DOM elements:
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Creates elements for links and photos and add them to the DOM:
function displayPhotos() {
    // Runs function for each object in photosArray:
    photosArray.forEach((photo) => {
        // Creates <a> element that links to Unsplash:
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Creates <img> for photo:
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // Puts <img> inside <a> element and puts both inside the container element:
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

// Gets photos from Unsplash API:
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch (error){
        //Catch error here:
    }
}


// On load:
getPhotos();