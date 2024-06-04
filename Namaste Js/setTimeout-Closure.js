

// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
// x();    //after 1 second it will print 1

//now see,
    // function x(){
    //     var i=1;
    //     setTimeout(function(){
    //         // console.log(i);
    //     }, 1000);
    //     console.log("js won't wait for none");
    // }
    // x(); 
//this => [ function(){console.log(i);} ] remembers the "reference" to i; as it forms a closure. and whenever this function goes it takes the reference of i along with it.
//setTimeout takes this function and stores it into a place & attaches the timer to it.
//and once this timer is over(complete), it takes this function and puts this inside a callstack. and it will run.

    function yy(){
        for(var i=1; i<=5; i++){
            setTimeout(function(){
                // console.log(i);
            }, i*1000);
        }
        console.log("hello js");
    }
    yy();
///Output: hello js 6 6 6 6 6 
//Remember:= the function has the refernce of variable i (not the value).
//so when i=1, settimeout will put this function somewhere and attaches the timer to it.
//similarly for i=2,3 ..5 setTimeout will put this function somewhere and attaches the timer to it. and prints 'hello js'.
// when the timer expire and the function was called. 'by this time the REFERENCE of i contains value 6'.
//......if  "let" is used instead of  "var";  It will print the 1 2 3 4 5.  why? => because let has block scope.
//i.e each time when the callback function runs it has its own copy of i with it.
//since let is blocked scope; each time the setTimeout is called, the callback function forms the closure with the new variable itself.

//  without using "let" solve this problem:

    for(var i=1; i<=5; i++){
        function a(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        a(i);
    }


    