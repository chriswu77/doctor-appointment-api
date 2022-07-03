exports.getDateWithoutTime = (date) => {
    const year = date.getFullYear()
    const monthIndex = date.getMonth()
    const day = date.getDate()

    const dateWithoutTime = new Date(year, monthIndex, day)

    return dateWithoutTime
}
