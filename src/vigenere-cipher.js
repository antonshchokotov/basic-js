class VigenereCipheringMachine {
    constructor(flag = true) {
        this.direct = flag;
    }
    
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }
        const M = [...message];
        const K = [...key];
        while (K.length < M.length) {
            K.push(...K);
        }
        const C = [];
        for (let l of M) {
            if (/[a-z]/i.test(l)) {
                let letter = l.toUpperCase().charCodeAt() - 65;
                let key = K.shift().toUpperCase().charCodeAt() - 65;
                C.push( String.fromCharCode( ( ( letter + key ) % 26 ) + 65 ) );
            } else {
                C.push(l);
            }
        }
        return this.direct ? C.join('') : C.reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error();
        }
        const C = [...encryptedMessage];
        const K = [...key];
        while (K.length < C.length) {
            K.push(...K);
        }
        const M = [];
        for (let l of C) {
            if (/[a-z]/i.test(l)) {
                let encryptedLetter = l.toUpperCase().charCodeAt() - 65;
                let key = K.shift().toUpperCase().charCodeAt() - 65;
                let letter = (encryptedLetter - key) % 26;
                if(letter < 0) letter += 26;
                M.push( String.fromCharCode( letter + 65 ) );
            } else {
                M.push(l);
            }
        }
        return this.direct ? M.join('') : M.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;