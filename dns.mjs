import dns from "dns/promises";

const ip = await dns.lookup("youtube.com");

console.info(ip);
//atau
console.info(ip.address);
console.info(ip.family);