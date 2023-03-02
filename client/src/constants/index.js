import md5 from 'md5';
// MARVEL API KEYS
export const publicKey = '7c3afcc483a7af21e98b6a285f851f4e';
export const privateKey = '63d723a29bde9a071707c94d63189d0f7a453c2b';
export const timeStamp = Math.floor(Date.now() / 1000);
export const hash = md5(`${timeStamp}${privateKey}${publicKey}`);

// COLORS
export const bgNavbar = '#29011A';
export const primary = '#D3232F';
export const second = '#7C7C7C';

// FONT SIZES
export const sm = '17px';
export const md = '27px';
export const lg = '40px';
