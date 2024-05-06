function datenow(mockDate) {
    const currentDate = new Date(mockDate);
    const minutesNow = currentDate.getHours() * 60 + currentDate.getMinutes();
    console.log(`Прошло минут: ${minutesNow}`);
    return minutesNow; // Возвращаем количество минут
}

module.exports = datenow;


// function calculateMinutesPassed() {
//     const dateInput = prompt("Enter a date (YYYY-MM-DD HH:mm):");
//     const inputDate = new Date(dateInput);
//     const currentDate = new Date();
    
//     const diffInMilliseconds = currentDate - inputDate;
//     const minutesPassed = Math.floor(diffInMilliseconds / 60000);
    
//     console.log(`Minutes passed since ${dateInput}: ${minutesPassed} minutes.`);
//   }
  
//   calculateMinutesPassed();
