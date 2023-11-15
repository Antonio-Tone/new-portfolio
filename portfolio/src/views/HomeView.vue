<template>
  <div class="boss">
    <!-- hero section -->

    <div class="main">
      <div class="header">
<div class="skill">
  <h1 class="dev DPP"><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></h1>
  <h1 class="ps DPP"><span>P</span><span>r</span><span>o</span><span>b</span><span>l</span><span>e</span><span>m</span><span>&nbsp;</span><span>S</span><span>o</span><span>l</span><span>v</span><span>e</span><span>r</span>
</h1>
  <h1 class="des DPP"><span>D</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span><span>e</span><span>r</span>
</h1>
  <div class="image vh-100">
    <img src="https://i.postimg.cc/NMqsMGT1/C12-C1-Antonio-Torre-1-removebg-preview.png" alt="">
    <div class="Name">
      <div class="location d-flex justify-content-center">
        <i class="fa-solid fa-location-crosshairs fa-fade"></i>
        Cape Town, South Africa</div>
      <hr class="line">
        <h2 class="AT">Antonio Tone</h2>
      <hr class="line">
      <div class="scroll">
        <p class="m-0">Scroll Down</p>
        <i class="fa-solid fa-angle-down fa-bounce"></i>

      </div>
    </div>
  </div>
