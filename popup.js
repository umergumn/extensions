function updateOutputs() {
  const bytes = parseFloat(document.getElementById('inputBytes').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const outputKB = document.getElementById('outputKB');
  const outputMB = document.getElementById('outputMB');
  const outputGB = document.getElementById('outputGB');
  const outputTB = document.getElementById('outputTB');

  let kilobytes = bytes;
  let megabytes = bytes / 1024;
  let gigabytes = bytes / 1024 / 1024;
  let terabytes = bytes / 1024 / 1024 / 1024;

  switch (inputUnit) {
    case 'KB':
      kilobytes = bytes * 1024;
      megabytes = bytes;
      gigabytes = bytes / 1024;
      terabytes = bytes / 1024 / 1024;
      break;
    case 'MB':
      kilobytes = bytes * 1024 * 1024;
      megabytes = bytes * 1024;
      gigabytes = bytes / 1024;
      terabytes = bytes / 1024 / 1024;
      break;
    case 'GB':
      kilobytes = bytes * 1024 * 1024 * 1024;
      megabytes = bytes * 1024 * 1024;
      gigabytes = bytes * 1024;
      terabytes = bytes / 1024;
      break;
    case 'TB':
      kilobytes = bytes * 1024 * 1024 * 1024 * 1024;
      megabytes = bytes * 1024 * 1024 * 1024;
      gigabytes = bytes * 1024 * 1024;
      terabytes = bytes * 1024;
      break;
  }

  outputKB.innerText = `Kilobytes: ${kilobytes.toFixed(2)}`;
  outputMB.innerText = `Megabytes: ${megabytes.toFixed(2)}`;
  outputGB.innerText = `Gigabytes: ${gigabytes.toFixed(2)}`;
  outputTB.innerText = `Terabytes: ${terabytes.toFixed(2)}`;
}

document.getElementById('inputBytes').addEventListener('input', updateOutputs);
document.getElementById('inputUnit').addEventListener('change', updateOutputs);
