// Generates a 180×180 apple-touch-icon PNG (solid #434edf background)
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

const W = 180, H = 180;
const R = 0x43, G = 0x4e, B = 0xdf; // #434edf

// Build raw pixel rows: filter byte (0) + RGB per pixel
const row = Buffer.alloc(1 + W * 3);
row[0] = 0;
for (let x = 0; x < W; x++) {
  row[1 + x * 3] = R;
  row[2 + x * 3] = G;
  row[3 + x * 3] = B;
}
const raw = Buffer.concat(Array.from({ length: H }, () => row));
const idat = zlib.deflateSync(raw);

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) {
    c ^= b;
    for (let i = 0; i < 8; i++) c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 2; // bit depth 8, colour type RGB

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk("IHDR", ihdr),
  chunk("IDAT", idat),
  chunk("IEND", Buffer.alloc(0)),
]);

const out = path.join(__dirname, "../public/apple-touch-icon.png");
fs.writeFileSync(out, png);
console.log("Written:", out);
