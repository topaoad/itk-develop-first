import sum from "./sum";

console.log("test by jest");



// const expected = (result) => {

//   return {
//     toBe(expected) {
//       if (result !== expected) {
//         throw new Error(`${result} is not equal to ${expected}`);
//       }
//     },
//   };
// };

// こう書くとリターン分の関数までアクセスできる。
// 一瞬わかりにくいが、要はsum(1, 2)を引数でもった状態でreturn内のtoBeにアクセスする、というだけの意味。
// expected(sum(1, 2)).toBe(4);



// 自分なら多分こう書いちゃう
const expected = (first, second, third) => {
  const result = sum(first, second);
  if (result !== third) {
    throw new Error(`${result} is not equal to ${third}`);
  }
  return;
};
// var resulted = expected(1, 2, 4);
// resulted();
// expected(1, 2, 4);

async function test(title, callback) {
  try {
    await callback();
  } catch (error) {
    console.log(error);
    console.log(`✖ ${title}`);
  }
}

 test('adds 1 + 2 to equal 3', () => {
  expected(1, 2, 4);
});
test('adds 1 + 2 to equal 3', () => {
  expected(1, 2, 8);
});

module.exports = sum;
