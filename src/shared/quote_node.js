
// 自动处理中英文混排
// 英文合法字符串
function canBeEn(str) {
    // 仅判断：数字字母、逗号、空格、斜杠、ASCII 引号，Unicode 引号，英文圆括号，英文句号，英文叹号，英文问号，英文 dash，换行，冒号
    return str != undefined && /^[0-9a-zA-Z, //\\\'\"‘’“”\(\)\.\!\?\-\r\n\:]+$/.test(str);
}

function onlyNeutralCharacter(str) {
    // 仅判断中立符号：
    // 数字、空格、斜杠、Unicode 引号，换行
    return str != undefined && /^[0-9 //\\‘’“”\r\n]+$/.test(str);
}

function hasEnLetter(str) {
    return str != undefined && /[a-zA-Z]/g.test(str);
}

function isQuote(char) {
    return (['\'', '\"', '‘', '’', '“', '”']).includes(char);
}

function isEnOnlyQuote(char) {
    return (['\'', '\"']).includes(char);
}

function isOpenQuote(char) {
    return (['‘', '“']).includes(char);
}

function isCloseQuote(char) {
    return (['’', '”']).includes(char);
}

function isOpenDoubleQuote(char) {
    return (['“']).includes(char);
}

function isCloseDoubleQuote(char) {
    return (['”']).includes(char);
}

function openDoubleQuotingCn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (index > str.length - 2) {
        // 中文引号至少要包含一个中文字符。
        // “中”
        return false;
    }
    if (isOpenDoubleQuote(str[index])) {
        let isQuotingCn = false;
        let i = index + 1;
        let stack = [];
        while (i < str.length) {
            if (isOpenDoubleQuote(str[i])) {
                stack.push(str[i]);
            }
            if (isCloseDoubleQuote(str[i])) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (!canBeEn(str[i]) && stack.length == 0) {
                // 不是英文字符，且已经是最外层嵌套
                isQuotingCn = true;
                break;
            }
            i++;
        }
        return isQuotingCn;
    }

    return false;
}

function closeDoubleQuotingCn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (index < 2) {
        // 中文引号至少要包含一个中文字符。
        // “中”
        return false;
    }
    if (isCloseDoubleQuote(str[index])) {
        let isQuotingCn = false;
        let i = index - 1;
        let stack = [];
        while (i >= 0) {
            if (isCloseDoubleQuote(str[i])) {
                stack.push(str[i]);
            }
            if (isOpenDoubleQuote(str[i])) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (!canBeEn(str[i]) && stack.length == 0) {
                // 不是英文字符，且已经是最外层嵌套
                isQuotingCn = true;
                break;
            }
            i--;
        }
        return isQuotingCn;
    }

    return false;
}

// 目标 index 处若是引号，判断是不是英文引号
// 要求临近字符需要是英文或空格（你好 “eng” 你好）=> （你好 "eng" 你好）
function quotingEn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (!isQuote(str[index])) {
        // 不是引号
        return false;
    }

    // 理论上讲开引号后、闭引号前不应该跟空格。
    if (isOpenQuote(str[index])) {
        // 开引号后，需要是英文，并且向后遍历是否是中文引号。
        let nextIsEN = (index == str.length - 1 || canBeEn(str[index + 1])) && !openDoubleQuotingCn(str, index);
        return nextIsEN;
    } else if (isCloseQuote(str[index])) {
        // 闭引号前，需要是英文。并且向前遍历是否是中文引号。
        let prevIsEN = (index == 0 || canBeEn(str[index - 1])) && !closeDoubleQuotingCn(str, index);
        return prevIsEN;
    } else if (isEnOnlyQuote(str[index])) {
        return true;
    }
}