</div>
</div>
    </div>
    <!--introduction -->

    <div class="row intro">
      <div class="col-6 text-center d-flex justify-content-start">
        <div class="head">
          Welcome to my digital playground, where pixels meet purpose and
          creativity knows no bounds. Explore the digital tapestry of my work,
          where innovation, design, and passion converge to craft extraordinary
          experiences
        </div>
      </div>
      <div class="col-6 text-center d-flex justify-content-center">
        <p class="sub">
          In the world of web design, my passion for design,<br />
          code, and interaction sets me apart and fuels my <br />
          creative edge.
        </p>
      </div>
      <div class="about d-flex justify-content-center mb-5">
        <hr class="mx-auto mt-5" />
        <router-link to="/about">
        <magnetic class="btn text-center" :buttonText="'About'" />
     </router-link>
      </div>
    </div>
    <!--projects section -->

    <div class="projects">
      <div class="d-flex justify-content-center">
        <button class="toggle" @click="show(1)">Portfolio</button>
        <button class="toggle" @click="show(2)">E-commerce</button>
        <button class="toggle" @click="show(3)">Appliance store</button>
        <button class="toggle" @click="show(4)">BMI</button>
        <button class="toggle" @click="show(5)">Rental</button>
      </div>
      <div>
        <div class="row prod" v-show="visibleElement === 1">
          <p class="options d-flex justify-content-start">Hover to view:</p>
          <div class="col-6">
            <div class="card">
              <img
                class="img"
                src="https://i.postimg.cc/BbZ7zbhk/Screenshot-2023-10-30-144708.png"
                alt=""
              />
              <div class="textBox">
                <div class="d-flex justify-content-center">
                  <a href="https://lighthearted-marshmallow-2d6528.netlify.app"
                  taget="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/W3qHrzWP/output-onlinegiftools.gif"
                        alt=""
                      /></button
                  ></a>
                  <a href="https://github.com/Antonio-Tone/Profile"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/d1SJQh7P/output-onlinegiftools-1.gif"
                        alt=""
                      /></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 work">
            <div>
              <h2 class="prdName">MY FIRST PORTFOLIO</h2>
                <hr class="prodLine-1">
            </div>
            <p class="text-center disc">
              My very first website, created using HTML, Bootstrap, and CSS.
              This portfolio reflects my early foray into web development,
              showcasing my initial projects, skills, and aspirations. It's a
              simple yet meaningful step in my journey towards mastering web
              development.
            </p>
            <div class="d-flex justify-content-center">
              <ul>
                <il><img class="lang" src="https://i.postimg.cc/d3Fm1gn0/icons8-bootstrap-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/wxffjjLy/icons8-css-48.png" alt=""></il>
              </ul>
            </div>
          </div>
        </div>
        <div class="row prod" v-show="visibleElement === 2">
          <p class="options d-flex justify-content-start">Hover to view:</p>

          <div class="col-6">
            <div class="card">
              <img
                class="img"
                src="https://i.postimg.cc/Qt65mdvf/Screenshot-2023-10-30-150020.png"
                alt=""
              />
              <div class="textBox">
                <div class="d-flex justify-content-center">
                  <a href="https://arsites.netlify.app"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/W3qHrzWP/output-onlinegiftools.gif"
                        alt=""
                      /></button
                  ></a>
                  <a href="https://github.com/Antonio-Tone/e-commerce_pg"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/d1SJQh7P/output-onlinegiftools-1.gif"
                        alt=""
                      /></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 work">
            <h2 class="prdName">MY FIRST E-COMMERCE</h2>
              <hr class="prodLine">
            <p class="text-center disc">
              I used CSS to make it look good, Bootstrap to keep it simple, and
              a bit of JavaScript to add some fun. You can browse properties,
              search with ease, and even click around interactive images. It's a
              bit rough around the edges, but I'm proud of what I've created.
              Give it a go and see if you find your dream place
            </p>
            <div class="d-flex justify-content-center">
              <ul>
                <il><img class="lang" src="https://i.postimg.cc/d3Fm1gn0/icons8-bootstrap-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/wxffjjLy/icons8-css-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/FzjrrNQC/icons8-js-48.png" alt=""></il>
              </ul>
            </div>
          </div>
        </div>
        <div class="row prod" v-show="visibleElement === 3">
          <p class="options d-flex justify-content-start">Hover to view:</p>

          <div class="col-6">
            <div class="card">
              <img
                class="img"
                src="https://i.postimg.cc/q7FCSvkq/Screenshot-2023-10-30-150857.png  "
                alt=""
              />
              <div class="textBox">
                <div class="d-flex justify-content-center">
                  <a href="https://appliance-cartel-node.web.app/"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/W3qHrzWP/output-onlinegiftools.gif"
                        alt=""
                      /></button
                  ></a>
                  <a href="https://github.com/cheslynherman/node-fullstack-eomp"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/d1SJQh7P/output-onlinegiftools-1.gif"
                        alt=""
                      /></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 work">
            <h2 class="prdName">GROUP PROJECT</h2>
              <hr class="prodLine">
            <p class="text-center disc">
              Collaboratively, my classmate and I teamed up to create an
              appliance store webpage using Node.js. This project involved
              designing and implementing a comprehensive online platform for
              customers to browse and purchase appliances. We meticulously
              crafted features such as product listings and an efficient
              checkout system, reflecting our dedication to delivering a
              seamless shopping experience.
            </p>
            <div class="d-flex justify-content-center">
              <ul>
                <il><img class="lang" src="https://i.postimg.cc/c4fQtnm6/icons8-api-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/Jn9RL9wY/icons8-nodejs-48-1.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/DwBFZWkX/icons8-mysql-24.png" alt=""></il>
              </ul>
            </div>

          </div>
        </div>
        <div class="row prod" v-show="visibleElement === 4">
          <p class="options d-flex justify-content-start">Hover to view:</p>
          <div class="col-6">
            <div class="card">
              <img
                class="img"
                src="https://i.postimg.cc/k5NgFMBL/Screenshot-2023-10-30-151253.png"
                alt=""
              />
              <div class="textBox">
                <div class="d-flex justify-content-center">
                  <a href="https://willowy-druid-f2607c.netlify.app"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/W3qHrzWP/output-onlinegiftools.gif"
                        alt=""
                      /></button
                  ></a>
                  <a href="https://github.com/Antonio-Tone/bmi"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/d1SJQh7P/output-onlinegiftools-1.gif"
                        alt=""
                      /></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 work">
            <h2 class="prdName">My BMI Calculator Journey</h2>
              <hr class="prodLine">
            <p class="text-center disc">I had a blast creating a BMI calculator with JavaScript. It showed me that coding is not only fun but also incredibly powerful. I loved being creative, solving problems, and seeing immediate results. This project was just the beginning, and I'm excited to explore more in the coding world!</p>
            <div class="d-flex justify-content-center">
              <ul>
                <il><img class="lang" src="https://i.postimg.cc/d3Fm1gn0/icons8-bootstrap-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/wxffjjLy/icons8-css-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/FzjrrNQC/icons8-js-48.png" alt=""></il>
              </ul>
            </div>
          </div>
        </div>
        <div class="row prod" v-show="visibleElement === 5">
          <p class="options d-flex justify-content-start">Hover to view:</p>
          <div class="col-6 d-flex justify-content-start">
            <div class="card">
              <img
                class="img"
                src="https://i.postimg.cc/sXvSnZ7v/Screenshot-2023-10-30-151739.png"
                alt=""
              />
              <div class="textBox">
                <div class="d-flex justify-content-center">
                  <a href="https://capstonepj-3a7db.web.app/"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/W3qHrzWP/output-onlinegiftools.gif"
                        alt=""
                      /></button
                  ></a>
                  <a href="https://github.com/Antonio-Tone/capstone_pj"
                  target="_blank"
                    ><button class="toggle linkBg">
                      <img
                        class="links"
                        src="https://i.postimg.cc/d1SJQh7P/output-onlinegiftools-1.gif"
                        alt=""
                      /></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 work">
            <h2 class="prdName">CAPSTONE</h2>
              <hr class="prodLine">
            <p class="text-center disc">
              My capstone project was a transformative journey where I designed
              and developed a luxury car rental website using Node.js and
              JavaScript. Throughout the process, I not only created a visually
              stunning and functional website but also discovered valuable
              insights about my strengths and weaknesses. This project allowed
              me to hone my skills in web development, particularly in the
              realms of server-side scripting and client-side interactivity. I
              gained a deep understanding of website architecture, database
              management, and user experience design. Overall, my capstone
              project was an enriching experience that enabled me to evolve as a
              developer and tackle the challenges of creating a sophisticated
              online platform for luxury car enthusiasts.
            </p>
            <div class="d-flex justify-content-center">
              <ul>
                <il><img class="lang" src="https://i.postimg.cc/FzjrrNQC/icons8-js-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/c4fQtnm6/icons8-api-48.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/DwBFZWkX/icons8-mysql-24.png" alt=""></il>
                <il><img class="lang" src="https://i.postimg.cc/Jn9RL9wY/icons8-nodejs-48-1.png" alt=""></il>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- testimonials -->

    <section class="holder mx-auto">
      <div class="horizontal_item container">
        <div class="row row-1">
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/PfcVqj5K/Screenshot-2023-11-08-130937.png"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Tara Snell</p>
                <p class="test autotype">
                  "Antonio is one determined ,dedicated team member to have on any team, he gets the job done and always to lend a hand to make sure the whole team are on the same page."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/VL53dhfv/C12-Luke-Evertson-1.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Luke Evertson</p>
                <p class="test autotype">
                  "Antonio is a very fun person to work with and has a great
                  sense of humour.He Is hardworking and disciplined.He could be
                  a role model for many."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/dVNRDW0s/C12-Taahirah-Ismail-1.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Taahirah Ismail</p>
                <p class="test autotype">
                  "He may be a man of few words, but Antonio's hard work and
                  dedication always shine through in whatever he does. You can
                  easily tell he appreciates every opportunity he is given and
                  takes nothing for granted."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/7P5FLcY6/C12-Asiphe-Ndimlana-1.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Asiphe Ndimlana</p>
                <p class="test autotype">
                  "Antonio is very independent. Whenever he struggles with
                  something he would rather first try and figure it out himself
                  before asking for help. He is extremely kind and friendly and
                  turns every person he meets for the first time into his
                  friend."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/DyHztfG2/IMG-9863-1.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Ethan Oliver</p>
                <p class="test autotype">
                  "I am thrilled to share my positive testimonial about my
                  experience with Antonio. From the moment I first met him I was
                  impressed. His dedication to excellence and drive to achieve
                  was evident in every interaction I had with him."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-2 second">
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/7YYT7gdf/Screenshot-2023-05-11-111514.png"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Deno Rautenbach</p>
                <p class="test autotype">
                 " Antonio is a very hardworking individual.He has improved a lot
                  in both his coding aswell as in his problem solving skills. He
                  is an extremely nice person to work with as he is very
                  friendly"
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/d0K2cczD/C12-Ayesha-Galant-Class1-1.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Ayesha Galant</p>
                <p class="test autotype">
                 "Working alongside Antonio on several IT ventures has been an absolute pleasure. His precision-oriented approach coupled with his knack for troubleshooting is highly commendable. He unequivocally embodies talent and commitment in his work ethic."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/mk1J6c6M/Screenshot-2023-07-05-161952.png"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Maxwill Isaacs</p>
                <p class="test autotype">
                  "Antonio is an exceptionally hard worker and always making time
                  to assist anyone who is in need. Also goes the extra-mile when
                  doing anything that has to be done. He is also very confident
                  in his capabilities and never fails to get the Job done"
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/rpZQXwLc/C12-Laiquah-Cotie-2.jpg"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Laiquah Cotie</p>
                <p class="test autotype">
                "Antonio  is an exceptional professional, with deep expertise, dedication, and strong problem-solving skills. His work ethic, clear communication, and collaborative nature make him a remarkable team player. I wholeheartedly recommend him."
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col m-2">
            <div class="horizontal-single-item">
              <div class="d-flex justify-content-center">
                <img
                  class="profile"
                  src="https://i.postimg.cc/3R6GxMds/Screenshot-2023-10-04-154441.png"
                  alt="picture"
                />
              </div>
              <div class="text-center">
                <p class="name mx-auto">Ganiefah Majiet</p>
                <p class="test autotype">
                  "Antonio one, someone who Id definitely recommend. His always positive and willing to help the next person although he himself is busy, his an intelligent and very hardworking person. He is always positive and he always provides everyone with help and motivation"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact section -->

    <section class="contact">
      <div class="d-flex justify-content-center heading">
        <img
          class="profile"
          src="https://i.postimg.cc/y6cxh6tZ/T02-LW4-RMXJQ-U051-ZHJ00-N9-edefadf5b7cb-512.png"
          alt=""
        />
        <h1 class="connect">
          Let's <br /><span class="shift">Connect</span
          ><span class="animate-dot">.</span><span class="animate-dot">.</span>
        </h1>
      </div>
      <div class="d-flex justify-content-center">
        <hr class="hr" />
        <router-link to="/contact"><magnetic class="switch" buttonText="Contact" /></router-link>
      </div>
      <div class="d-flex justify-content-center">
        <span class="info">Antoniotone815@gmail.com</span
        ><span class="info">065 851 3653</span>
      </div>
      <div class="row footer">
        <div class="col-6 general">
          <div class="">
            <div class=""><span>Version:</span></div>
            <div class="">2023© Edition</div>
          </div>
        </div>
        <div class="col-6 socials">
          <div class="">
            <div class=""><span>Socials:</span></div>
            <div class="wrapper d-flex justify-content-center p-0">
              <a
                href="https://www.linkedin.com/in/antonio-tone-220925281"
                target="_blank"
                class="link"
                >Linkdin</a
              >
              <a href="" class="link">Facebook</a>
              <a href="" class="link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import _ from "lodash";
