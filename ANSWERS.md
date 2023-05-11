# Card Printers

#### Name : Siddhant Deshmukh
#### Email: learner.siddhant.deshmukh@gmail.com

#### github repo : https://github.com/siddhant-deshmukh/card-printers
#### deplyed link: https://card-printers.netlify.app/

#

### About WebSite

* I have made this Card Printers website. This is a website for a company who prints invitation card. 
* I have used **Gatsby** for building the app and **TailwindCSS** for styling.
* The website is deployed on **Netlify** free trail.

#

### Can you describe the process you followed to design and develop the website for the fictional small business?
* The website I have made is a very basic frontend website performing simple task. 
* I was also short on time as I was busy in my college assignments but  I have tried my best.
1. First, I choose a business for which I will make the website.
2. Then I downloaded some images for the website. I take help of this https://www.greetingsisland.com/invitations/wedding website.
3. I downloaded some of their wedding cards.
4. Then I create a **Gatsby** project with **TailwindCSS** and **TypeScript**. Download Lobster and Pacifico font from **Google Font** and start making this website.
5. I revise Gatsby topics as I have only used it one or two time before this.
6. And then I started making this Project.
7. And then I deployed it on Netlify.

#


### What programming languages and technologies did you use to build the website?
1. HTML, CSS, JavaScript.
2. Gatsby
3. TypeScript

#


### How did you ensure that the website was responsive and mobile-friendly?
1. I used the Toggle Device Emulation from DevTools of Chromium. This emulation tools allows to adjust screen size. Also have screen size of famous tablets and phones in built.
2. First I made the website for mobile view and then modify it for Desktop view.
3. I am using Tailwindcss so adding responsivity very easy.

#


### Did you face any challenges during the development process, and if so, how did you address them?
1. I don't think that their was that many challenges. I was short of time so I only use technologies that I have already used before.

#


### Can you provide examples of how you used responsive design techniques to make the website look and function correctly on different devices and screen sizes?
1. I am using TailwindCSS for styling. So, first of all I created some custom break points
```
...
screens: {
      '2xl' : '1390px',
      '2md' :'700px',
    }
...
```
2. Now if I add '2md:pb-36' then it will automatically create the following style.
```
@media (min-width: 700px) {
  .\32md\:pb-36 {
    padding-bottom: 9rem/* 144px */;
  }
}
```
3. This reduces headache and makes developing lot easier.
4. In addition to that I have used fixed height and width for any of my components. So, my web application is also flexible enough to adjust for different screen sizes.
  

#


### Can you share any lessons learned or best practices that you followed during the development process?
1. I am using Gatsby so I can use JSX and divide the page into smaller components which I did.
2. Using lazy loading for images.
3. Trying to reduce the initial load time.
4. Also using TypeScript for additional type safety.

