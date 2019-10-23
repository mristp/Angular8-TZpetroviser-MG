export class Phonecall {
  id: number;
  timeStamp: Date;
  ctype: string;    // incall outcall ignored ...
  duration: number; // seconds
  lastName: string; // user name surname
  firsName: string;
  jobPosition: string;
}

export class LogsFile {
  id: number;
  fileName: string;
  fileSize: string;
  fileDate: Date;
}