// import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import magnetic from "../components/magButtonComp.vue";
export default {
  components: {
    magnetic,
  },
  data() {
    return {
    
      visibleElement: 1,
      lenis: null,
    };
  },
  mounted() {
    this.autoType();
    this.initialize();


    gsap.registerPlugin(ScrollTrigger);
    const container = this.$el.querySelector(".holder");
    const row2 = this.$el.querySelector(".holder");
    const itemsRow1 = gsap.utils.toArray(".row-1 .flex-col");
    const itemsRow2 = gsap.utils.toArray(".row-2 .flex-col");
    const totalWidth = (itemsRow1.length + itemsRow2.length) * 300;

    gsap.to(itemsRow1, {
      xPercent: -100 * (itemsRow1.length - 1),
      ease: "linear",
      duration: 3,
      scrollTrigger: {
        start: "center center",
        trigger: container,
        pin: false,
        pinSpacing: false,
        scrub: 5,
        snap: 0.5 / (itemsRow1.length - 1),
        end: `+=${totalWidth}`,
      },
    });

    gsap.to(itemsRow2, {
      xPercent: 100 * (itemsRow2.length + 1),
      ease: "linear",
      duration: 3,
      scrollTrigger: {
        start: "center center",
        trigger: row2,
        pin: false,
        pinSpacing: false,
        scrub: 5,
        snap: 0.5 / (itemsRow2.length + 1),
        end: `+=${totalWidth}`,
      },
    });


  },

  methods: {
    show(elementNumber) {
      this.visibleElement = elementNumber;
    },
    autoType() {
  this.$nextTick(() => {
    const textElements = document.querySelectorAll(".autotype");

    textElements.forEach((textElement) => {
      const originalText = textElement.textContent;
      let i = 0;
      
      function typeText() {
        const intervalId = setInterval(() => {
          textElement.textContent = originalText.slice(0, i);
          i += 3;
          if (i > originalText.length) {
            clearInterval(intervalId);
            setTimeout(() => {
              // Reset the text and call typeText again after a delay
              
              i = 0;
              setTimeout(typeText, 20000); // Adjust the delay as needed
            }, 10000); // Adjust the delay between loops as needed
          }
        }, 100); // Adjust the interval to control the typing speed
      }
      
      typeText(); // Start the typing animation
    });
  });
},

initialize(){
    this.setInitialStates();
    this.header();
   },
   setInitialStates(){
    gsap.set(' .dev span', {
        opacity: 0,
      });
    gsap.set('.skill .ps span', {
        opacity: 0,
      });
    gsap.set('.skill .des span', {
        opacity: 0,
      });
   },
   header(){
    
const tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".skill",
  }
})
tl.to(".skill .dev span",{
  opacity: 1,
  ease:'expo.out',
  stagger:0.04,
});
tl.to(".skill .ps span",{
  opacity: 1,
  ease:'expo.out',
  stagger:0.04,
});
tl.to(".des span",{
  opacity: 1,
  ease:'expo.out',
  stagger:0.04,
});


   }
  },  
};
</script>
<style scoped>
.main {
  position: relative;
  min-height: 100vh !important;
}
.header{
    width: 100%;
     background-color: #0bc863;
    height: 100vh;
    position: relative;
  }
