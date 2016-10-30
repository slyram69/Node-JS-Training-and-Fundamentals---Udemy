var whisper = function (message) {
  console.log('proclaining: ' + message);
};

exports.softly = whisper;

exports.loudly = function (message) {
  console.log('PROCLAIMING: ' + message);
};
