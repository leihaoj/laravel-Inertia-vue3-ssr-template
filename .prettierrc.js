module.exports = {
  // 设置每行最大字符数，超过该长度则会换行，默认为 80
  printWidth: 80,

  // 定义一行代码的缩进宽度，默认为 2
  tabWidth: 2,

  // 使用 Tab 还是空格进行缩进，默认为 "none"，可以设置为 "tab" 或指定空格数量的数字
  useTabs: false,

  // 在语句末尾添加分号，默认为 true
  semi: true,

  // 定义引号的类型，默认为 "double"，可以设置为 "single" 以使用单引号
  singleQuote: false,

  // 在 JSX 元素的末尾添加 '>'，默认为 true
  jsxBracketSameLine: false,

  // trailingComma 用于控制是否在对象或数组最后一个元素后面添加逗号，默认为 "none"，可以设置为 "es5"、"all"
  trailingComma: "none",

  // arrowParens 用于控制箭头函数参数是否使用括号，默认为 "avoid"，可以设置为 "always" 或 "avoid"
  arrowParens: "avoid",

  // 对 HTML、Vue、Angular 和 Handlebars 的代码进行格式化，默认为 "off"，可以设置为 "auto"
  htmlWhitespaceSensitivity: "auto"
};
