
//Event Loop
//Call back Queue
//Microtask Queue
//How Everything is Working inside the browser.



/*
js is synchronous single threaded language.
It has 1 call stack and it can do only 1 thing at a time.
this call stack is present inside the js engine. and all the code of js is executed inside this call stakc.
    -if anything wents inside the call stack it quickly executes it.(waits for non)
    but, what if we want execute something after some point of time??
    -> we cannot do that because, whatever comes inside call stack it simply executes it.
    -> to achieve this

=========================================

***********........... Web APIs ............**********

* Browser
    Browser is the most remarkable featire in the history of man kind.
    -the browser has js engine
    -it also has local storage.
    -you can have a timer inside browser
    -browser can make connection to the servers. also after getting reponse from server it can display in on the UI. 
    -also has accesses like blutooth, location etc.


    if in the js code which is running inside the call stack, we need access to all of these features of the browser.
    eg. 
        suppose we need access to the timer.
        suppose we need access to thE page beign rendered(UI). or localstorage or Urls or blutooth..etc.
    to access them; we need to have some connection, the js engine has to have some way to access them.

        To Access All Those SuperPowers, we Need "Web API."

   * some of the web APIs:
        -seTimeout()
        -DOM APIs
        -fetch()
        -LocalStorage
        -console
        -Location
        
    BROWSER gives us(js program) the access to all of these features via web APIs.
    eg
        we get access to -DOM Tree by DOM APIs.
                        Timer by DOM setTimeout.
                        fetch gives us power to make connections to the other servers like external servers.

    .. We get all of this inside the call stack because of the "GLOBAL OBJECT" ..

  What is Global Object ??
=>Its window object (in case of browsers).
So, browser gives js engine access to all browser functionalities through a keyword know as "window".

    so, if you want the access to the timer inside your js code, you have to do something as window.setTimeout();
        if you want the access to the localstorage inside your js code, you have to do window.localStorage();
        if you want the access to the log something inside the console, you have to do window.console.log();
      & because window is the global object and setTimeout etc is present inside the global object(i.e global scope) you can access it without 'window' keyword.

* So, the flow is:=>
*     //this is how js gets access to all of the browser functionalities.
*"""""""" call stack(js program) -> window(Global Object) -> Web APIs -> browser functionalities .....'''''''

-------------

console.log("hello js");
above line will basically calls the console(web API) -> and this internaly makes a call to log something inside the console.

So, you can access the consoe or do console.log because of the "console" web API and this api is plugged through "window" to your code.

-------------

setTimeout(function cb(){
    console.log("call Back");
}, 1000);
console.log("end");

timstamp: 14.00

this setTimeout()(which is window.setTimeout()) it given us access to the time functionality of the browser.
and it takes the callback function along with some time(eg. 1000 sec).

so, when we pass the callback function to the setTimeout() is basically registers a callback. 
    & because of the delay given along with callback it also starts the timer of the browser.
    & js code moves to the next line, it does not wait.

    as soon as the time expires, the call back function needs to be executed.
    //so to run it, we need it inside the call stack.
    BUT,
        It cannot directly go into the call stack; then it goes into the call stack ??
      => It will go to the call stack thriugh the "CallBack Queue".

      So, when the timer expires the callback function is put inside the CallBack Queue.

**     "Event Loop" acts like a Gatekeeper, and it checks whether we have something inside the callback queue, & if we have something it just pushes it into the call stack.

.... So, The Flow IS :=> 
        As the 'timer expires' -> 'callBack function' is pushed in 'CallBack Queue' -> 'Event Loop' check callBack queue and push the Callback function in 'Call Stack' -> and the callback fucntion inside the call stakc is run line by line.

-------------------

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb(){
    console.log("callBack");
})
console.log("End");

    whenever we run the js code, EC is created & pushed inside the call stack. and the code is executed line by line.
    at line console.log(), it calls the web API is provides access to the console & prints on the console.

    What is addEventListener??
  => Its again a functionality given by the 'browser' to the 'js' through the 'window object' in form of a 'web API'.
     so, whenever we do 'document.getElementById()' its calling the 'DOM API' which intern fetches something from the DOM.
     this addEventListener also registers a callback on an event(here click event).
So,
    -> Registering the callback:- inside the web APIs environment the callback function(cb()) will be registered & an event is attached to it. 
    -> js code executes next lines, js waits for none.  
    -> now the program execution is finished but the 'Event Handler' i.e our callback function will stay in the web api environment(registered) untill we explicitly remove the event listener or close the browser.
        so this registred call back method just sits in the web environment in the hope that someone will call it.
    -> When user clicks on button; this cb() is pushed inside the 'CallBack Queue' and waits here till its turn to get executed.
    -> event loop then push it inside the call stack and it gets executed.

Event Loop:
    -It has only one job which is to continuously monitor the 'call stack' as well as the 'callBack Queue'.

CallBack Queue, Why do we need it?
(we can directly push the callbacks from web environment to call stack, then why this callback queue?)
=> suppose user clicks on the button5 times back to back then this call back function will be pushed inside the callback queue 5 times one after another.

    ->CallBack Queue is also know as "Taak Queue".

------------------------------------
......Fetch

console.log("start");

setTiemout(function cbT(){
    console.log("CB SetTimeout")
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix");
});

console.log("End");

Execution:-
    -> console.logs "start"
    ->cbT() is registered in web API's environment and timer of 5000ms starts.
    ->fetch() is again a web API that used to make network calls.
    ->fetch also registers the cbF into web API's environment.
    -> now in web environment, cbT() is waiting for timer to get expire & cbF is waiting to fetch data from the server.
    -> fetch makes call to netflix server, which returns data back to the fetch() & once we get the data the cbf() is now ready to be executed.
    -> now, the call back function cbF() is pushed inside the "MicroTask Queue".
    ->'Event Loop' check the call stack and gives chance to callbacks inside microtask queue & callback queue to execute.

    ->Say, we got response from the netflix server but we're still executing the code(suppose these are 1000s of lines of code).
        so we've the cbF() callback function in microtask queue waiting to be executed but we are still running the remaing code in our program.
        meanwhile the timer also expires; cbt() is pushed in callback queue.
        Remember, Its the js doing one thing at a time, But browser can do multiple things at a time.
      The job of Event Loop is to contineously keep checking if the call stack is empty or not, if it is empty schedule the callback function for execution.
    -> when the whole program executes, call stack is empty, event loop will push cbF() in call stack. (as it has higher priority over cbT())
    -> as soon as cbF() finish execution event loop will put cbT() inside the call stack.

* MicroTask Queue:
    ->"Its similar to the CallBack Queue but it has a higher priority."
    functions inside the microtask queue will execute first & functions inside callback queue will execute later.
    -> what can come iside it: all the callback functions which comes through promises, will go inside microtask queue.
        & there is something known as mutation observer, it keeps on checking whether there is some mutation in the DOM Tree or not.
        if there is some mutation in the DOM Tree, it can execute some call back function.
        -call back functions which come through promises.
        -mutation observer.
            goes inside the microtask queue.

    but all the other functions such as:
        -callback functions from setTimeout
        -callback functions from DOM APIs like event Listeners etc
            all goes inside "CallBack Queue/Task Queue"


"STARVATION" of the taks inside CallBack Queue could happen!!!!
****** Read About it.


/*/


// but why executes such way , why only one thread???////
