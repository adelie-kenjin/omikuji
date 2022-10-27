let username;
//入力された名前を保存しておくための変数
let userresult;
//おみくじの結果（大吉、中吉など）を保存するための変数

username = prompt("お名前を教えて下さい。");
//promptは、入力ダイアログ(今回ユーザーに名前を入力させるウインドウ)を表示させるコード
//入力ダイアログから入力された名前をusernameという変数に保存している

if (username ==　"" ){
    username = "名無し"
}

document.getElementById("name").innerHTML = username;
//"name"というidを持つタグに囲まれている文

let rand = Math.floor( Math.random() * 5);
//randに0~4のランダムな整数が入る

if (rand == 0) {
  userresult = "大吉";
}
//randが0と同じとき、userresultに大吉を入れる
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}

document.getElementById("result").innerHTML = userresult;
//HTMLの中にある、"result"というidを持つタグに囲まれている文字列に、userresultを代入する