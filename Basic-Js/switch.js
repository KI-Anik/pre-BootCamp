let day = 1;
let dayName;

switch (day) {
    case 1:
        dayName = 'saturday';
        break;
    case 2:
        dayName = 'sunday';
        break;
    case 3:
        dayName = 'monday'
        break;
    case 4:
        dayName = 'tuesday'
        break;
    case 5:
        dayName = 'wednesday'
        break;
    case 6:
        dayName = 'thusday'
        break;
    case 7:
        dayName = 'friday'
        break;
    default:
        dayName = 'invalid'
        break;
}

console.log(dayName)