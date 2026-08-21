// 共用行程資料的讀寫端點（Google Apps Script Web App，背後接一個 Google Sheet）。
// 任何人打開這個網頁，都會從這個網址讀取「地點卡片排序／自訂新增」的最新版本；
// 拖曳排序、刪除、新增地點時，也會把最新結果寫回同一個網址，其他人重新整理
// （或等一下自動輪詢）就會看到。
//
// 資料表：https://docs.google.com/spreadsheets/d/1ktzWoJqHmrGSDL3CSbJlnDVIB3MJXoeiHBIv5F_GgYc/edit
// （分頁 "State"，A1 存整包 JSON，B1 是最後更新時間，方便直接在表裡確認）
window.SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbzZPhHeCeUWIr6MGVhSZgDOhAgfqMde_09QqcnO07Qu7-T4ZaKXw5wSUqskdyruA_r_/exec";
