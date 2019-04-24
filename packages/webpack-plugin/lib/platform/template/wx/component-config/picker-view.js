const TAG_NAME = 'picker-view'

module.exports = function ({ print }) {
  /**
   * @type {function(isError: (number|boolean|string)?): void} aliLog
   * @desc - 无法转换时告知用户的通用方法，接受0个或1个参数，意为是否error级别
   */
  const aliLog = print('ali', TAG_NAME)
  return {
    test: TAG_NAME,
    event: [
      {
        test: /^(change)$/,
        ali (eventName) {
          const eventMap = {
            'change': 'Change'
          }
          return eventMap[eventName]
        }
      },
      {
        test: /^(pickstart|pickend)$/,
        ali: aliLog()
      }
    ]
  }
}