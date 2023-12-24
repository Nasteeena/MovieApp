export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export function timeToValid(time) {
    const hours = Math.floor(time / 60);
    const remainingMinutes = time % 60;
    const formattedTime = `${time + ' min'}  / ${'0' + hours}:${remainingMinutes}`;
    return formattedTime;
}