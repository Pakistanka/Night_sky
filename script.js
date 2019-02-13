const StarSky = {

  Config: {

    nightBack: null,
    top: 0,
    left: 0,
    maxStars: 900,

  },

  init: function() {

    this.Config.nightBack = document.getElementsByTagName('body')[0];
    this.nightSky();
    this.showStars();
  },

  nightSky: function() {
    let createSky = this.Config.nightBack;
    createSky.style.backgroundColor[0] = "darkblue";
  },

  showStars: function() {

    let maxStar = this.Config.maxStars;
    let container = this.Config.nightBack;

    let layer_1 = document.createElement('div');
    layer_1.style.cssText="position:absolute;\
    top:0;\
    left:0;\
    width:100%;\
    height: 100%;\
    background-color: dargblue;\
    background-image: radial-gradient(circle, #051937, #011f49, #00245a, #06286c, #152c7e);\
    ";

    let layer_2 = document.createElement('div');
    layer_2.style.cssText="position:absolute;\
    top:0;\
    z-index: 2;\
    left:0;\
    width:100%;\
    height: 100%;\
    ";
    layer_2.classList.add('wrapper');



      for(let i = 1; i < maxStar; i++) {

        let star = document.createElement('div');

        let left = Math.round(Math.random() * (window.innerWidth - 15))  + 'px';
        let top = Math.round(Math.random() * (window.innerHeight - 15))  + 'px';


        star.style.cssText="width: 10px;\
          height: 10px;\
          border-radius: 5px;\
          position: absolute;\
          background-color: #F3F011;\
          display:block;\
          box-shadow: 0 0 0 rgba(204,169,44, 0.4);\
          ";
          star.style.left = left;
          star.style.top = top;


          container.addEventListener('mousemove', function(e){
            let pageX = e.clientX,
                pageY = e.clientY;

            layer_1.style.transform = 'translateX(' + pageX/1000 + '%) translateY(' + pageY/100 + '%)';
            layer_2.style.transform = 'translateX(' + pageX/1500 + '%) translateY(' + pageY/250 + '%)';

            container.style = 'background-position:' + pageX/2000 + 'px center';
          })


          layer_2.appendChild(star);
      }
    document.body.appendChild(layer_1);
    document.body.appendChild(layer_2);
  },



}

StarSky.init();
