const { spawn } = require('child_process');

const child = spawn('find',['.','-type','f']);

child.stdout.on('data', (data) => {
    console.log(`child stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child stderr: ${data}`);
});

child.on('exit', function (code, signal){
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

//other child process:  disconnect, error, message, close