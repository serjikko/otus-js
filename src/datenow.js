function datenow(dateString) {
    const dateNow = new Date(dateString);
    const minutesNow = dateNow.getMinutes() + dateNow.getHours() * 60;
    console.log(`Прошло минут: ${minutesNow}`);
}

datenow('2024-04-22T18:43:39.595Z'); // Пример строки с датой и временем

module.exports = datenow;