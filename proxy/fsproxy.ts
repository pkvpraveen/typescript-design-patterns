export class FsProxy {
  fs: any;

  constructor(fs_subject: any) {
    this.fs = fs_subject;
  }

  readFile(path: string, format: string, callback: any) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`));
    }

    this.fs.readFile(path, format, (error: any, contents: any) => {
      if (error) {
        console.error(error);
        return callback(error);
      }

      return callback(null, contents);
    });
  }
}
