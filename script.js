function setVanta(){
    if(window.VANTA && VANTA.NET){
        VANTA.NET({
            el: document.querySelector(".overlay-content"),
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x97ff,
            backgroundColor: 0x0,
            points: 14.00,
            maxDistance: 23.00,
            spacing: 17.00,
            showDots: false
          })
    }
}

window.onload = setVanta;