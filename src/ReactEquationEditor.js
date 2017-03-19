import React, {Component} from 'react';
import './css/react-equation-editor.css';
import MathJax from "MathJax";

class ReactEquationEditor extends Component {
    mathObj = {
        "加减": "\\pm",
        "无穷大": "\\infty",
        "等于号": "=",
        "不等于": "\\neq",
        "渐进于": "\\approx",
        "乘号": "\\times",
        "除号": "\\div",
        "阶乘": "!",
        "成比例": "\\propto",
        "小于号": "<",
        "远小于": "<<",
        "大于号": ">",
        "远大于": ">>",
        "小等于号": "\\leqslant",
        "大于等于号": "\\geqslant",
        "小于等于": "\\leq",
        "大于等于": "\\geq",
        "减加号": "\\mp",
        "约等于": "\\cong",
        "等价于": "\\equiv",
        "针对所有": "\\forall",
        "补集": "C",
        "偏微分": "\\partial",
        "根号": "\\sqrt{n}",
        "n 次方跟": "\\sqrt[n]{x}",
        "并集": "\\cup",
        "交集": "\\cap",
        "空集": "\\emptyset",
        "百分比": "\\%",
        "度": "^\\circ",
        "华氏度": "^\\circ F",
        "递增": "\\Delta",
        "微分算符": "\\nabla",
        "存在": "\\exists",
        "不存在": "\\nexists",
        "包含于": "\\in",
        "包含": "\\ni",
        "左箭头": "\\leftarrow",
        "上箭头": "\\uparrow",
        "右箭头": "\\rightarrow",
        "下箭头": "\\downarrow",
        "左右箭头": "\\leftrightarrow",
        "因为": "\\because",
        "所以": "\\therefore",
        "加号": "+",
        "减号": "-",
        "非": "\\neg",
        "Alpha": "\\alpha",
        "Beta": "\\beta",
        "GammaPlus": "\\Gamma",
        "DeltaPlus": "\\delta",
        "EpsilonPlus": "\\varepsilon",
        "Epsilon": "\\epsilon",
        "ThetaPlus": "\\Theta",
        "vartheta": "\\vartheta",
        "Mu": "\\mu",
        "PiPlus": "\\Pi",
        "Rho": "\\rho",
        "SigmaPlus": "\\Sigma",
        "Tau": "\\tau",
        "varphi": "\\varphi",
        "Omega": "\\omega",
        "星号": "\\ast",
        "加重号运算符": "\\bullet",
        "垂直省略号": "\\vdots",
        "中线水平省略号": "\\cdots",
        "右下对角线省略号": "\\ddots",
        "Alef": "\\aleph",
        "Bet": "\\beth",
        "校对结束": "\\blacksquare"
    };
    greekAlphabet = {
        "alpha": "\\alpha",
        "beta": "\\beta",
        "gamma": "\\gamma",
        "delta": "\\delta",
        "epsilon": "\\epsilon",
        "varepsilon": "\\varepsilon",
        "zeta": "\\zeta",
        "eta": "\\eta",
        "theta": "\\theta",
        "vartheta": "\\vartheta",
        "iota": "\\iota",
        "kappa": "\\kappa",
        "lambda": "\\lambda",
        "mu": "\\mu",
        "nu": "\\nu",
        "xi": "\\xi",
        "pi": "\\pi",
        "varpi": "\\varpi",
        "rho": "\\rho",
        "varrho": "\\varrho",
        "sigma": "\\sigma",
        "varsigma": "\\varsigma",
        "tau": "\\tau",
        "upsilon": "\\upsilon",
        "phi": "\\phi",
        "varphi": "\\varphi",
        "chi": "\\chi",
        "psi": "\\psi",
        "omega": "\\omega",
        "GammaPlus": "\\Gamma",
        "DeltaPlus": "\\Delta",
        "ThetaPlus": "\\Theta",
        "LambdaPlus": "\\Lambda",
        "XiPlus": "\\Xi",
        "PiPlus": "\\Pi",
        "SigmaPlus": "\\Sigma",
        "UpsilonPlus": "\\Upsilon",
        "PhiPlus": "\\Phi",
        "PsiPlus": "\\Psi",
        "Omega ": "\\Omega "
    };
    handwritting = {
        "mathbbA": "\\mathbb{A}",
        "mathbbB": "\\mathbb{B}",
        "mathbbC": "\\mathbb{C}",
        "mathbbD": "\\mathbb{D}",
        "mathbbE": "\\mathbb{E}",
        "mathbbF": "\\mathbb{F}",
        "mathbbG": "\\mathbb{G}",
        "mathbbH": "\\mathbb{H}",
        "mathbfA": "\\mathbf{A}",
        "mathbfB": "\\mathbf{B}",
        "mathbfC": "\\mathbf{C}",
        "mathbfD": "\\mathbf{D}",
        "mathbfE": "\\mathbf{E}",
        "mathbfF": "\\mathbf{F}",
        "mathbfG": "\\mathbf{G}",
        "mathbfH": "\\mathbf{H}",
        "mathcalA": "\\mathcal{A}",
        "mathcalB": "\\mathcal{B}",
        "mathcalC": "\\mathcal{C}",
        "mathcalD": "\\mathcal{D}",
        "mathcalE": "\\mathcal{E}",
        "mathcalF": "\\mathcal{F}",
        "mathcalG": "\\mathcal{G}",
        "mathcalH": "\\mathcal{H}",
        "mathfrakA": "\\mathfrak{A}",
        "mathfrakB": "\\mathfrak{B}",
        "mathfrakC": "\\mathfrak{C}",
        "mathfrakD": "\\mathfrak{D}",
        "mathfrakE": "\\mathfrak{E}",
        "mathfrakF": "\\mathfrak{F}",
        "mathfrakG": "\\mathfrak{G}",
        "mathfrakH": "\\mathfrak{H}",
        "mathsfA": "\\mathsf{A}",
        "mathsfB": "\\mathsf{B}",
        "mathsfC": "\\mathsf{C}",
        "mathsfD": "\\mathsf{D}",
        "mathsfE": "\\mathsf{E}",
        "mathsfF": "\\mathsf{F}",
        "mathsfG": "\\mathsf{G}",
        "mathsfH": "\\mathsf{H}",
    };
    mathConstructor = {
        "right-brace-abc": "\\left. abc \\right \\}",
        "left-brace-abc": "\\left \\{ abc \\right.",
        "left-right-abc": "\\left (  \\right )",
        "double-line": "\\left \\| abc \\right \\|",
        "braceabc": "\\left [ abc \\right ]",
        "langle-abc": "\\left \\langle abc \\right \\rangle",
        "huakuohao-abc": "\\left \\{ abc \\right \\}",
        "up-abc": "\\left \\lfloor  \\right \\rfloor",
        "single-line-abc": "\\left | abc \\right |",
        "down-abc": "\\left \\lceil abc \\right \\rceil",
        "a的平方": "a^2",
        "a分之b": "\\frac{a}{b}",
        "int": "\\int",
        "bigcap": "\\bigcap",
        "sum": "\\sum",
        "prod": "\\prod",
        "a2": "a_{2}",
        "xb分之a": "x\\tfrac{a}{b}",
        "intab": "\\int_{a}^{b}",
        "bigcapab": "\\bigcap_{a}^{b}",
        "sumab": "\\sum_{a}^{b}",
        "xa的b次方": "x_{a}^{b}",
        "oint": "\\oint",
        "bigcup": "\\bigcup",
        "根号x": "\\sqrt{x}",
        "2的3次方跟": "\\sqrt[3]{2}",
        "coprod": "\\coprod",
        "x2的平方": "{x_{2}}^{2}",
        "bac": "_{b}^{a}\\textrm{C}",
        "微分": "\\frac{\\mathrm{d} }{\\mathrm{d} x}",
        "两个积分": "\\iint_{a}^{b}",
        "极限": "\\lim_{x \\to 0 }",
        "两行a1b2": `\\begin{matrix}
a &=1 \\\\ 
b &=2 
\\end{matrix}`,
        "矩阵a1b2": `\\begin{bmatrix}
a &=1 \\\\
b &=2 
\\end{bmatrix}`,
        "a上b下": `\\binom{A}{B}`,
        "圆括号a=1b=2": `\\begin{pmatrix}
a &=1 \\\\ 
b &=2 
\\end{pmatrix}`,
        "小圆括号a=1b=2": `\\bigl(\\begin{smallmatrix}
a &=1 \\\\
b &=2 
\\end{smallmatrix}\\bigr)`,
        "左括号ifx": `\\begin{cases}
..., & \\text{ if } x= \\\\
..., & \\text{ if } x= 
\\end{cases}`,
        "竖线a=1b=2": `\\begin{vmatrix}
a &=1 \\\\
b &=2 
\\end{vmatrix}`,
        "两个括号a=1b=2": `\\begin{Bmatrix}
a &=1 \\\\
b &=2
\\end{Bmatrix}`,
        "双竖线a=1b=2": `\\begin{Vmatrix}
a &=1 \\\\
b &=2
\\end{Vmatrix}`,
        "左括号a=1b=2": `\\left\\{\\begin{matrix}
a &=1 \\\\
b &=2
\\end{matrix}\\right.`,
        "右竖线a=1b=2": `\\left.\\begin{matrix}
a &=1 \\\\
b &=2
\\end{matrix}\\right|`,
        "右括号a=1b=2": `\\left.\\begin{matrix}
a &=1 \\\\
b &=2
\\end{matrix}\\right\\}`
    };
    align = {
        "x+1^2": `\\begin{align}
(x+1)^2
&{= (x+1)(x+1)}\\\\
&{= x(x+1) + 1(x+1)}\\\\
&{= (x^2+x) + (x+1)}\\\\
&{= x^2 + (x + x) + 1}\\\\
&{= x^2+2x+1}\\\\
\\end{align}`,
        "3x+y": `\\begin{align}
\\frac{3x + y}{7} &= 9   & \\text{given}   \\\\
3x + y &= 63            & \\text{multiply by 7}   \\\\
3x &= 63 - y            & \\text{subtract y}   \\\\
x &= 21 - \\frac{y}{3}   & \\text{divide by 3}   \\\\
\\end{align}`,
        "3x+yalignright": `\\begin{align}
\\frac{3x + y}{7} &= 9                && \\text{given} \\\\
3x + y           &= 63               && \\text{multiply by 7} \\\\
3x               &= 63 - y           && \\text{subtract y} \\\\
x                &= 21 - \\frac{y}{3} && \\text{divide by 3} \\\\
\\end{align}`
    };
    handleLatexClick = (event) => {
        // 事件代理，提高性能
        let target = event.target,
            className = target.getAttribute("class");
        if (className.indexOf("single-wrapper") !== -1 || className === "latex-image") {
            let inputValue = this.state.inputValue;
            // console.log(this.getCursorPos(this.reeInput));
            if( typeof this.selectStart !== "undefined" && typeof this.selectEnd !== "undefined") {
                let before = inputValue.slice(0, this.selectStart);
                let after = inputValue.slice(this.selectEnd);
                let latex = target.getAttribute("data-latex");
                inputValue = before + latex + after;
                this.selectStart = this.selectEnd += latex.length
            } else {
                inputValue += target.getAttribute("data-latex");
            }
            this.setState({
                inputValue: inputValue
            }, () => {
                window.UpdateMath(this.state.inputValue);
                setTimeout(() => {
                    this.reeInput.focus();
                    if( typeof this.selectStart !== "undefined" && typeof this.selectEnd !== "undefined") {
                        this.setCursorPos(this.reeInput, this.selectStart, this.selectEnd);
                    } else {
                        let len = this.reeInput.value.length;
                        this.setCursorPos(this.reeInput, len, len);
                    }
                }, 100);
            })
        }
    };

