class Logger {
  logs: Array<string> = [];
  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
  displaySummary() {
    console.log('Total logs %d', this.logs.length);
  }
}
export default new Logger();
