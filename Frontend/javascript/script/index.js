// alert("Hello world")

// console.log(76)

// console.log('tony')

// single line comment

/*
    line 1
    line 2
    line 3
*/

/* 
    data : 
        numbers
            0 - 9
            0.0 - 9.9
        alphabets and special characters
            strings
        true/ false
            boolean
*/

// console.log(typeof(7))
// console.log(typeof('hello'))
// console.log(typeof(true))


/* 
    compiler/ interpter : converts the high level lang to low level and low level to high level

    compiler : convert the entire file at once.

    interpreter : convert the line by line code in a file.
*/

/* 
    variable : storage container which stores the data.

    to create a variable we have to follow some rules : 
        1. you can't start a variable name with a number
            don't :   
                1a, 2b, 5
            
            do's : 
                a, b, a1
        2. you can't use a keyword as variable.
        3. you can't use special characters apart from $, _
    
    to define a varible : 
        let
        const
        var
    
    To assign data to variable : 
        we have to use '=' -- assignment operator

        => whatever that is there on the right side will always get stored inside the left side

        syntax : 
            variable = data

*/

// let a = 89

// const b = 90

// console.log(b)

// console.log(a)

// a = 78

// console.log(a)
// console.log(56)

/* 
    assign 
        short-hand 
    maths
        +, -, *, /, %, **
    comp
        <,>,==,!=,>=,<=
    logical (boolean - true or false)
        and &&
            input1  input2  output
            true    true    true
            false   true    false
            true    false   false
            false   false   false
        or ||
            input1  input2  output
            true    true    true    
            false   true    true
            true    false   true
            false   false   false
        not (!)
            input   output
            true    false
            false   true
    uniary
        update (increase/ decrease) by 1

        increment(++)
        decrement(--)

        can only apply on a variable.

        don't 
            5 ++

        do
            a = 5
            a ++
        
        pre
            -- update the value first and then utilize the value
            synax : 
                ++ a

                or 

                -- a
        post
            -- utilize the vlaue and then updates it.

            syntax : 
                a ++

                or

                a --
        
        the updated value will always get stored inside the variable.

    conditional operator : 
        execute a statement based on condition.
        syntax : 
            (condition)? True block : false block
*/

// let a = 5

// console.log(a) //5
// console.log(++ a) //6
// console.log(a ++) //6
// console.log(a) // 7


// let a = 5
// let b = 6

// let result = a + b //11

// // a has be added with value of b --> result --> store inside 'a' variable

// console.log("before replacing a value with result",a)

// // a = a + b

// a += b

// console.log("after replacing a value with result",a)


// console.log(result)


// const username = "sachin@gmail.com"
// const password = "Sachin@1234"

// const db_username = "sachin@gmail.com"
// const db_password = "Sachin@1234"

// const status = (username == db_username && password == db_password)? "login success" : "login failed! Invalid user details"

// console.log(status)

/* 
    1. write a program to find the largest number b/w 2 numbers
    2. write a progran to check if a number is even or odd number
*/

/* 
    control statement : 
        1. conditional statements
                -- can handle multiple conditions and execute a set of statements 

                1. simple if/ if
                    -- will only execute when the condition is true.
                    syntax : 
                        if(condition){
                            //block of statements
                        }
                2. if else
                        syntax : 
                            if(condition){
                                //block of if statments
                            }else{
                                //block of else statement
                            }
                3. if else if
                    syntax : 
                        if(condition){
                            //block of if statments
                        }
                        else if(condition){
                            //
                        }
                        .
                        .
                        .
                        else{

                        }

                4. switch
                    syntax : 
                        switch(input){
                            case value:
                                block of case
                                break
                            case value:
                                block of case
                                break
                            
                            default:
                                block of default
                                break
                        }
        2. loops : 
            loops are used to iterate set of statements n number of times.
                1. for loop
                    syntax : 
                        for(init; condition; update){
                            //block of statements
                        }
                2. while loop
                    syntax : 
                        init
                        while(condition){
                            //block of statements
                            update
                        }
                3. do-while loop
                    syntax : 
                        init
                        do{
                            //block of statements
                            update
                        }while(condition)
*/

// let a = 5

// switch(true){
//     case a > 5:
//         console.log(a,"is greater than 5")
//         break
//     case a==5:
//         console.log(a,"is equal to 5")
//         break
//     case a < 5:
//         console.log(a,"is less than 5")
//         break
//     default:
//         console.log(a,"is not 5")
// }


// if(false){
//     console.log("line 1")
//     console.log("line 2")
//     console.log("line 3")
//     console.log("line 4")
//     console.log("line 5")
//     console.log("line 6")
// }


/* 
    > 90 -- O Grade
    70 - 90 -- A Grade
    60 - 70 -- B Grade
    50 - 60 -- C Grade
    30 - 50 -- D Grade
    < 30 -- Fail
*/

// let marks = 81

// if(marks > 90){
//     console.log("O Grade")
// }else if(marks > 70){
//     console.log("A Grade")
// }else if(marks > 60){
//     console.log("B Grade")
// }else if(marks > 50){
//     console.log("C Grade")
// }else if(marks > 30){
//     console.log("D Grade")
// }else{
//     console.log("Fail")
// }

// const username = "sachin@gmail.com"
// const password = "Sachin@1234"

// const db_username = "sachin@gmail.com"
// const db_password = "Sachin@1234"


// if(username == db_username && password == db_password){
//     console.log("login success")
// }else{
//     console.log("invalid credentials")
// }


// if(username == db_username && password == db_password){
//     console.log("login success")
// }

// if(!(username == db_username && password == db_password)){
//     console.log("invalid credentials")
// }

// if(username == db_username){
//     if(password == db_password){
//         console.log("login success")
//     }

//     if(password != db_password){
//         console.log("invalid credentials")
//     }
// }



// console.log(a > b)
// console.log(a < b)

// console.log(a + b) //
// console.log(a - b) //
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** 10)

// BODMAS

// console.log((1 + 4 ** 2 - 5) + 4 / 2 * 3 + 1)


/* 
    10/3

    3) 10 (3.33333334
        9
    -------
        10
        9
    --------
        1
*/

/* 
    his age --> condition --> display eligible to vote or not
*/

// let age = prompt("Enter your age : ")

// age = Number(age)


// if(age >= 18){
//     console.log("Eligible to vote")
// }else{
//     console.log("Not eligible to vote")
// }

/* 
    init - 0
    condition - (0 - 9) -- init <= 9
    update - init += 1
*/

// for(let init = 10; init <= 9; init ++){
//     console.log("line line line")
// }

// let init = 10

// while(init <= 9){
//     console.log("while")
//     init ++
// }

// init = 10

// do{
//     console.log("do-while")
//     init ++
// }while(init <= 9)

/* 
    2 keywords that are used to control the loop execution
        1. break : Will stop the entire loop and exit from the loop
        2. continue : will skip the iteration and continue the loop execution.

    NOTE : When we are implementing them they will not execute the rest of the lines.
*/

for(let i = 1; i <= 10; i ++){
    if(i == 6){
        continue
    }
    console.log(i)
}