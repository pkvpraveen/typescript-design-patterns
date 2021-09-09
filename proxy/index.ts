import * as path from 'path';
import { FsProxy } from './fsproxy';

var fs = new FsProxy(require('fs'));

// var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error: any, contents: any) => {
  if (error) {
    console.log('\x07');
    console.error(error);
    process.exit(0);
  }

  console.log('reading file...');
  console.log(contents);
};

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
