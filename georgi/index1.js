// input string { } [] ""

// 1. the number of opening and closing must be the same
// 2. the last one must be an closing
// 3. very first one must be an opening

// (()(()))

// const input = '()'
const input = '(()(())))'
// const input = ['(', ')']

function validateBracket(input)
{
    const openingStack = []
    const ht = {};
    ht[')'] = '('
    // const counter = 0
    for (let i = 0; i < input.length; i++)
    {
        if (input[i] === '(' || input[i] === '{' || input[i] === '[')
        {
            // counter++;
            openingStack.push(input[i])
        } else if (input[i] === ')' || input[i] === '}' || input[i] === ']')
        {
            if (!openingStack) return false
            // counter--;
            const prevOpeningBracket = openingStack.pop()
            if (ht[input[i]] !== prevOpeningBracket) return false
            // if (counter < 0)
        }
        // return counter === 0
    }
    return openingStack.length === 0
}
console.log(validateBracket(input));

    // ()(()))

    // )))(((

    // ((((

    // time O(n)
    // space O(n)