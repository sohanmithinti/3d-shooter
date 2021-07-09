AFRAME.registerComponent("player-movement", {
    init: function(){
        this.walk()
    }, 
    walk: function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft"){
                var sound2 = document.querySelector("#sound2")
                sound2.components.sound.playSound()
            }
        })
    }
})