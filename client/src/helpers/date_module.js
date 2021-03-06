export function dateConversion(ISODate, format) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const dateArray = []
    const date = new Date(ISODate);
    // console.log(Date.parse(ISODate))
    
    let dateObj = {
      y:  date.getFullYear().toString().slice(-2),
      m: months[date.getMonth()],
      d:   date.getDate()
    }
  
    if (format) {
      format = format.split(',')
      format.forEach((l) => {
        dateArray.push(dateObj[l])
      })
      return dateArray
    } else {
      for (let i in dateObj) {
        dateArray.push(dateObj[i])
      }
      return dateArray
    }
  }
  
    export function tabHandler(e) {
      if (e.keyCode === 9) {
        e.preventDefault()
        let boxV = e.target.value
        let start = e.target.selectionStart
        let end = e.target.selectionEnd
        e.target.value = boxV.substring(0, start) + "\t" + boxV.substring(end) + "&ensp;" 
        start = end = start+1
        }
    }
  
    export function guidGenerator() {
      var S4 = function() {
         return (((1+Math.random())*0x10000)|0).toString(8).substring(1);
      };
      return (S4() + "-" + S4());
  }
  