    getCursorPos = (input) => {
        if ("selectionStart" in input && document.activeElement == input) {
            return {
                start: input.selectionStart,
                end: input.selectionEnd
            };
        }
        else if (input.createTextRange) {
            let sel = document.selection.createRange();
            if (sel.parentElement() === input) {
                let rng = input.createTextRange();
                rng.moveToBookmark(sel.getBookmark());
                let len;
                for (len = 0;
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                    len++;
                }
                rng.setEndPoint("StartToStart", input.createTextRange());
                let pos;
                for (pos = {start: 0, end: len};
                     rng.compareEndPoints("EndToStart", rng) > 0;
                     rng.moveEnd("character", -1)) {
                    pos.start++;
                    pos.end++;
                }
                return pos;
            }
        }
        return -1;
    };

    setCursorPos = (input, start, end) => {
        if (arguments.length < 3) end = start;
        if ("selectionStart" in input) {
            setTimeout(function () {
                input.selectionStart = start;
                input.selectionEnd = end;
            }, 1);
        }
        else if (input.createTextRange) {
            let rng = input.createTextRange();
            rng.moveStart("character", start);
            rng.collapse();
            rng.moveEnd("character", end - start);
            rng.select();
        }
    };

    state = {
        inputValue: "",
        latexType: "基础数学"
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        }, () => {
            window.UpdateMath(this.state.inputValue);
        })
    };


    componentDidMount() {
        this.reeInput = document.querySelector("#ree-input");
        try {
            let QUEUE = MathJax.Hub.queue;  // shorthand for the queue
            let math = null, box = null;    // the element jax for the math output, and the box it's in

            //
            //  Hide and show the box (so it doesn't flicker as much)
            //
            let HIDEBOX = function () {
                box.style.visibility = "hidden"
            };
            let SHOWBOX = function () {
                box.style.visibility = "visible"
            };

            //
            //  Get the element jax when MathJax has produced it.
            //
            QUEUE.Push(function () {
                math = MathJax.Hub.getAllJax("MathOutput")[0];
                box = document.getElementById("box");
                SHOWBOX(); // box is initially hidden so the braces don't show
            });

            //
            //  The onchange event handler that typesets the math entered
            //  by the user.  Hide the box, then typeset, then show it again
            //  so we don't see a flash as the math is cleared and replaced.
            //
            window.UpdateMath = function (TeX) {
                QUEUE.Push(
                    HIDEBOX,
                    ["resetEquationNumbers", MathJax.InputJax.TeX],
                    ["Text", math, "\\displaystyle{" + TeX + "}"],
                    SHOWBOX
                );
            };
            window.UpdateMath("");
        } catch (e) {
            // 故意的，mathjax 初始化的时候报错，貌似不影响使用
        }
    }

    handleLatexTypeChange = (event) => {
        this.setState({
            latexType: event.target.value
        })
    };

    handleInputKeyUp = (event) => {
        this.setPos(event.target);
    };

    handleInputClick = (event) => {
        this.setPos(event.target);
    };

    setPos(input) {
        let pos = this.getCursorPos(input);
        this.selectStart = pos.start;
        this.selectEnd = pos.end;
    }

    render() {
        let latexArray;
        let baseObj;
        let adjustClass = "";
        switch (this.state.latexType) {
            case "基础数学": {
                baseObj = this.mathObj;
                latexArray = Object.keys(this.mathObj);
                break;
            }
            case "希腊字母": {
                baseObj = this.greekAlphabet;
                latexArray = Object.keys(this.greekAlphabet);
                break;
            }
            case "手写体": {
                baseObj = this.handwritting;
                latexArray = Object.keys(this.handwritting);
                break;
            }
            case "数学结构": {
                baseObj = this.mathConstructor;
                latexArray = Object.keys(this.mathConstructor).reverse();
                adjustClass = "to115";
                break;
            }
            case "对齐": {
                baseObj = this.align;
                latexArray = Object.keys(this.align);
                adjustClass = "to200";
            }
            default: {

            }
        }

        return (
            <div className="ree">
                <div className="ree-header">
                    <select value={this.state.latexType} onChange={this.handleLatexTypeChange} className="ree-type"
                            name="ree-type" id="ree-type">
                        <option value="基础数学">基础数学</option>
                        <option value="希腊字母">希腊字母</option>
                        <option value="手写体">手写体</option>
                        <option value="数学结构">数学结构</option>
                        <option value="对齐">对齐</option>
                    </select>
                </div>
                <div className="latex-wrapper" onClick={this.handleLatexClick}>
                    {
                        latexArray.map(item => {
                            return <div className={`single-wrapper ${adjustClass}`} title={`${baseObj[item]}`}
                                        key={`${item}`}
                                        data-latex={`${baseObj[item]}`}><img className="latex-image"
                                                                             src={`./image/${item}.png`}
                                                                             data-latex={`${baseObj[item]}`}/>
                            </div>
                        })
                    }
                </div>
                <textarea onKeyUp={this.handleInputKeyUp} onClick={this.handleInputClick} className="ree-input"
                          ref={(reeInput) => {
                              this.reeInput = reeInput
                          }} value={this.state.inputValue} onChange={this.handleInputChange} name="ree-input"
                          id="ree-input"
                          cols="30" rows="10">

                </textarea>
                <div className="ree-output">
                    <div className="box" id="box" style={{visibility: "hidden"}}>
                        <div id="MathOutput" className="output">$${}$$</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactEquationEditor;