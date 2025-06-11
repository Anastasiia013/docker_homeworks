import os from 'os';
import cowsay from 'cowsay';

const info = `
OS: ${os.type()} ${os.release()}
CPU: ${os.cpus()[0].model}
Total RAM: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
`;

console.log(cowsay.say({
    text: info,
    e: "^^",
    T: "U "
}));