module.exports = function(){
    var cradle = require('cradle')
    return new cradle.Connection({ auth: { username: 'Mark', password: 'xyzzy'} }).database('mealster')
}()