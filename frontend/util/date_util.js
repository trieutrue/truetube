export const formatVideoShowDate = date => {
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  const obj = new Date(date);
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const formatVideoIndexDate = (dateFrom, dateTo) => {
  const currentDate = new Date(dateTo)
  const prevDate = new Date(dateFrom);
  
  const diffInTime = currentDate.getTime() - prevDate.getTime();
  // debugger
  if (diffInTime / (1000 * 60) < 60 ) {
    return `${Math.floor(diffInTime / (1000 * 60))} minutes ago`
  } 
  else if (diffInTime / (1000 * 3600) < 24 ) {
    return `${Math.floor(diffInTime / (1000 * 3600))} hours ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24) < 7 ) {
    return `${Math.floor(diffInTime / (1000 * 3600 * 24))} days ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24 * 7) < 5) {
    return `${Math.floor(diffInTime / (1000 * 3600 * 24 * 7))} weeks ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24 * 7 * 5) < 8 ) {
    return `${Math.floor(diffInTime / (1000 * 3600 * 24 * 7 * 5))} months ago`
  } 
  else {
    return `${currentDate.getFullYear() - prevDate.getFullYear()} years ago`; 
  }
} 

// const diffInMonth = (dateFrom, dateTo) => {
//   const currentDate = new Date(dateFrom);
//   const prevDate = new Date(dateTo);

//   return currentDate.getMonth() - prevDate.getMonth() + 
//     (12 * (currentDate.getFullYear() - prevDate.getFullYear()))
// }