const ACCESS_ADMIN = 1;
const ACCESS_GOODS_EDIT = 2;
const ACCESS_GOODS_VIEW = 4;
const ACCESS_ARTICLE_EDIT = 8;
const ACCESS_ARTICLE_VIEW = 16;

const guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW;
const editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT;
const admin = editor | ACCESS_ADMIN;

console.log(editor & ACCESS_ADMIN);
console.log(editor & ACCESS_ARTICLE_EDIT);

const check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT;
console.log(admin & check);