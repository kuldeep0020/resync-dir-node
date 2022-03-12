# resync-dir-node
scripts which can replicate one directory to another directory 

### reasone to create
i have connected two hdd to drive in raspberry pi, one of drive i was using as destination of ftp server where i am dumping all data of ftp server.
So I wanted to be a mechanism which will clone firts dive to second drive.
This script can do that, you can trigred it manually but i was using `crontab` execute this script on every night

### step required to run this Script
1. go to the file `index.js`, and `const rsyncSource = '/media/pi/main-disk/';
const rsyncDest = '/media/pi/backup-disk';` update these two variable.
2. install packages with this cmd `npm install` 
3.  run script with this cmd `node index.js`
