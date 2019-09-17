export class Dictionary {
checkWord(word) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY}`;
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
