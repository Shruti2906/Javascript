
/*
    Default Js
JavaScript:
    -Synchronous Programming Language (step by step execution)
    -Single threaded language
            (only Js engine is slower as it is single threaded but only Js engine alone is not used anywhere, everywhere js is used with runtime whether of browser runtime or runtime like NodeJs)

Execution Context
    -execute one line of code at a time
    -console.log 1->1    
    -console.log 2->2    

 Each Operation waits for the last one to complete before executing

Call Stack          Memory Heap

----------------------------------------------------------------------------------------------

Blocking Code                vs       Non Blocking Code

Block the flow of program             Does Not Block execution
    |                                       |
Read File Sync                        Read File Async

---------------------------------------------------------------------------------------

                         Event Loop


    Js Engine                               |                Web API
                                            |
        Memory Heap                         |   DOM API
                                            |   Set Timeout------------------
        Call Stack- fn                      |   Set Interval                |
                    fn                      |   fetch()---          Register Call Back
                    global                  |             |                 |
                        ^ ^                 |             |promise          |        
                        | |                 |             |                 |
                        | --------------------------------|                 |
                        |                                                   |
                        |                                                   |
                        |                                                   |
                        -------------------------------------| CB | CB |<---|                                                                                                                                                        
                                   add to call stakck        Task Queue                
                                                                            



        Web API is given by Browser, If Web API is given then we have access to DOM
        Instead of Web API sometimes Environment is also given eg NodeJs

*/