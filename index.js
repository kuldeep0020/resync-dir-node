const Rsync = require('rsync');
const rsync = new Rsync();
const rsyncSource = '/media/pi/main-disk/';
const rsyncDest = '/media/pi/backup-disk';

function runRsync() {

  rsync.flags('avzP');
  rsync.set('delete');
  rsync.source(rsyncSource);
  rsync.destination(rsyncDest);

  return new Promise((resolve, reject) => {
    try {
      let logData = "";
      rsync.execute(
        (error, code, cmd) => {
          resolve({ error, code, cmd, data: logData });
        },
        (data) => {
          logData += data;
        },
        (err) => {
          logData += err;
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}

(async () => {
  try {
    console.info('=================starting rsync=================');
    let output = await runRsync();
    console.info(output);
    console.info('=================rsync complete=================');
  } catch(err) {
    console.error("=================rsync Failed=================")
    console.error(err)
  }
})();