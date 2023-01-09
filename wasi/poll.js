export function dropStream (f) {
  console.log(`Drop stream ${f}`);
}

export function readStream (stream, len) {
  console.log(`Read stream ${stream}`);
}

export function writeStream (stream, buf) {
  switch (stream) {
    case 0:
      throw new Error(`TODO: write stdin`);
    case 1:
      process.stdout.write(buf);
      return buf.byteLength;
    case 2:
      throw new Error(`TODO: write stdout`);
    default:
      throw new Error(`TODO: write ${stream}`);
  }
}
