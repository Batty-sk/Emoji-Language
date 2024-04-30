let input = `
a 👉 24
b 👉 34
📺 'hello world'
🤔🤜98>86🤛{
d👉a}

`

const isLiteral=(token)=>{
    let regex = /^(['"]).*\1$/;
    if(/^\d+$/.test(token) && Number.isSafeInteger(parseInt(token, 10)) && regex.test(token)){
        return true
    }
    return false
}

const isKeyword=(token)=>{
    const keywords = ['📺','👉', '🤔', '🤜', '👄'];
    return keywords.includes(token);
} 

const isOperator=(token) =>{
    if (token == '+' || token =='*' || token =='/' || token == '%' || token =='-')
    {return 1}

    return 0
}

const isIdentifer=(token) =>{
// if it starts with a number it means its not an identifier also so its an error
try{parseInt(token[0])
return 0
}
catch(Error){
    return 1 
}
}
const Tokenization = (input) =>{
    let pointer = 0
    let token  = ""
    let Tokens = [{}]
    line = 0
    let is_STR = 0
    

const printStatement = (argument,token)=>{
    if(token?.keyword){
        if (token.keyword == '📺'){
            //collect the arguments , iterate the next chars until \n was found or ; was found
        }
        return false
    }
}
const inputStatement=(argument,token) =>{
    if(token?.keyword){
        if (token.keyword == '👄'){
            // if after removing the keyword and identifier if anything remains it means error
            //collect the arguments   
        }
        return false
    }
}

const assignmentStatement=(argument,token) =>{
    let count = 0

    Object.keys(token).map((val,index)=>{
        if(index == 0 && val == 'identifier'){
            count+=1
        }
        else if(index == 1 && token[val] == '👉'){
            count+=1
        }
    })
    if (count == 2){
        argument [0] = ''
        return 1
    }
    return 0
}
const declarationStatement=(token)=>{
    if (Object.keys(token).length == 1 && token?.identifier ){
        return 1
    }
}
const transpile=(tokens)=>{
    //declaration statement
    //assignment statement
    //print statement
    let transpiled = []
    let argument = []
    tokens.map(token=>{
        if(declarationStatement(token),token){
            transpiled.push(`let ${token?.identifier}`)
        }
        else if(assignmentStatement(argument,token)){
            transpiled.push(`let ${token?.identifier} = ${argument[0]}`)
        }
        else if(printStatement(argument,token)){
            transpiled.push(`console.log(${argument[0]})`)
        }
        else if(inputStatement(argument,token)){
            transpiled.push(`let ${argument[0]} = console.input()`)
        }
        else if(ifStatement(argument,token)){
            //for if Statement i have to use the recursion , for also handling the nested if.
        }
        else{
            console.log('Error 69: Unkown Statement !')
        }
    })

} 
    while(pointer < input.length){
        if (input[pointer] == `'` || input[pointer] == `"`){
            is_STR= !is_STR
        }
        if (input[pointer] == " " || input[pointer] == '\n' && !is_STR){
            if(isLiteral(token)){
                Tokens[line] = {...Tokens[line],literal:token}
            }
            else if(isKeyword(token)){
                Tokens[line] = {...Tokens[line],keyword:token}
            }
            else if(isOperator(token)){
                Tokens[line] = {...Tokens[line],operator:token}

            }
            else if(isIdentifer(token)){
                Tokens[line] = {...Tokens[line],identifier:token}

            }
            else{
                throw new Error('Error! Token has no type')
            }
            
            if (input[pointer] =='\n'){
                line+=1
            }
            token = ""
        }
        else{
            token +=input[pointer]
        }
       
    }

}