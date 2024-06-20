const addDateSuffix = (date) => {
    const lastChar = date.toString().charAt(date.toString().length - 1);
    const ordinalSuffix = ['st', 'nd', 'rd'].includes(lastChar) || 'th';
    return `${date}${ordinalSuffix}`;
  }

  module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
    const months = {
      0: monthLength === 'short'? 'Jan' : 'January',
      1: monthLength === 'short'? 'Feb' : 'February',
      2: monthLength === 'short'? 'Mar' : 'March',
      3: monthLength === 'short'? 'Apr' : 'April',
      4: monthLength === 'short'? 'May' : 'May',
      5: monthLength === 'short'? 'Jun' : 'June',
      6: monthLength === 'short'? 'Jul' : 'July',
      7: monthLength === 'short'? 'Aug' : 'August',
      8: monthLength === 'short'? 'Sep' : 'September',
      9: monthLength === 'short'? 'Oct' : 'October',
      10: monthLength === 'short'? 'Nov' : 'November',
      11: monthLength === 'short'? 'Dec' : 'December',
    };

    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
    const dayOfMonth = dateSuffix? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours() % 12 || 12;
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const periodOfDay = dateObj.getHours() >= 12? 'pm' : 'am';

    return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
};