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
        1. you can't start a variable  with a number
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


// const user = "sachin@gmail.com"
// const password = "Sachin@1234"

// const db_user = "sachin@gmail.com"
// const db_password = "Sachin@1234"

// const status = (user == db_user && password == db_password)? "login success" : "login failed! Invalid user details"

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

// const user = "sachin@gmail.com"
// const password = "Sachin@1234"

// const db_user = "sachin@gmail.com"
// const db_password = "Sachin@1234"


// if(user == db_user && password == db_password){
//     console.log("login success")
// }else{
//     console.log("invalid credentials")
// }


// if(user == db_user && password == db_password){
//     console.log("login success")
// }

// if(!(user == db_user && password == db_password)){
//     console.log("invalid credentials")
// }

// if(user == db_user){
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

// for(let i = 1; i <= 10; i ++){
//     if(i == 6){
//         continue
//     }
//     console.log(i)
// }

//to store more than 1 value inside a variable

/* 
    Admin dashboard : contact form in website

    Arjun

    Arun

    Gowtham

    Govind

    Salem

    Friday

    Nova

    single variable --> 

    Array.
        -- collection of data which can be assigned to a single variable.
        Syntax : 
            [data,...]

        -- index values -- 0 - (n-1)

        insertion
            start
                array[0] = value
                move all the values towards the next index
                    0 -> 1, 1 -> 2, 2 -> 3
            end
                array[size] = value
            in-between
                1. find the index place and then whatever values are present in and after the index place has to move towards right side.
        deletion
        search
        methods :
            length -- used to return the length/ size of an array.
                syntax : 
                    array.length
            
            insert : 
                1. push -- will add data at the end of array.
                    syntax : 
                        array.push(data)
                2. unshift -- will add the data at the start of an array.
                    syntax : 
                        array.unshift(data)
                3. splice -- will add data in-between the array.
                    syntax : 
                        array.splice(index, no.of elements to delete, data)
            Delete : 
                1. pop -- will remove data from the end of an array
                    syntax : 
                        array.pop()
                2. shift -- will remove data from the start of an array
                    syntax : 
                        array.shift()
                3. splice -- will remove data that is in-between array.
                    syntax ; 
                        array.splice(index, deleteCount)
            Searching : 
                1. indexOf -- It will search for that valuue that we provide and if the value is present then it will say return the index value if not returns -1.
                    syntax : 
                        aray.indexOf(data)
                2. at -- it will return the data/ value that is present at the given index
                    syntax : 
                        arrayName.at(index)
            
            sort : will helps us to sort the array.
                syntax : 
                    arrayname.sort()
            join : will join the entire array into a string
                syntax : 
                    arrayName.join("characterToJoin")
            reverse : will reverse the entire array
                syntax : 
                    arrayName.reverse()

                
            
*/           

// let  arrayName= ["John Smith", "Tim Joe", "Joseph"]

// console.log(arrayName.length) //3
// console.log(arrayName)

// // [.length] = 'Steve Smith' //overriding

// arrayName[arrayName.length] = 'Steve Smith' 

// //  ['John Smith', 'Tim Joe', 'Joseph', 'Steve Smith', "XYZ"]

// console.log(arrayName[1])

// console.log(arrayName)
// console.log(arrayName.length) //4

// arrayName.push("Harry Potter")
// console.log(arrayName)

// arrayName.unshift("Goorg")
// console.log(arrayName)

// arrayName.splice(3, 0, "Ben Tennison", "Nira", "Bentley")
// console.log(arrayName)

// arrayName.pop()
// console.log(arrayName)

// arrayName.shift()
// console.log(arrayName)

// console.log(arrayName.indexOf('Ben Tennison'))
// console.log(arrayName.at(5))
// console.log(arrayName.includes("Ben Tennison"))
// console.log(arrayName.sort())
// console.log(arrayName.join('-'))
// console.log(arrayName.reverse())


/* 
    strings : 
        collection of character(a-z, spcl, digits) and immutable (can't change or modify)
        -- We have to wrap the character in b/w "" or '' or `` --> Strings

        concat : combining multiple strings together to form a single string.
            '+'
        placeholder : adds the data of a variable inside the string.
            ${variableName}
        
        methods : 
            length : will return the size of the string
                syntax ; 
                    strVarname.length
            toLowerCase() : will convert all the string characters to lower case
                syntax : 
                    strVarname.toLowerCase()
            toUpperCase() : will convert all the string characters to upper case
                syntax : 
                    strVarname.toUpperCase()
            charAt() : will return the character that is present at the given index.
                syntax : 
                    strVarname.charAt(index)
            concat() : will combine two string together
                syntax : 
                    mainStr.concat("combineStr")
            startsWith() : will check wether the given string started with a certain character or word.
                syntax : 
                    strVarname.startsWith("char/word")
            endsWith() : will check wether the given string ended with acertain character or word.
                syntax : 
                    strVarname.endsWith("char/word")
            trim() : will remove the extra space at the start and end of the string.
                syntax : 
                    strVarname.trim()
            includes() ; will return true or false based upon the string that we provided to check.
                syntax : 
                    strVarname.includes("string")
            replace() : will replace the string that too which it encounters first.
                syntax : 
                    strVarname.replace('findStr', 'replaceStr')
            replaceAll() : will replace the entire strs if the given string matches inside the org. string
                syntax : 
                    strVarname.replaceAll('findStr', 'replaceStr')
            padEnd() : will add content to the string at the end, when the length didn't satisfied.
                syntax : 
                    strVarname.padEnd('length', 'replacementChar')
            padStart() : will add content to the string at the start, when the length didn't satisfied.
                syntax : 
                    strVarname.padStart('length', 'replacementChar')
            split() : will divide the string based on the identifier(character, alpha, word). It will return us a list of divided string.
                syntax : 
                    strVarname.split(identifier)
*/

