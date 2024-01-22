


export default function randomGenerator() {

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomString = Array.from({ length: 10 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    return randomString;
};

