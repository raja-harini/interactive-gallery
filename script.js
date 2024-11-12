// script.js

// Reference to the image container
const imageDiv = document.getElementById('image');
const originalImageUrl = ''; // Leave empty if no background image
const originalText = "Hover over an image below to display here."; // Original text

function upDate(previewPic) {
    // Check if previewPic.src is valid
    if (!previewPic.src) {
        console.error("Image source not found for:", previewPic);
        return;
    }
    
    // Set background image and text to previewPic's src and alt attributes
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Reset background image and text
    imageDiv.style.backgroundImage = `url('${originalImageUrl}')`;
    imageDiv.innerHTML = originalText;
}