// let name = "Tony"

// name = 'Banner'

// name = `Gowtham`

// let name = "Ben Tennison"
// let age = 14
// let gender = "male"

// // const statement = "My name is "+name+". My age is "+ age+". I am "+ gender
// let statement = `My name is ${name}. My age is ${age}. I am ${gender}`

// statement[11] = 'G'

// console.log(statement)

// console.log(statement.length)

// console.log(statement.toLowerCase())
// console.log(statement.toUpperCase())
// console.log(statement.charAt(66))
// console.log(statement.concat(" . Harry potter and the multi-verse"))
// console.log(statement.startsWith('my'))
// console.log(statement.endsWith('my'))
// console.log(statement.trim())
// console.log(statement.includes("Ben Ten"))
// console.log(statement.replace("My", "His"))
// console.log(statement.replaceAll("My", "His"))
// // Ex : LISXXXXXXXM
// // ex : *******5643

// let phone = "1"

// console.log(phone.padEnd(10, '_'))

// // I have been in mary jones till my marriage
// // 'I have been in ', 'ary jones till ', 'y ', 'arriage'

// console.log(statement.split("m"))

// console.log(statement)

/* 
    within a range 1- 10/100/1000 -- loops

    Function : 
        function is a block of reusable code.

        steps : 
            1. we have to use function keyword to create a function
                syntax :   
                    function functionName(){
                        //block of code
                    }
            NOTE : When creating a function name follow the same rules that we are using to create variable
            2. To call the function we have to use functionName()
            3. To receive the value we have to use the parameter (variable which stores the value which was passed at the calling function part).
                syntax : 
                    function functionName(parameter,...){
                        //block of code
                    }
            4. Default parameter (optional): 
                A parameter which will have a default value which will be used when we didn't pass any value at the time of calling the function.
                    syntax : 
                        function functionName(parameter=defaultValue){
                            //block of code
                        }
            5.  To return value from the function we always use keyword return inside the function.
                    syntax : 
                        function functionName(parameter=defaultValue){
                            //block of code
                            return value
                        }
            NOTE : whenever we are returning a value we can return only one value for a function
*/  

// function isEvenOrOdd(newNumber=89){
//     if(newNumber % 2 == 0){
//         console.log(newNumber, "is even number")
//     }else{
//         console.log(newNumber,"is odd number")
//     }

//     let a = 5
//     let b = 7

//     let c = a + b

//     console.log(c)

//     return c
// }

// let functionValue = isEvenOrOdd()
// console.log(functionValue)
// console.log("statement1")
// console.log("statement1")
// console.log("statement1")

// isEvenOrOdd()

// isEvenOrOdd(34)

// console.log("statement1")
// console.log("statement1")
// console.log("statement1")

// isEvenOrOdd()

/* 
    Functions are treated as values.

    by using function keyword : 
        syntax ; 
            function(){
                //block of code
            }

    Arrow Function : 
        syntax : 
            () => {
                //block of code    
            }
*/

// function sample(){
//     console.log("sample line here")
// }

// const test = function(){
//     console.log("test function called")
// }

// const dummy = () => {
//     console.log("dummy function called")
// }

// console.log(sample)

// sample()
// test()
// dummy()

/* 
    function as a value.

    callback function : 
        A function which will be called inside another function.
        
        Timing functions : 
            These functions use time to perform a task.

                1. setTimeout
                    When the given time is out. Then it is going to perform the task.
                        syntax : 
                            setTimeout(callback, time in ms)
                2. setInterval

*/

// function sample(){
//     console.log("sample function statement")
// }

// function mainFunction(callback){
//     console.log("This is a main function")

//     callback() //calling the callback function here
// }

// mainFunction(sample)

// console.log("line sample")
// console.log("line sample")
// console.log("line sample")

// setInterval(sample, 1000)

// console.log("line sample")
// console.log("line sample")
// console.log("line sample")
// console.log("line sample")

// for(let i = 1; i <= 100000; i ++){
//     console.log("line sample")
// }

