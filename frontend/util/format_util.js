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

export const formatDate = (dateFrom, dateTo) => {
  const currentDate = new Date(dateTo)
  const prevDate = new Date(dateFrom);
  let time;
  const diffInTime = currentDate.getTime() - prevDate.getTime();

  if (diffInTime / (1000 * 60) < 60 ) {
    time = Math.floor(diffInTime / (1000 * 60))
    return time === 1 ? `${time} minute ago` : `${time} minutes ago`
  } 
  else if (diffInTime / (1000 * 3600) < 24 ) {
    time = Math.floor(diffInTime / (1000 * 3600));
    return time === 1 ? `${time} hour ago` : `${time} hours ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24) < 7 ) {
    time = Math.floor(diffInTime / (1000 * 3600 * 24))
    return time === 1 ? `${time} day ago` : `${time} days ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24 * 7) < 5) {
    time = Math.floor(diffInTime / (1000 * 3600 * 24 * 7))
    return time === 1 ? `${time} week ago` : `${time} weeks ago`
  } 
  else if (diffInTime / (1000 * 3600 * 24 * 7 * 5) < 8 ) {
    time = Math.floor(diffInTime / (1000 * 3600 * 24 * 7 * 5))
    return time === 1 ? `${time} month ago` : `${time} months ago`
  } 
  else {
    time  = currentDate.getFullYear() - prevDate.getFullYear()
    return time === 1 ? `${time} year ago` : `${time} years ago`; 
  }
} 

// const diffInMonth = (dateFrom, dateTo) => {
//   const currentDate = new Date(dateFrom);
//   const prevDate = new Date(dateTo);

//   return currentDate.getMonth() - prevDate.getMonth() + 
//     (12 * (currentDate.getFullYear() - prevDate.getFullYear()))
// }