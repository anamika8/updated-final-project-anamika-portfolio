# Anamika's Portfolio

Live-link : https://anamika8.github.io/updated-final-project-anamika-portfolio/

## Summary

This personal portfolio is a refactoring of the project done for Portland State's Web Development Course, as part of the `Code Reading and Review` course.

## Refactoring Changes (Before vs After)

### Before refactoring:

1. The navigation bar was not responsive for every screen.
2. The project section of the portfolio was not fully responsive. Since I was unable to use
   the Bootstrap library last time, I couldn't make the carousel container fully responsive.
3. Had to add a javascript file to mimic the feature of the Bootstrap container.

### After refactoring:

1. Added Bootstrap library and re-designed the animated Navigation Panel. This helped me remove unnecessary CSS I had to use in the `style.css` file to make the Navbar animated
2. Added the Carousel-Bootstrap container which helped me remove unnecessary JavaScript file (`carousel-proj-nav.js`) and CSS that was included to provide similar features like the Bootstrap container. This made the project section more responsive for all screens.
3. Fixed the styles of every page in the portfolio to adjust the newly added responsive navbar from the bootstrap library.

## Reference/ Outside Sources

The following outside tutorials were referred to during the creation of this portfolio:

1. Text Animation in Home Page: https://tobiasahlin.com/moving-letters/

2. Navigation Bar: https://getbootstrap.com/docs/4.0/components/navbar/

3. Project Carousel Container: https://getbootstrap.com/docs/4.0/components/carousel/

4. Work Experience Accordion: https://codepen.io/ziadice06/pen/oNvLymv

## Special Features

- The animation of the carousel in the Projects page will stop when the user hovers their mouse over the image. The animation resumes once the mouse cursor leaves the container.

- In the 'Work' section, the details of the Job duties are shown at the bottom of the respective entry when clicked. The details collapses when that entry is clicked again.
