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
  },

  showStars: function() {

    let maxStar = this.Config.maxStars;
    let container = this.Config.nightBack;

    let layer_1 = document.createElement('div');
    layer_1.classList.add('layer_1');

    let layer_2 = document.createElement('div');
    layer_2.classList.add('wrapper');



      for(let i = 1; i < maxStar; i++) {

        let star = document.createElement('div');
        star.classList.add('star');

        let left = Math.round(Math.random() * (window.innerWidth - 15))  + 'px';
        let top = Math.round(Math.random() * (window.innerHeight - 15))  + 'px';

        star.style.left = left;
        star.style.top = top;


        let starColor = function(){
          let letters = 'ABCDE'.split('');
          let color = '#';
          for (let j = 0; j < 3; j++) {
            color += letters[Math.floor(Math.random() * letters.length)];
          }
          return color;
        }

        star.style.backgroundColor = starColor();
          // container.addEventListener('mousemove', function(e){
          //   let pageX = e.clientX,
          //       pageY = e.clientY;
          //
          //   layer_1.style.transform = 'translateX(' + pageX/1000 + '%) translateY(' + pageY/100 + '%)';
          //   layer_2.style.transform = 'translateX(' + pageX/1500 + '%) translateY(' + pageY/250 + '%)';
          //
          //   container.style = 'background-position:' + pageX/2000 + 'px center';
          // })


          layer_2.appendChild(star);
      }
    document.body.appendChild(layer_1);
    document.body.appendChild(layer_2);
  },



}

StarSky.init();
