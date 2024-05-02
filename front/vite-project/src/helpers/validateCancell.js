function getTomorrow(){
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate()+1);
    return tomorrow.toISOString().split("T")[0]
}
function getYesterday(){
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate()-1);
    return tomorrow.toISOString().split("T")[0]
}

console.log(getYesterday());

export {getTomorrow,getYesterday}