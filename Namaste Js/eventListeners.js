//Deep about Event Listeners
//Closures Demo with Event Listeners
//Scope Demo with Event Listners
//Garbage Collection & removeEventListeners.



//this piece of code mean; when js will execute it, it will pick up the element with id "clickMe"
//& it will add a event listener (that event is click).  & when that event will occur it will call the callback function xyz().
// so this is again a callback function xyz, which will be stored somewhere & that will automatically come in our callstack.
//so when this event "click" will occur it will call the callback function xyz() will automatically come in our call stack.
    // let clickMe = document.getElementById("clickMe");
    // clickMe.addEventListener("click", function xyz(){
    //     console.log("button clicked");
    // });


//... Closure + Event Listners.

    // <html lang="en">
    // <head>
    //     <title>Event Listeners</title>
    // </head>
    // <body>
    //     <button id="clickMe">click me</button>
    //     <script src="eventListeners.js"></script>
    // </body>
    // </html>

        console.log("script loaded");
        function a(){
            let count = 0;
            let clickMe = document.getElementById("clickMe");
            clickMe.addEventListener("click", function xyz(){
                console.log("button clicked ",++count," times");
            });
        }
        a();
//debugger on console.log(count);
//call stack-> xyz
//->scope-> closure (a)
// count=1;

//...In Browser
// inspect tool -> Elements -> click on <button id="clickMe">click Me</button>
//(below there is Event Listeners tab) Event Listeners -> click ->
//                                                                button clickMe
//                                                                    ->handler: f xyz() 



//Garbage Collection & removeEventListeners.

//** Imp Interview Question:  Why do we need to Event Listners ???
//   (in large codebase people remove event listners, why do they do that?)
// =>       Event Listeners are heavy (heavy means it takes memory)   
//          whenever we attach event listener, it form a closure, even when we're not executing any of the code but still the memory for closure is not getting free. as we might need this event listener in the future.
//  & suppose our page has 1000s of buttons & event listeners attached, then our page can go a lot of slow.
//   because of these so many closures consuming a lot of our memory for their scopes n all.
// That's why Its good practice to remove the event Listeners.
//  