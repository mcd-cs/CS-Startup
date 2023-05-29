# My Website Project:
Paroxysm, a browser-based text adventure.

## Authentication:
Users will be able to log in to return to their place in the game's story, meaning they can pick up the game on any device and keep their progress.

## Database
The website will save user progress based on username and password, as well as a recording of their decisions to see which choices are chosen most often.

## Websocket
Paroxysm will send real-time messages whenever a certain event happens to a user, so you can see whenever another player starts for the first time, restarts, dies, beats the game, or makes any other decision that doesn't spoil the story.

### HTML
The website will have a login screen, a game window, and an about page that are made in HTML.
### CSS
I don't like how modern websites look, so I think I'll base this website's design on an older aesthetic like Windows 95 or Frutiger Aero. Something easy to put together but still stylized in it's own way.
I'll also use CSS to give text animations and styles that I can play with during the game's story.
### JAVASCRIPT
Javascript will be used to parse JSON files containing the game's story, display them in the website's game window, and activate different events based on user choice. Being able to parse JSON means that potentially, users will be able to make their own stories and upload them to the website!

## PREVIEW:
<img width="960" alt="image" src="https://github.com/mcd-cs/CS-Startup/assets/66216150/3d9dd6c1-fc21-40ed-9ad2-e155521d2e17">

This is a very rough image that is subject to change, but it's the most basic layout I had in mind.
---
# UPDATES

## HTML Deliverable:
> **HTML Pages:** Created HTML pages for the login, the game page, and an about page. <br>
> **Links:** Every page has a header that has links to all 3 pages. <br>
> **Images:** I successfully implemented an image into the About page. <br>
> **Login:** The login page is there, it doesn't do anything but it will in the future! <br>
> **Database:** This will be implemented on the game page. <br>
> **Websocket:** This will be implemented on the game page. <br>

## CSS Deliverable:
> **Header, footer, and main content body:** Added those, made them different colors and styles <br>
> **Navigation elements:** Straightened out the navigation part of the header so it's next to the main logo <br>
> **Responsive to window resizing:** The CSS lets it adapt to different screen sizes <br>
> **Application elements:** Focused on making the elements look nice with a coordinated color palette <br>
> **Application text content:** Made sure the text is visible on all pages <br>
> **Application images:** Added a background image (credit: [Makkon](https://www.slipseer.com/index.php?resources/makkon-textures.28/)) <br>

## Javascript Deliverable:
> **Simple game layout:** Added a bare-bones way for the game page to update with user choice <br>
> **Simon deployed:** Added the Simon game from the CS Github repo <br>
> **Websocket and Database:** To be added. The Javascript will be able to create save files for users based on logs of their in-game decisions. These logs will also trigger websocket to broadcast their statistics! <br>

**MORE TO BE ADDED SOON...**
