const sentence = "hello there from lighthouse labs";

const func = (char) => process.stdout.write(char)
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    func(char)
  }, delay)
  delay += 50;
}
setTimeout(() => {
  console.log()
}, delay)

