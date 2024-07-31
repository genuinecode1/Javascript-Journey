



// ************************************* Execute Code + Call Stack ********************

// JAVASCRIPT EXECUTION CONTEXT
                //    -> GLOBAL EXECUTION CONTEXT (THIS)
                //    -> FUNCTION EXECUTION CONTEXT
                //    -> EVAL EXECUTION CONTEXT

                //     PHASES ->
                //    -> MEMORY CREATION PHASES (CREATION PHASE) //memory allocate to variables
                //    -> EXECUTION PHASE 

            // example
            let val1 = 10
            let val2 = 5
            function addNum(num1, num2){
                let total = num1+num2
                return total
            }

            let result_1 = addNum(val1, val2)
            let result_2 = addNum(10, 2)
             
            // phases for this example

            // 1 ) Global Phase(this)

            // 2 ) Memory Phase

            //            val1 -> undefined
            //            val2 -> undefined
            //            addNum -> definition
            //            result1 -> undefined
            //            result2 -> undefined 

            //  3) Execution Phase
                       //for every function memeory phase and execution phase repeat seperately and return to parenet execution phase

            // once code complete global phase must be terminated