// import sum from "./sum";
// common js 形式
import { sum } from "./inner_file/sum";

console.log("test by jest");

const expected = (result) => {

  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
};

expected(sum(1, 2)).toBe(4);

// 自分なら多分こう書いちゃう
// const expected = (first, second, third) => {
//   const result = sum(first, second);
//   if (result !== third) {
//     throw new Error(`${result} is not equal to ${third}`);
//   }
//   return;
// };
// 以下はreturn文の関数を呼び出したい場合
// var resulted = expected(1, 2, 4);
// resulted();
// expected(1, 2, 4);

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(error);
    console.log(`✖ ${title}`);
  }
}

// // グローバル化によりエクスポート不要に。
// module.exports = { expected, test };
//グローバルにしてインポートしなくても済むようにする。
global.test = test;
global.expected = expected;
