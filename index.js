function key(params){
  var config = {
  forceLowercase: params && params.forceLowercase !== undefined ? params.forceLowercase : true,
  forceUppercase: params && params.forceUppercase !== undefined ? params.forceUppercase : true,
  numbers: params && params.numbers !== undefined ? params.numbers : true,
  specialChars:params && params.specialChars !== undefined ? params.specialChars : true,
  length: params&&isFinite(params)?params:false&&params.length!==undefined?params.numbers:8,
};
    const forceLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const forceUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    const specialChars = "!@#$%^&*()_-+=[]{};:'\"<>,.?/\\|".split("");
    let id=""
    while(true){
      const min = 0;
      const max = 3;
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      if(randomValue==0&&config.forceLowercase==true){
        const randomIndex = Math.floor(Math.random() * forceLowercase.length);
        id=id+forceLowercase[randomIndex]
      }
      else if(randomValue==1&&config.forceUppercase==true){
       const randomIndex = Math.floor(Math.random() * forceUppercase.length);
        id=id+forceUppercase[randomIndex]
      }
      else if(randomValue==2&&config.numbers){
        const randomIndex = Math.floor(Math.random() * numbers.length);
        id=id+numbers[randomIndex]
      }
      else if(randomValue==3&&specialChars){
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        id=id+specialChars[randomIndex]
      }
      if(id.length>=config.length){
        break;
      }
    }
    return id
    
  
}
module.exports = { key };