/* 
    array methods : 
        1. map : 
            used to create a duplicate array from the base array. while duplicating it we can modify the data. In order to store the data we have to return the value.
            syntax : 
                arrayName.map(callbackFn)

                function callbackName(value, index, array){

                }
        2. filter : 
            used to filter to filter the data from the array based on a condition. It will create a array and the array is going to be different the base array. In order to store the data inside the new array we have to return true or false. true -- store | false -- not to store
                syntax : 
                    arrayName.filter(callbackFn)

                    function callbackName(value, index, array){

                    }
        3. forEach : 
            Used to iterate the array. The iterations happens based on the data present inside the array not on the index values.
            
            syntax : 
                arrayName.forEach(callbackFn)

                function callbackName(value, index, array){

                }
        4. find : 
            used to find the data inside the array. If the data is found then the data is going to be returned.
                syntax : 
                    arrayName.find(callbackFn)
        5. reduce : 
            combine all the values inside an array into a single value. 
                syntax : 
                    arrayName.reduce(callbackFn)

                    function callBackFn(acc, curr, index, array){

                    }
*/

// let a = [1,2,3,4,5] //101

// a[10] = 50


// let b = a //take a seperate location. 102 -- stores the reference memory of a [101]

// console.log(b)

// b = a.map(value => {
//     return value + value
// }) // replacing the [] with the updated array from the a -- 102.

// for(let i = 0 ; i < a.length; i ++){
//     if(a[i]){
//         b[i] = a[i]
//     }else{
//         continue
//     }
// }

// let b = a.filter((value) => {
//     return value % 2 == 0
// })

// let b = a.find((value) => {
//     return value == 17
// })
// -
// let b = a.reduce((prev, curr, index, array) => {
//     console.log(`prev = ${prev}`)
//     console.log(`curr = ${curr}`)
//     console.log(`index = ${index}`)
//     console.log(`array = ${array}`)

//     return prev + curr
// })

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)

// // a[2] = 33

// console.log(a)
// console.log(b)

// b.forEach((value) => {
//     console.log(value)
// })

// for(let i = 0; i < a.length; i ++){
//     console.log(`data = ${a[i]}, index = ${i}, array = ${a}`)
// }

// a.forEach((data, index, array) => {
//     console.log(`data = ${data}, index = ${index}, array = ${array}`)
// })

/* 
    spread and rest operator : (...)
        spread Operator : 
            Used to spread the data of an array
            syntax : 
                ... arrayVariable

        rest operator/ parameter : 
            it is used to handle the unexpected args in a function

            syntax : 
                function functionName(...parameterName){
                    //code here
                }
*/

// function sample(a, ...b){
//     console.log(a)
//     console.log(b)
// }


// sample(11)

// sample(11,12,13,14)

// let a = [1,2,3,4,5]

// let b = [11,12,13,...a]

// console.log(a)
// console.log(b)


/* 
    setTimeout : 
        syntax : 
            setTimeout(callbackFn, time(ms))
    setInterval : 
        syntax : 
            setInterval(callbackFn, time(ms))
*/

// let count = 0

// const id = setInterval(() => {
//     count ++
//     console.log("This is set timeour function")
//     if(count == 5){
//         console.log("clearing... interval")
//         clearInterval(id)
//     }
// }, 5000)

// console.log(id)

/* 
    object : 
        will collection of data which stores data in key pair value. 
            syntax : 
                {
                    key : value,
                    .
                    .
                    .
                    key : () => {

                        }
                }
        To access the data inside an object we have to use 'objectname.keyName'
*/

// const student = {
//     name : "rahul",
//     age : 14,
//     class : 9,
//     phone : 9876543231
// }

// student.email = "rahul@email.com"

// console.log(student)

console.log(document)

// document.writeln("<h1>Hello this is a javascript content</h1>")

/* 
    selectors in javascript : 
        We select the existing HTML elements using the method. The selected element will be in form of object.
        tag selector : 
            getElementsByTagname('tagName')
        class selector : 
            getElementsByClassname('className)
        id selector ; 
            getElementById('idName')
        
        querySelector : 
            All rounder which is used to select an element based on tagName, className and Id. It will always returns the first element.

            querySelector('tag/ .class/ #id')
        
        querySelectorAll : 
            It return the collection.
            querySelectorAll()
*/

// console.log(document.getElementsByTagName('p'))

/* 
    insert a text inside an element.
        innerText and innerHTML are used to handle the content inside an element.
        innerText -- if it finds any html code it will consider as a text
        innerHTML -- if it finds any html code it will consider it as html code
*/

// const root = document.getElementById('root')

// console.log(root)

// root.innerHTML = "This is inserted by Javascript."

// let error = prompt("Enter a error status")

// console.log(error)

// if(error.toLowerCase() == 'true'){
//     root.classList.add('error')
//     root.classList.remove('success')
// }else{
//     root.classList.remove('error')
//     root.classList.add('success')
// }


/* 
    Event Listeners : 
        --> They will listen for a certain event.
        --> To implement the event listener we need to have a function which executes a task whenever the event is generated.

        addEventListener(eventType, callbackFn)
*/

// function sample(event){
//     console.log("Sample function called", event)
// }

// function test(){
//     console.log("test function called")
// }

// const para1 = document.getElementById('para1')


// para1.addEventListener('mousemove', sample)
// para1.addEventListener('mousemove', test)