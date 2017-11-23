function Hex2Dec (input) {
    function HexFinder(number) {
        
        switch (number) {
            case 'A': return 10; 
            case 'B': return 11; 
            case 'C': return 12; 
            case 'D': return 13; 
            case 'E': return 14; 
            case 'F': return 15;
            default: return +number;
        }
    }
    let result = 0;
    let hexStr = input.toString();
    let foundHex;
    let power;
    for (let i = hexStr.length - 1; i >= 0; i -= 1) {
        foundHex = HexFinder(hexStr[i]);
        power = Math.pow(16,hexStr.length - 1 - i);
        result += foundHex * power;
    }
    console.log(result);
}
Hex2Dec('1AE3'); //6883
Hex2Dec('4ED528CBB4');
Hex2Dec('FE'); //338583669684
//