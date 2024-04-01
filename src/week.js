function getDayOfWeek(year, month, day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateObj = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    return dayOfWeek; 
}
module.exports = getDayOfWeek;
