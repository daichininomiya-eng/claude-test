import { processData, calculateTotal, compareValues, fetchUser, config, x } from "./utils";

// 型定義が不適切
interface User {
  [key: string]: any;  // 何でも入る
}

// 非同期処理の扱いが不適切
function main() {
  // await をつけ忘れている
  const user = fetchUser("123");
  console.log(user); // Promise オブジェクトが出力される

  // null チェックなし
  const data: any = null;
  console.log(data.name); // 実行時エラー

  // 意味不明な変数名
  const a = processData([1, 2, 3]);
  const b = calculateTotal([{ price: 10 }, { price: 20 }]);
  const c = compareValues(1, "1"); // 型が違う比較

  // ハードコードされた認証情報の使用
  console.log("API Key: " + config.apiKey);

  // 謎の関数呼び出し
  const result = x(1, 2, 3);
}

main();
