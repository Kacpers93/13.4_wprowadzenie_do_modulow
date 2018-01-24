//function formatTime(time) {
//    var hour = Math.floor(time / 3600);
//    var min = Math.floor(time % 3600 / 60);
//    var sec = Math.floor(time % 3600 % 60);
//    return (hour + " h, " + min + " min, " + sec + " sec");
//}

//exports.forTime = formatTime;


function secToHours(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60) - (hours * 60);
    var sec = (time % 60).toFixed(0);
    if (time < 3600) return minutes + 'min. ' + sec + 'sec.';
    else return hours + 'h. ' + minutes + 'min. ' + sec + 'sec.';
}

module.exports = {
    timeCount: secToHours
};