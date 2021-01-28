const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompts user to select a specific media stream, passes their selection to video element and plays it:
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('check selectMediaStream fx', error);
    }
}

//  Bypasses the ********* and allows us to use the start button to launch the pic-n-pic:
button.addEventListener('click', async () => {
    // Disables the button:
    button.disabled = true;

    // Starts pic-n-pic:
    await videoElement.requestPictureInPicture();

    // Resets the button:
    button.disabled = false;
})

// On load:
selectMediaStream();