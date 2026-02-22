1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
    getElementById : Selects one element by it's unique id.
    Example : document.getElementById("myId");

    getElementsByClassName : Selects all elements with a specific class name.
    Example : document.getElementsByClassName("myClass");

    querySelector : Selects the first element that matches a CSS selector.
    Example : document.querySelector("selector");

    querySelectorAll : Selects all elements that match a CSS selector.
    Example : document.querySelectorAll("selector");
----------------------------------------------------------------------------------------------------------------

2. How do you create and insert a new element into the DOM?
Answer:
    To create and insert a new element into the DOM, JavaScript gives us 3 main steps:
    Step 1: Create the Element
        const newDiv = document.createElement("div");

    Step 2: Add Content
        newDiv.className = "box";

    Step 3: Insert the Element into the DOM
         document.body.append(newDiv);

----------------------------------------------------------------------------------------------------------------  
3. What is Event Bubbling? And how does it work?
    Answer:
        When you click a child element, the event also happens on its parent, then grandparent, and so on.

        it work 3 step :
            1. Capturing Phase (top → down)
            2. Target Phase (actual clicked element)
            3. Bubbling Phase (bottom → up)

----------------------------------------------------------------------------------------------------------------
4. What is Event Delegation in JavaScript? Why is it useful?
    Answer:
        Event Delegation is a technique where you attach a single event listener to a parent element instead of 
        adding separate listeners to multiple child elements.

        Advantage of Event Delegation
            1. Better Performance
            2. Works for Dynamic Content
            3. Cleaner Code
            4. Memory Efficient

----------------------------------------------------------------------------------------------------------------

5. What is the difference between preventDefault() and stopPropagation() methods?

        Answer:

        preventDefault() :
            Stops the default browser behavior of an element. It does not stop the event from bubbling.

        stopPropagation() :
            Stops the event from bubbling up (or capturing down) the DOM tree. 
            It does not stop default browser behavior

----------------------------------------------------------------------------------------------------------------
