import { encode } from "blurhash";

const loadImage = async (src) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (...args) => reject(args);
        img.src = src;
    });

const getImageData = (image) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
};

export const encodeImageToBlurhash = async (imageUrl) => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return {
        hash: encode(imageData.data, imageData.width, imageData.height, 4, 4),
        width: imageData.width,
        height: imageData.height,
    };
};

