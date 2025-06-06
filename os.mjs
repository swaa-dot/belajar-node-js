import os from 'os';

const systemInfo = {
  Platform: os.platform(),
  Architecture: os.arch(),
  Hostname: os.hostname(),
  TotalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
  FreeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
  CPU: os.cpus()[0].model,
  'CPU Cores': os.cpus().length,
};

console.table(systemInfo);
