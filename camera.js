// Get elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const context = canvas.getContext('2d');

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing the camera: ", err);
    });

// Capture image
captureButton.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    console.log('Image captured:', dataURL);

    // Optionally, you can download the captured image
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'captured_image.png';
    link.click();
});
