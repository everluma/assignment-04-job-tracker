Answer to the question 

1. getElementById selects a single element using its id. On the other hand getElementByClassName selects multiple elements using class name. 
querySelector selects the first matching element using CSS selector. 
querySelectorAll selects all matching elements.


2. We can create a new element using document.createElement().
Then we can add content using innerText or innerHTML. Then we have to insert it by using appendChild() or append().


3. Event bubbling is a process where an event starts from the target element and then moves up (down to up) to its parent elements.
For example, if we click a button inside a div, the event will 1st trigger the button, then the div, then the body.


4. Event delegation is a technique where we add an event listener to a parent element instead of multiple child element.

It is very useful for professional work. It improves performance. It reduces duplicate event listeners. If we want to added elements dynamically Event delegation help us.


5. PreventDefault() stops the default behavior of an element.

stopPropagation() stops the event from moving to parent elements.