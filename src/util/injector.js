export class Injector {
  static route(path) {
    return (target) => {
      target.route = path

      console.log('path:', path, 'target:', target.prototype.componentDidMount)
    }
  }
}