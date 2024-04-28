let input = `
a = 24
b = 34
📺 'hello world'
`

const isLiteral=(token)=>{
    let regex = /^(['"]).*\1$/;
    if(/^\d+$/.test(token) && Number.isSafeInteger(parseInt(token, 10)) && regex.test(token)){
        return true
    }
    return false
}

const isKeyword=(token)=>{
    const keywords = ['📺', '🤔', '🤜', '👄'];
    return keywords.includes(token);
    
}
const Tokenization = (input) =>{
    let pointer = 0
    let token  = ""
    let Tokens = []
    let is_STR = 0 
    while(pointer < input.length){
        if (input[pointer] == `'` || input[pointer] == `"`){
            is_STR= !is_STR
        }
        if (input[pointer] == " " || input[pointer] == '\n' && !is_STR){
            switch(token){
                case isLiteral(token):
                    break;
                case isKeyword(token):
                    break;
                case isOperator(token):
                    break;
                case isIdentifer(token):
                    break;  
            }
            token = ""
        }
        else{
            token +=input[pointer]
        }
       
    }
}