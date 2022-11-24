export function toSentenceCase(word: string) {
  return word.split('')
    .map((letter, index) => index === 0 ? letter.toUpperCase(): letter)
    .join('');
}

export function debounce(func: (args: any) => void, timeoutMs = 300){
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(null, args); }, timeoutMs);
  };
}
