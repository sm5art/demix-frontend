// .then() means they are not using adblock, .catch() means they are using adblock
export default () => new Promise((res, rej) => {
  fetch(
    new Request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
      method: 'HEAD',
      mode: 'no-cors',
    }),
  )
    .then(() => {
      res();
    }).catch(() => {
      rej();
    });

  // Used to cache the result
});
