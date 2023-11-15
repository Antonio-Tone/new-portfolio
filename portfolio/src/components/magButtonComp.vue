<template>
    <div>

<button class="hover-effect text-center"><h5>{{ buttonText }}</h5></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
    buttonText: String, // Define a prop for the button text
  },
    mounted() {
      this.initializeHoverEffect();
    },
    methods: {
        initializeHoverEffect(){
            var hoverMouse = function ($el) {
  $el.each(function () {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
    var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

    var attachEventsListener = function () {
      $(window).on("mousemove", function (e) {
        //
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        // cursor
        var cursor = {
          x: e.clientX,
          y: e.pageY
        };

        // size
        var width = $self.outerWidth();
        var height = $self.outerHeight();

        // position
        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        };

        // comparaison
        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        // dist
        var dist = Math.sqrt(x * x + y * y);

        // mutex hover
        var mutHover = false;

        // anim
        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        // reset
        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function (x, y) {
      TweenMax.to($self, 0.4, {
        x: x * 0.7,
        y: y * 0.4,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut
      });
    };
    var onLeave = function () {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4)
      });
    };

    attachEventsListener();
  });
};

hoverMouse($("h5, button"));
        }
    },
  };
  </script>
  
  <style scoped>
  .hover-effect {
    /* display: inline-block; */
    /* position: relative; */
    width:7em ;
    height: 7em;
    
    background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);  
      border-radius: 999px;
    /* margin-left: 150px !important; */
    color: white;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
    /* border: none; */
    color: white;
    cursor: pointer !important;
    border: none;

  }
  h5{
    transform: translateY(-15px);
  }
  .hover-effect:hover{
    animation: outerglow 1s alternate infinite cubic-bezier(0.65, 0.05, 0.36, 1);

  }
  div{
    border: none !important;
  }
  @keyframes outerglow {
  0% {
    box-shadow: 0px 0px 0px #1ce278;
  }
  100% {
    box-shadow: 0px 0px 15px #1ce278;
  }
}

  </style>
  