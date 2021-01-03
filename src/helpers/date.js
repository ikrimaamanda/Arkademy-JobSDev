module.exports = {
  formatDate: (date) => {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-') + ' ' +
        [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')
  }
}
