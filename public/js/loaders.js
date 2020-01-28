export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            //set a delay so no matter what image loads first
            setTimeout(resolve,2000, image)
            //resolve(image);
        });
        image.src = url;
    });
}

export function loadLevel(name) {
    return fetch(`/levels/${name}.json`)
    .then(r => r.json());
}
