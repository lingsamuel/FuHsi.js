# 引號之神

Forked from [空格之神](https://github.com/vinta/pangu.js)。

如果你跟我一樣，每次看到網頁上的中文字使用了英文引號，就會坐立難安，忍不住想將它修好。這個外掛（支援 Chrome）正是你在網路世界走跳所需要的東西，它會自動替你在網頁中所有的中文字上添加一個“Chinese Quote”字體，讓它能夠使用“Source Han Sans CN”的引號。

漢學家稱這個全角中文引號所帶來的空白為「伏羲之白」，因為伏羲大神創立文字之時就欽定了字元的寬度。另有研究顯示，觀看過多使用英文引號的中文網頁的人，感情路都走得很辛苦，有七成的比例會在 34 歲的時候跟自己不愛的人結婚，而其餘三成的人最後只能把遺產留給自己的貓。畢竟愛情跟書寫都需要適時地留白。

與大家共勉之。

我沒有打包所以自己克隆下來安裝吧。

## 引號之神做了什麼

解析了所有 `h1, h2, h3, h4, h5, h6, p` 元素來爲中文字元插入“Chinese Quote”字體。

沒有解析 `div` 和 `a`，因爲它們實在太多了。再說了不把文本放在 h 或者 p 裏的網站你是想干三洨？

只支援網頁，需要支持 `@font-face`。

## Installation

從 Chrome 中自行安裝。

## Why fork this

因爲我根本不懂前端，而且我好懶。

此外，我沒有修改除了標題之外的文本，因爲它們實在太多了。

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

## Author

- GitHub: [@vinta](https://github.com/vinta)
- Twitter: [@vinta](https://twitter.com/vinta)
- Website: [vinta.ws](https://vinta.ws/code/)
