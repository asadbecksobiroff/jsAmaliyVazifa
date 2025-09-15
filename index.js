function protectIP(ipv4) {
    let ipArray = ipv4.split('.');
    if (ipArray.length != 4) {
        return "IP noto'g'ri formatda";
    }

    let result = new Object();
    let ipBinary = new Array();
    result.original = ipv4;

    for (let i = 0; i < ipArray.length; i++) {
        ipArray[i] = Number(ipArray[i]);
        if (isNaN(ipArray[i])) {
            return "IP noto'g'ri formatda";
        }

        if (!(ipArray[i] >= 0 && ipArray[i] < 256)) {
            return "IP noto'g'ri formatda";
        }

        ipBinary.push('0'*(8-ipArray[i].toString(2).length) + ipArray[i].toString(2));
    }
    result.protected = ipArray.join('[.]');
    result.binary = ipBinary.join('.');

    return result;
}


function findLastWordLength(txt) {
    let result = new Object();
    result.text = txt;
    txt = txt.trim();
    if (txt.length == 0) {
        return 0;
    }

    let txtArray = txt.split(' ');
    let lastWord = txtArray[txtArray.length-1];
    lastWord = lastWord.replace(".", "");
    lastWord = lastWord.replace("?", "");
    lastWord = lastWord.replace("!", "");
    lastWord = lastWord.replace(",", "");
    let lastWordLength = lastWord.length;

    result.lastWord = lastWord;
    result.length = lastWordLength;
    return result;
}

console.log(protectIP('127.0.0.1'));
console.log(findLastWordLength("Hello world!"));