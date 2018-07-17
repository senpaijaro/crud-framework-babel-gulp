export default function AutoBind(pattern=/.*/, base=Object) {
  return class AutoBind extends base {
    constructor() {
      super()
      var cls = this.constructor
      var methods, methodName
      while (cls !== AutoBind) {
        methods = Object.getOwnPropertyNames(cls.prototype)
        for (var i in methods) {
          methodName = methods[i]
          if (methodName.match(pattern) !== null && typeof this[methodName] === 'function') {
            this[methodName] = this[methodName].bind(this)
          }
        }
        if (cls === Object) {
          break
        } else {
          cls = cls.__proto__
        }
      }
    }
  }
}