.skill{
height: 100%;
width: 100%;
z-index: 0;

}
.dev{
  font-size: 10rem;
  transform: translateX(60px);
  position: absolute;
  /* color: #414345; */
  color: aliceblue;
}
.ps{
  font-size: 10rem;
  transform: translateX(220px) translateY(180px);
  position: absolute;
  word-spacing: 120px;
  color: #53585d;


}
.des{
  font-size: 10rem;
  transform: translateX(920px) translateY(340px);
  position: absolute;
  color: aliceblue;

}
.image{
  z-index: 20;
  position: absolute;
  transform: translateX(32em) translateY(128px);
  width: 100%;
  min-height: 100vh !important;

}

.Name{
  position: absolute;
  min-width:100% !important;
  z-index: 25 !important;
  transform: translateX(-32em) translateY(-220px);
  text-align: center !important;
}
.AT{
  font-size: 5em;
}
.location{
  transform: translateX(-42em);
}
.fa-fade{
  font-size: 13px;
  margin: 6px;
}
.line{
  width: 100% !important;
}
.scroll{
  transform: translateY(-13px);
}
.intro {
  width: 100% !important;
  top: 900px !important;
  padding: 120px;
}
.head {
  font-size: 1.7em !important;
  display: block !important;
}
.sub {
  font-size: 1em;
  display: block !important;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
.work {
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
}
hr {
  position: relative;
  width: 55% !important;
}
.about {
  position: relative;
}
.btn {
  position: absolute;
  z-index: 3;
  bottom: -60% !important;
  left: 65%;
}
.toggle {
  margin: 5px;
  padding: 5px;
  width: 100px;
  border-radius: 30px;
  color: aliceblue;
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
    
  );
  transition: 1s ease-in-out;
  border: none !important;
}
.toggle:focus{
  background: #6190E8;  
background: -webkit-linear-gradient(to right, #A7BFE8, #6190E8); 
background: linear-gradient(to right, #A7BFE8, #6190E8);
  color: white;
  animation: outerglow 1s alternate infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
.prdName{
  color:
  rgb(16, 16, 16) !important;
  margin-bottom: 0 !important;
}
.prodLine{
  width: 50% !important;
}
.prodLine-1{
  width: 100% !important;
}
.lang{
  height: 25px;
  margin-right: 3px;
}
.prod {
  padding: 100px;
}
.options{
  transform: translateX(20px) translateY(-20px);
}
.profile {
  margin-top: 4px;
  height: 45px;
  width: 45px;
  border-radius: 999px;
  animation: outerglow 1s alternate infinite cubic-bezier(0.65, 0.05, 0.36, 1);
}
@keyframes outerglow {
  0% {
    box-shadow: 0px 0px 0px #1ce278;
  }
  100% {
    box-shadow: 0px 0px 15px #1ce278;
  }
}

.test {
  font-size: small;
}

.container {
  max-width: 100em;
}
.autotype{
  font-size: 14px;
}
.horizontal-single-item {
  height: 210px;

}
.disc{
  font-size: 1.2em;
}
.wrapper {
  padding: 20px;
}
.flex-col {
  background: #232526;  
background: -webkit-linear-gradient(to right, #414345, #232526); 
background: linear-gradient(to right, #414345, #232526); 

  padding: 20px;
  height: 250px;
  width: 360px;
  text-align: center !important;
}
.links {
  height: 30px;
}
.linkBg {
  background-color: transparent !important;
}

.card {
  width: 600px;
  height: 285px;
  background: #313131;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.2s ease-in-out;
}
.holder {
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.row-1 {
  width: 200vw;
}
.row-2 {
  width: 200vw;
  transform: translateX(-12%);
}

.img {
  border-radius: 20px;
  width: 600px;
  height: 285px;
  position: absolute;
  transition: 0.2s ease-in-out;
  z-index: 1;
}

.textBox {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: 0.2s ease-in-out;
  z-index: 2;
}

.textBox > .text {
  font-weight: bold;
}

.textBox > .head {
  font-size: 20px;
}

.textBox > .price {
  font-size: 17px;
}

.textBox > span {
  font-size: 12px;
  color: lightgrey;
}

.card:hover > .textBox {
  opacity: 1;
}

.card:hover > .img {
  height: 100%;
  filter: blur(7px);
}
.card:hover {
  animation: anim 3s infinite;
}

@keyframes anim {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

.card:hover {
  transform: scale(1.04);
}

.contact {
  background: rgb(28, 29, 32);
  height: 760px;
}
.heading {
  transform: translateX(-350px) translateY(120px);
}
.connect {
  font-size: 5rem;
  margin-left: 10px !important;}
.heading > .profile {
  height: 75px;
  width: 75px;
  border-radius: 999px;
  transform: translateY(100px) translateX(75px);
}
.shift {
  margin-left: 90px;
}

.hr {
  transform: translateY(200px);
  width: 65% !important;
}
.switch {
  transform: translateY(160px) translateX(-290px);
  z-index: 3;
}
.info {
  transform: translateY(160px) translateX(-290px);
  margin-right: 2rem;
  border: 1px solid white;
  padding: 15px;
  border-radius: 30px;
  transition: 2s ease-in-out;
}
.info:hover {
  background-color:#14AE5C;
  cursor: pointer !important;
}
.footer {
  transform: translateY(300px) !important;
}
.general {
  transform: translateX(150px);
  display: flex;
  flex-direction: column;
  align-items: start;
}
.socials {
  transform: translateX(-150px);
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
}
.link {
  text-decoration: none;
  color: white;
  margin-right: 5px;
  transition: 1s ease-in-out;
  padding: 5px;
}

.link:hover {
  border-right: 1px solid white;
  border-left: 1px solid white;
  background-color: lightblue;
}

@keyframes animate {
  40%,
  60% {
    left: calc(100% + 4px);
  }
  100% {
    left: -13px;
  }
}

.animate-dot {
   opacity: 0;
   animation: animateDot1 1s linear infinite;
}
.animate-dot:nth-child(2) {
   animation: animateDot2 1s linear infinite;
}


.animate-dot:nth-child(3) {
   animation: animateDot3 1s linear infinite;
}

@keyframes animateDot1 {
   0%   {opacity: 0; }
   20%  {opacity: 0;}
   30%  {opacity: 1;}
   90% {opacity: 1;}
}

@keyframes animateDot2 {
   0%   {opacity: 0; }
   35%  {opacity: 0;}
   45%  {opacity: 1;}
   90% {opacity: 1;}
}

@keyframes animateDot3 {
   0%   {opacity: 0; }
   50%  {opacity: 0;}
   60%  {opacity: 1;}
   90% {opacity: 1;}
}
</style>
