import fs from 'fs/promises';


//membaca file hello-world.js
// Pastikan file hello-world.js ada di direktori yang sama dengan file ini
const buffer = await fs.readFile("hello-world.js");
console.info(buffer.toString());

//menulis file test.txt
// Pastikan Anda memiliki izin untuk menulis di direktori ini
// await fs.writeFile("test.txt", "Hello, World!");