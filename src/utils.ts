// ユーティリティ関数

// any を多用している
export function processData(data: any): any {
  var result = [];  // var を使用
  for (var i = 0; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
}

// 未使用の変数がある
export function calculateTotal(items: any[]) {
  let total = 0;
  let tax = 0;       // 未使用
  let discount = 0;  // 未使用
  let unused = "hello"; // 未使用
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// == を使っている（=== を使うべき）
export function compareValues(a: any, b: any): boolean {
  if (a == null) {
    return b == null;
  }
  if (a == b) {
    return true;
  }
  return false;
}

// console.log がプロダクションコードに残っている
export function fetchUser(id: string): Promise<any> {
  console.log("fetching user: " + id);
  console.log("DEBUG: this should be removed");
  return fetch("http://example.com/users/" + id)
    .then((res) => {
      console.log("got response");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

// 型安全でないキャスト
export function unsafeCast(value: any) {
  const num = value as number;
  const str = value as string;
  return { num, str };
}

// エラーハンドリングが不適切
export async function riskyOperation() {
  try {
    const response = await fetch("http://example.com/api");
    const data = await response.json();
    return data;
  } catch (e) {
    // エラーを握りつぶしている
  }
}

// 非常に読みにくい関数
export function x(a:any,b:any,c:any){var d=a+b;var e=d*c;if(e>100){return true}else if(e>50){return false}else{return null}}

// パスワードをハードコード
export const config = {
  apiKey: "sk-1234567890abcdef",
  dbPassword: "password123",
  secret: "my-super-secret-key",
};

// メモリリークの可能性があるコード
export class EventManager {
  private listeners: any[] = [];

  addListener(callback: any) {
    this.listeners.push(callback);
    // removeListener メソッドがない
  }

  emit(event: any) {
    this.listeners.forEach((cb: any) => cb(event));
  }
}

// 再帰にベースケースの保証がない
export function deepClone(obj: any): any {
  const result: any = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = deepClone(obj[key]); // null チェックなし、循環参照に対応していない
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
