const numbers: string = '0123456789abcdef';
export const generateNewColor = (): string =>{
    let newColor: string = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random()*16);
        newColor += numbers.at(randomNumber);
    }
    return newColor;
}