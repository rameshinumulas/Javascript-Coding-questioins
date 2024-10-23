const givenStr = 'ramesh';

const handleReversString = (useStr) => {
    // return useStr.split('')?.reverse().join('');
    let a = '';
    let strLg = useStr.length;
    for(let b=0; b<useStr.length; b++) {
        a+=useStr[strLg - 1];
        strLg--
    }
    return a;
}


console.log(handleReversString(givenStr));