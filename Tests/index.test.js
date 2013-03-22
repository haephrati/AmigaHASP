const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

if (!html.includes('Amiga HASP')) fail('title');
if (!html.includes('Aladdin Knowledge Systems')) fail('aladdin');
console.log('OK AmigaHASPTests');
