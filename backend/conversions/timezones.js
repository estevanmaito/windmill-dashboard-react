module.exports.toUTC = (string) => {
    const date = new Date(string);
    return date.toUTCString();
}

module.exports.fromUTC = (string, timezone) => {
    const date = new Date(string);
    if(isNaN(timezone)){
        return date.toLocaleDateString('en-US', { dateStyle: 'long', timeStyle: 'short', timeZoneName: timezone});
    }
    else{
        return date.toLocaleDateString('en-US', { dateStyle: 'long', timeStyle: 'short', timeZone: timezone});
    }
}

console.log(this.fromUTC('Sat, 12 Dec 2020 01:57:05 GMT', 'HKT'));