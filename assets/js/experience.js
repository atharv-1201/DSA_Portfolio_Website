AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/dosh_logo.jpeg",
    place: "Doshaheen Solutions Pvt. Ltd.",
    time: "(May, 2024 - July, 2024)",
    desp: "<li>Worked to migrate company's product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app, to react to different actions performed on AMP page.</li> <li>Created a node module, which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/cognifyz_logo.jpeg",
    place: "Cognifyz Technologies Pvt. Ltd.",
    time: "(Aug, 2024 - Sept, 2024)",
    desp: "<li>Data Preprocessing and Feature Engineering: Performed data cleaning, transformation, and structuring of large datasets to make them analysis-ready. Developed expertise in handling missing data, scaling, and engineering impactful features to elevate model accuracy.</li><li>Model Development and Optimization: Built and optimized machine learning models for regression, classification, and clustering, applying techniques like hyperparameter tuning and model evaluation using metrics such as accuracy, F1 score, and AUC-ROC.</li><li>Data Visualization and Insights Generation: Created interactive dashboards with Matplotlib, Seaborn, and Plotly to convey insights.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2024",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Smart India Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/SIH.png",
    href: "https://www.sih.gov.in/",
  },
  {
    title: "HackNova",
    subtitle: "Participant",
    image: "assets/images/experience-page/nscc_logo.jpeg",
    href: "https://nsccsrm.in/",
  },
  {
    title: "STPI FinTech-Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/ulhacks.png",
    href: "https://wafflehacks.org/",
  },
  {
    title: "IdeaNova",
    subtitle: "Technical Mentor",
    image: "assets/images/experience-page/ideanova_image.jpeg",
    desp: "It is a day long Ideathon organised by The Newton School Of Coding Club, SRM University. Ideas and innovations are collected from 150+ participants. Top 50 teams are shortlisted for the final day, and after evaluating and examining their ideas on the basis of technical and Non-Technical Aspects, they are shortlisted for the pitching their idea to the Panelists.",
    href: "https://nsccsrm.in/",
  },
  {
    title: "PitchTeen",
    subtitle: "Participant",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for Students and non-binary communities in Univarsities, Colleges and High-Schools from all over the world with an aim to create and contribute towards the welfare of the society and alligning with the SDG's by bringing out the best in them.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Participant",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2024 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
