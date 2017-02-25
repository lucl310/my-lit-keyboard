My Lit Keyboard

You always wanted a mechanical keyboard, but you don't have any money for it! Good thing you're a programmer! So you'll just develop one yourself! :D



Objective

Create an application using HTML text area, JavaScript event listeners, classList, key codes, CSS styling and CSS animations.

Prerequisites

HTML structures and buttons
Basic understanding of JavaScript and DOM
Basic understanding of conditional statements
Requirements

Sublime Text
Chrome Dev Tools
Key Codes
Desired Outcomes

Upon completing this project students should understand:

JavaScript Event Listeners/Handlers
HTML text area
Key Code
Conditionals
CSS animations
classList
Your Challenge

Get started:

Fork and Clone this repo
Create and app.js and styles.css file
Link the app.js and styles.css in the index.html
Step 1 - CSS

In the CSS file use the border property to create borders for each span
Apply width and height as necessary so that the numbers and letters look like a keyboard
Create a class .active for the span and use the color property to set a color of your choice for the span to test the following event listeners below
Step 2 - JavaScript

Function for keydown

Create a function to add the class active to the span using .classList.add('className')
Target each span's ID by using document.getElementById. There is a property on the object called key which has a value of the typed key from the keyboard. Use key to help you target each span's ID
Create an event listener for keydown
Function for keyup

Create a function to remove the class active to the span using .classList.remove('className')
Create an event listener for keyup
Conditionals

Since keyboards have two shift keys, create an If statement to add the class active to both shift keys
Create an If statement so that there are no errors when you type a key that has no span/key on the virtual keyboard
Step 3 - CSS Animations

In the active class use the animation property to add a neon glow to each virtual key
Use keyframes animation to make the spans glow with the text-shadow property.
Remove the color property
Step 4 - HTML

Create a textarea above the virtual keyboard
Style the textarea in the styles.css file
Use h1 to create a header and add a neon glow to the header
Step 5

Style as needed in the styles.css file

Stretch

Create a button that clears all the text in the textarea
Create a button to have all the keys on the virtual keyboard light on and off.
Create a button to have all the keys on the virutal keyboard light up and cycle through different colors.
Create a button so the the keyboard will default to where the keys light up on each keydown.
Create a function to allow tab indentation in the textarea
Resources

classList
Comparison and Logic Operators
Event Listeners
HTML Button Tag
KeyCodes
Shadow Effects
Text Area