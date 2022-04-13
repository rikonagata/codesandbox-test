/**
 *
 */

// var val1 = "val変数";
// console.log(val1);

// // val変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数上書き";
// console.log(val2);

// //let再宣言不可能
// let val2 = "let変数再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数上書きできない
// val3 = "const変数上書き";

// //再宣言不可能
// const val3 = "const変数再宣言不可能";

//コンストで定義しても中のオブジェクトを変えることができる
//コンストで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "り",
  age: "23"
};
val4.name = "りこ";
val4.address = "Hiroshima";
console.log(val4);

//constをほぼ使う
//動的に値が変わるものはstateを使う
//処理の中で上書きがある場合はletを使う

//コンストで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// //テンプレート文字列
// const name = "りこ";
// const age = "23";
// //「私の名前はりこです。年齢は23歳です。」

// //テンプレート文字列を用いた方法
// //文字列の中にJSの変数を埋め込める
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// //従来
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// //処理が一行の場合はreturn省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

//

// const myProfile = [`りこ`, 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const[name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

//スプレッド構文
//配列の展開
//まとめる
//
//配列のコピー、結合
//

//map.filter
const nameArr = ["田中", "山田", "りこ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index}番目は${nameArr[index]}です。`);
}

//

// nameArr.map((name) => console.log(name));

//filter
// const  numArr = [1,2,3,4,5];
// const newNumArr =numArr.filter((num) =>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "りこ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

//三項演算子
//ある条件？　条件がtrueの時：条件がfalseの時
// const val1 = 1 > 0 ? `trueです` :`falseです`;
// console.log(val1);
// const num = 1300;
// const formattedNum = typeof num === `number`? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);
// const checkSum = (num1,num2) => {
//   return num1 = num2 > 100 ? `100を超えています！`:`許容範囲内です`;
// }
// console.log(checkSum(50,0));
//論理演算子の本当の意味
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す（nullはfalse)
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// ||は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
