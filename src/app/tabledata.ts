import { Phonecall, LogsFile } from './tableclasses';

export const PhonecallHistory: Array<Phonecall> = [
  // 2019-02-19T17:35:11.045+01:00
  // 2019-02-19T17:35:11.045Z
  // 2019-02-19T17:35:11Z
  // new Date(1478708162000) is 9 November 2016 16:16:02 GMT
  // new Date(1548158103010) is 22 jan 2019, 14:55:03.01
  // new Date(1544108003020) is 06 dec 2018, 17:53:23.02
  // new Date(year, month, day, hours, minutes, seconds, milliseconds)
  // {{i.timestamp | date: 'dd.MM.yyyy &nbsp; HH:mm:ss.SSSS'}}
  // {{i.timestamp | date: '!dd*MM/yyyy'}}
  { id: 1, timeStamp: new Date(1544021631010), ctype: 'outcall', duration: 35, lastName: 'Konstantinov', firsName: 'Alexander', jobPosition: "Burovoi Master"},
  { id: 2, timeStamp: new Date(1544021622020), ctype: 'outcall', duration: 2, lastName: 'Konstantinov', firsName: 'Alexander', jobPosition: "Burovoi Master"},
  { id: 3, timeStamp: new Date(1544021581030), ctype: 'incall', duration: 32, lastName: 'Musk', firsName: 'Elon', jobPosition: "SpaceX Engeneer"},
  { id: 4, timeStamp: new Date(1544108038040), ctype: 'incall', duration: 32, lastName: 'Konstantinov', firsName: 'Alexander', jobPosition: "Burovoi Master"},
  { id: 5, timeStamp: new Date(1544108023050), ctype: 'outcall', duration: 5, lastName: 'Konstantinov', firsName: 'Alexander', jobPosition: "Burovoi Master"},
  { id: 6, timeStamp: new Date(1544107982060), ctype: 'outcall', duration: 32, lastName: 'Konstantinov', firsName: 'Alexander', jobPosition: "Burovoi Master"}


  ];

export const LogsFiles: Array<LogsFile> = [
  { id: 1, fileName: "Phonecalls-december-2018", fileSize: "254 Bytes", fileDate: new Date(1548161753010)},
  { id: 2, fileName: "Phonecalls-november-2018", fileSize: "9 Kb", fileDate: new Date(1548158103020)},
  { id: 3, fileName: "Phonecalls-october-2018", fileSize: "5 Kb", fileDate: new Date(1548071735030)},
  { id: 4, fileName: "Phonecalls-september-2018", fileSize: "7 Kb", fileDate: new Date(1547988922040)}
];

export const IMsFiles: Array<LogsFile> = [
  { id: 1, fileName: "Message from id9915256347", fileSize: "254 Bytes", fileDate: new Date(1548161753010)},
  { id: 2, fileName: "Message from ppp526347", fileSize: "9 Kb", fileDate: new Date(1548158103020)},
  { id: 3, fileName: "Message from zzz234556347", fileSize: "5 Kb", fileDate: new Date(1548071735030)},
  { id: 4, fileName: "Message from sss56347", fileSize: "7 Kb", fileDate: new Date(1547988922040)}
];

export const CommonsFiles: Array<LogsFile> = [
  { id: 1, fileName: "Document#734.docx", fileSize: "254 Bytes", fileDate: new Date(1548161753010)},
  { id: 2, fileName: "Scheme#256AT4567.docx", fileSize: "9 Kb", fileDate: new Date(1548158103020)},
  { id: 3, fileName: "Scheme#354AT19191.docx", fileSize: "5 Kb", fileDate: new Date(1548071735030)},
  { id: 4, fileName: "Tb.docx", fileSize: "7 Kb", fileDate: new Date(1547988922040)}
];

export const MysFiles: Array<LogsFile> = [
  { id: 1, fileName: "note.txt", fileSize: "2 Kb", fileDate: new Date(1548161753010)},
  { id: 2, fileName: "IMG551784.JPG", fileSize: "1243 Kb", fileDate: new Date(1548158103020)},
  { id: 3, fileName: "IMG551785.JPG", fileSize: "1110 Kb", fileDate: new Date(1548158103020)},
  { id: 4, fileName: "IMG751783.JPG", fileSize: "1487 Kb", fileDate: new Date(1548158103020)},
  { id: 5, fileName: "IMG751784.JPG", fileSize: "978 Kb", fileDate: new Date(1548158103020)},
  { id: 6, fileName: "IMG751785.JPG", fileSize: "991 Kb", fileDate: new Date(1548158103020)},
  { id: 7, fileName: "MOV234563245.mp4", fileSize: "100 Mb", fileDate: new Date(1548071735030)},
  { id: 8, fileName: "MOV4543456.mp4", fileSize: "23 Mb", fileDate: new Date(1547988922040)}
];