function splitStringByLang(str) {
    let arr = [];
    let push = function(s) {
        // 合并空格
        if ((s.trim().length == 0 && arr.length != 0) || (arr.length == 1 && arr[0].trim().length == 0)) {
            arr[arr.length - 1] = arr[arr.length - 1] + s
        } else {
            arr.push(s)
        }
    }

    let lastStart = 0;
    for (let i = 0; i < str.length; i++) {
        if (canBeEn(str[i]) && // 是英文字符
            (!isQuote(str[i]) || quotingEn(str, i))) { // 若是引号，需要是英文引号
            if (lastStart != i) {
                push(str.slice(lastStart, i));
            }
            lastStart = i;

            i++;
            while (i < str.length && canBeEn(str[i]) && // 是英文字符
                (!isQuote(str[i]) || quotingEn(str, i))) { // 若是引号，需要是英文引号
                i++;
            }
            push(str.slice(lastStart, i));
            lastStart = i;
        }
    }
    if (str.length != lastStart) {
        push(str.slice(lastStart, str.length));
    }
    return arr;
}

function sanitizer(str) {
    let arr = splitStringByLang(str);

    let result = [];
    let isEn = canBeEn(arr[0]) && hasEnLetter(arr[0]);
    // 由于只支持中英，实际上只需要返回第一个元素的语言即可。
    // 不过为了调用者的方便，还是算了。
    for (let i = 0; i < arr.length; i++) {
        // if (onlyNeutralCharacter(arr[i])) {
        //   result.push({
        //     lang: "",
        //     content: arr[i],
        //   });
        // } else {
        result.push({
            lang: isEn ? "en" : "zh",
            content: arr[i],
        });
        isEn = !isEn;
        // }
    }
    return result;
}


function addSpan(lang, str) {
    return `<span lang='${lang}'>${str}</span>`
}

function tryTranspile(elem) {
    if (!elem.hasChildNodes()) {
        return;
    }

    let validNodes = [
        Node.TEXT_NODE,
    ]
    let validTags = [
        "H1", "H2", "H3", "H4"
    ];
    let parentFontFamily = getComputedStyle(elem).fontFamily;
    for (let n = 0; n < elem.childNodes.length; n++) {
        let node = elem.childNodes[n];
        if (!validNodes.includes(elem.childNodes[n].nodeType)) {
            continue;
        }

        let str = node.textContent;
        
        let arr = sanitizer(str);
        console.log(elem, node,arr)
        if (arr.length == 1) {
            // node.lang = arr[0].lang;
            // elem.lang = arr[0].lang;
            if (arr[0].lang == "zh") {
                // 由于不插入新子节点，因此直接修改该元素
                if (!parentFontFamily.includes('"Chinese Quote",')) {
                    elem.style.fontFamily = '"Chinese Quote",' + parentFontFamily;
                }
            } else {
                // 移除 en 的 Chinese Quote
                if(parentFontFamily.includes('"Chinese Quote",')) {
                    elem.style.fontFamily = parentFontFamily.replaceAll('"Chinese Quote",', "")
                }
            }
            // 仅含一种语言
            continue;
        }
        // console.log(arr)
        let nextNode = elem.childNodes[n + 1];
        for (let i = 0; i < arr.length; i++) {
            let newNode = document.createElement("span");
            // newNode.lang = arr[i].lang;
            if (arr[i].lang == "zh") {
                // 算了吧还是别处理洋文了少改 css 嚄
                // 我愛複製粘貼
                if (!parentFontFamily.includes('"Chinese Quote",')) {
                    newNode.style.fontFamily = '"Chinese Quote",' + parentFontFamily;
                }
            } else {
                // 移除 en 的 Chinese Quote
                if(parentFontFamily.includes('"Chinese Quote",')) {
                    newNode.style.fontFamily = parentFontFamily.replaceAll('"Chinese Quote",', "")
                }
            }
            newNode.textContent = arr[i].content;
            elem.insertBefore(newNode, nextNode);
        }
        elem.removeChild(node);
        n = n + arr.length - 1;
    }
}

module.exports = tryTranspile;
module.exports.default = tryTranspile;
module.exports.QuoteNode = tryTranspile;
