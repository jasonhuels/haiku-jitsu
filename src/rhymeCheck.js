export class Rhymes {
getRhymes(word) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://api.datamuse.com/words?rel_rhy=${word}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}
}
