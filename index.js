module.exports = function chatRobot(question) {
  return Array.prototype.reduce.call(question, (c, v) => c + (v == '我' ? '你' : v == '你' ? '我' : v), '').replace(/\?$|吗\?$|没\?$/, '!')
}