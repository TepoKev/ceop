import crypto from "crypto";

const iterations = 10000;


async function hashPassword(password: string) {
    var salt = crypto.randomBytes(128).toString('base64');
    var hash = await crypto.pbkdf2Sync(password, salt, iterations, 128, 'sha512');

    return {
        salt: salt,
        hash: hash
    };
}

async function isPasswordCorrect(savedHash: Buffer, savedSalt: string, passwordAttempt: string) {
    var hashAttempt = await crypto.pbkdf2Sync(passwordAttempt, savedSalt, iterations, 128, 'sha512');
    return savedHash == hashAttempt;
}

export {
    hashPassword,
    isPasswordCorrect
}