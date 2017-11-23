function Hex2Dec (input) {
    function HexFinder(input) {
        
        switch (input) {
            case 'A': return 10; 
            case 'B': return 11; 
            case 'C': return 12; 
            case 'D': return 13; 
            case 'E': return 14; 
            case 'F': return 15;
            default: return +input;
        }
    }
    let result = 0;
    for (let i = input.length - 1; i >= 0; i -= 1) {
        result += HexFinder(input[i]) * Math.pow(16,input.length - 1 - i);
    }
    console.log(result);
}
Hex2Dec('1AE3'); //6883
Hex2Dec('4ED528CBB4'); //338583669684