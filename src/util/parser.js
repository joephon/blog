export class Parser {
  
  static query(search) {
    const obj = {}
    search.split('?')[1].split('&').forEach(item => {
      const [key, value] = item.split('=')
      obj[key] = value
    })
    return obj
  }

  static paths(pathName) {
    return pathName.split('/')
  }
}

export class History {

  static listen(a, b, c) {
    console.log(222, a, b,c)
  }
}

