
   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/styled/index.ts [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
exports.createGlobalStyle = styled_components_1.createGlobalStyle;
var mixins_1 = require("./mixins");
exports.mixins = mixins_1.mixins;
var css_1 = require("./css");
exports.css = css_1.css;
var theme_1 = require("./theme");
exports.colors = theme_1.colors;
exports.setTheme = theme_1.setTheme;
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
var styled = styled_components_1.default;
var globalStyleCreator = function () { return styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), css_1.globalStyle()); };
exports.globalStyleCreator = globalStyleCreator;
exports.default = styled;
var templateObject_1;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/styled/css.ts [***]
    "use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var classnames_1 = __importDefault(require("classnames"));
var utils_1 = require("~/utils");
var styles = [];
var globals = [];
function cssToString(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var mergedCss = '';
    _styles.forEach(function (_css, index) {
        mergedCss += _css + (args[index] || '');
    });
    return mergedCss
        .replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ' ')
        .replace(/\s+/g, ' ')
        .replace(/(\r\n|\n|\r)/gm, ' ');
}
function css(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _css = cssToString.apply(void 0, __spreadArrays([_styles], args));
    var className = utils_1.makeid(9);
    styles.push({ className: className, css: _css });
    return className;
}
function globalCss(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    globals.push(cssToString.apply(void 0, __spreadArrays([_styles], args)));
}
function keyframes(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line
    var _keyframe = styled_components_1.keyframes.apply(void 0, __spreadArrays([_styles], args));
    var _keyframeCss = _keyframe.rules.join('');
    globals.push(_keyframeCss);
    return _keyframe.getName();
}
css.styled = styled_components_1.css;
css.global = globalCss;
css.cx = classnames_1.default;
css.keyframes = keyframes;
var globalStyle = function () { return "\n" + styles.map(function (style) { return "." + style.className + "{" + style.css + "}"; }).join('') + "\n" + globals.join('\n') + "\n"; };
exports.globalStyle = globalStyle;
var _css = css;
exports.css = _css;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/pages/home/index.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var ui_1 = require("~/components/ui");
/* Home Style Constants */
/* Home Styles */
var HomeWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var a = styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
/* Home Component  */
function Home(props) {
    return (React.createElement(ui_1.Container, null,
        React.createElement(HomeWrapper, { className: a }, "Hello")));
}
var _Home = Home;
exports.Home = _Home;
var templateObject_1, templateObject_2;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/popup.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var portal_1 = require("../common/portal");
var hooks_1 = require("~/utils/hooks");
var icon_1 = require("./icon");
/*
  Popup Colors // TODO : move theme.json
*/
exports.PopupColors = {
    wrapperBackground: 'transparent',
    overlayBackground: 'rgba(0, 0, 0, 0.3)',
};
/*
  Popup Styles
*/
var StyledPopupOverlay = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), exports.PopupColors.overlayBackground);
var StyledPopup = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  z-index: 100;\n  position: relative;\n"], ["\n  background-color: ", ";\n  z-index: 100;\n  position: relative;\n"])), exports.PopupColors.wrapperBackground);
var iconStyle = styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n"])));
var PopupDefaultProps = {
    hideOnOverlayClicked: true,
    shouldShowCloseIcon: true,
};
var _Popup = function (props) {
    var _a = hooks_1.useStateFromProp(props.isShown), isShown = _a[0], setIsShown = _a[1];
    var _b = __assign(__assign({}, PopupDefaultProps), props), children = _b.children, hideOnOverlayClicked = _b.hideOnOverlayClicked, onClose = _b.onClose, shouldShowCloseIcon = _b.shouldShowCloseIcon;
    var __ = (React.createElement(portal_1.Portal, null,
        React.createElement(StyledPopupOverlay, { onClick: hideOnOverlayClicked &&
                (function () {
                    closePopup();
                }) },
            React.createElement(StyledPopup, { onClick: function (e) {
                    e.stopPropagation();
                } },
                shouldShowCloseIcon && React.createElement(icon_1.UIIcon, { name: "close", size: 12, className: iconStyle, onClick: closePopup }),
                children))));
    /*
    Popup Lifecycle
    */
    /*
    Popup Functions
    */
    function closePopup() {
        setIsShown(false);
        onClose();
    }
    return React.createElement(portal_1.Portal, null, isShown ? __ : null);
};
var Popup = _Popup;
exports.Popup = Popup;
var templateObject_1, templateObject_2, templateObject_3;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/loading.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var LOADING_DEFAULT_COLOR = 'currentColor';
var ldsRollerKeyframes = styled_1.css.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"], ["\n  0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"])));
var LdsRoller = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", "px;\n  height: ", "px;\n  &:after {\n    content: ' ';\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    margin: 1px;\n    border-radius: 50%;\n    border: ", "px solid ", ";\n    border-color: ", " transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"], ["\n  display: inline-block;\n  width: ", "px;\n  height: ", "px;\n  &:after {\n    content: ' ';\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    margin: 1px;\n    border-radius: 50%;\n    border: ", "px solid ", ";\n    border-color: ", " transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.size * 0.71875; }, function (props) { return props.size * 0.71875; }, function (props) { return props.size * 0.078125; }, function (props) { return props.color; }, function (props) { return props.color; }, ldsRollerKeyframes);
var Loading = function (props) {
    return React.createElement(LdsRoller, { color: props.color || LOADING_DEFAULT_COLOR, size: props.size || 20, className: props.className });
};
exports.Loading = Loading;
var templateObject_1, templateObject_2;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/checkbox.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importDefault(require("~/styled"));
// TODO: refactor css
var primaryColor = '#0075ff';
var deactiveColor = '#5a5358';
var StyledLabel = styled_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: ", "px;\n  margin-right: ", "px;\n  cursor: pointer;\n"], ["\n  margin-left: ", "px;\n  margin-right: ", "px;\n  cursor: pointer;\n"])), function (props) { return (props.poition === 'right' ? 8 : 0); }, function (props) { return (props.poition === 'left' ? 8 : 0); });
var StyledCheckboxWrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var StyledCheckbox = styled_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  flex-shrink: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  cursor: pointer;\n  width: 32px;\n  height: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n\n  ::before {\n    content: ' ';\n    position: absolute;\n    transition: all 0.1s;\n    top: 2px;\n    right: 18px;\n    bottom: 2px;\n    left: 2px;\n    border-radius: 50%;\n    background: ", ";\n  }\n  :checked {\n    border-color: ", ";\n    ::before {\n      right: 2px;\n      left: 18px;\n      background: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  flex-shrink: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  cursor: pointer;\n  width: 32px;\n  height: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n\n  ::before {\n    content: ' ';\n    position: absolute;\n    transition: all 0.1s;\n    top: 2px;\n    right: 18px;\n    bottom: 2px;\n    left: 2px;\n    border-radius: 50%;\n    background: ", ";\n  }\n  :checked {\n    border-color: ", ";\n    ::before {\n      right: 2px;\n      left: 18px;\n      background: ", ";\n    }\n  }\n"])), function (props) { return (props.isAlwaysHighlighted ? primaryColor : deactiveColor); }, function (props) { return (props.isAlwaysHighlighted ? primaryColor : deactiveColor); }, primaryColor, primaryColor);
function UICheckbox(props) {
    var id = props.id, label = props.label, unCheckedlabel = props.unCheckedlabel;
    return (React.createElement(StyledCheckboxWrapper, { className: props.className },
        unCheckedlabel && React.createElement(StyledLabel, { poition: "left" }, unCheckedlabel),
        React.createElement(StyledCheckbox, { checked: props.value, isAlwaysHighlighted: props.alwaysHighlighted, type: "checkbox", id: id, onChange: function (e) {
                if (props.onChange) {
                    props.onChange(e.target.checked);
                }
            } }),
        React.createElement(StyledLabel, { poition: "right" }, label)));
}
exports.UICheckbox = UICheckbox;
var templateObject_1, templateObject_2, templateObject_3;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/table.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var ui_1 = require("~/components/ui");
/*
  UiTable Colors // TODO : move theme.json
*/
exports.UiTableColors = {
    primary: '#0075ff',
    white: '#fff',
    text: '#808080',
    tableBoxShadow: '#ccc',
    tableBodyEvenChild: '#f5f5f5',
};
/*
  UiTable Styles
*/
var StyledUiTable = styled_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  max-height: 150px;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  max-height: 150px;\n"])));
var StyledHeadTr = styled_1.default.tr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 50px;\n  background: ", ";\n  color: ", ";\n"], ["\n  height: 50px;\n  background: ", ";\n  color: ", ";\n"])), exports.UiTableColors.primary, exports.UiTableColors.white);
var StyledHeadTh = styled_1.default.th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 18px;\n  padding-left: 8px;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"], ["\n  text-align: left;\n  font-size: 18px;\n  padding-left: 8px;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"])));
var StyledBodyTd = styled_1.default.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 15px;\n  padding-left: 8px;\n  text-align: left;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"], ["\n  font-size: 15px;\n  padding-left: 8px;\n  text-align: left;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"])));
var StyledBodyTr = styled_1.default(StyledHeadTr)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  height: 50px;\n"], ["\n  background: ", ";\n  color: ", ";\n  height: 50px;\n"])), exports.UiTableColors.white, exports.UiTableColors.text);
var StyledTHead = styled_1.default.thead(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  > tr th {\n    :first-child {\n      border-top-left-radius: 10px;\n    }\n    :last-child {\n      border-top-right-radius: 10px;\n    }\n  }\n"], ["\n  > tr th {\n    :first-child {\n      border-top-left-radius: 10px;\n    }\n    :last-child {\n      border-top-right-radius: 10px;\n    }\n  }\n"])));
var StyledTableBody = styled_1.default.tbody(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", " {\n    :nth-child(even) {\n      background-color: ", ";\n    }\n    :last-child {\n      ", " {\n        :first-child {\n          border-bottom-left-radius: 10px;\n        }\n        :last-child {\n          border-bottom-right-radius: 10px;\n        }\n      }\n    }\n  }\n"], ["\n  ", " {\n    :nth-child(even) {\n      background-color: ", ";\n    }\n    :last-child {\n      ", " {\n        :first-child {\n          border-bottom-left-radius: 10px;\n        }\n        :last-child {\n          border-bottom-right-radius: 10px;\n        }\n      }\n    }\n  }\n"])), StyledBodyTr, exports.UiTableColors.tableBodyEvenChild, StyledBodyTd);
var UiTableWrapper = styled_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
var PaginationButtonsWrapper = styled_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0;\n"], ["\n  color: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0;\n"])), exports.UiTableColors.text);
var StyledPageInfoSpan = styled_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  user-select: none;\n"], ["\n  user-select: none;\n"])));
var iconStyle = styled_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 2px;\n  margin: 0 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 2px;\n  margin: 0 8px;\n"])), exports.UiTableColors.primary);
function UITable(props) {
    var hasRowCount = typeof props.rowCount === 'number';
    var rowCount = hasRowCount ? props.rowCount : props.data.length;
    var _a = React.useState(1), pageIndex = _a[0], setPageIndex = _a[1];
    var dataWithEmptyRow = React.useMemo(function () {
        if (hasRowCount && props.data.length) {
            var data = Array.from(props.data);
            while (data.length % rowCount !== 0 || data.length === 0) {
                data.push(null);
            }
            return data;
        }
        if (props.data.length === 0 && hasRowCount) {
            var data = [];
            while (data.length % rowCount !== 0 || data.length === 0) {
                data.push(null);
            }
            return data;
        }
        return [];
    }, [hasRowCount, props.data, rowCount]);
    var tableData = React.useMemo(function () {
        return dataWithEmptyRow.slice((pageIndex - 1) * rowCount, pageIndex * props.rowCount);
    }, [dataWithEmptyRow, pageIndex, rowCount, props.rowCount]);
    var pageCount = dataWithEmptyRow.length / rowCount;
    /*
    UiTable Lifecycle
    */
    function setPageIndexCallback(index) {
        var nextPage = Math.max(1, Math.min(pageCount, index));
        if (pageIndex !== nextPage) {
            setPageIndex(nextPage);
            if (props.onChangePage) {
                props.onChangePage(nextPage, pageCount);
            }
        }
    }
    React.useEffect(function () {
        setPageIndex(1);
    }, [props.id]);
    return (React.createElement(UiTableWrapper, { className: props.className },
        React.createElement(StyledUiTable, null,
            React.createElement(StyledTHead, null,
                React.createElement(StyledHeadTr, null, props.columns.map(function (_a, index) {
                    var title = _a.title;
                    return (React.createElement(StyledHeadTh, { key: index }, title));
                }))),
            React.createElement(StyledTableBody, null, tableData.map(function (item, index) { return (React.createElement(StyledBodyTr, { key: index }, props.columns.map(function (_a, indexNested) {
                var itemRenderer = _a.itemRenderer;
                if (!item) {
                    return React.createElement(StyledBodyTd, { key: indexNested });
                }
                return (React.createElement(StyledBodyTd, { key: indexNested }, typeof itemRenderer === 'function' ? itemRenderer(item) : itemRenderer));
            }))); }))),
        hasRowCount && !props.hidePagination && (React.createElement(PaginationButtonsWrapper, null,
            React.createElement(ui_1.UIIcon, { name: "chevronLeft", size: 24, className: iconStyle, color: exports.UiTableColors.white, onClick: function () { return setPageIndexCallback(pageIndex - 1); } }),
            React.createElement(StyledPageInfoSpan, null,
                pageIndex,
                " / ",
                pageCount || 1),
            React.createElement(ui_1.UIIcon, { name: "chevronRight", size: 24, className: iconStyle, color: exports.UiTableColors.white, onClick: function () { return setPageIndexCallback(pageIndex + 1); } })))));
}
exports.UITable = UITable;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/styled/index.ts [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
exports.createGlobalStyle = styled_components_1.createGlobalStyle;
var mixins_1 = require("./mixins");
exports.mixins = mixins_1.mixins;
var css_1 = require("./css");
exports.css = css_1.css;
var theme_1 = require("./theme");
exports.colors = theme_1.colors;
exports.setTheme = theme_1.setTheme;
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
var styled = styled_components_1.default;
var globalStyleCreator = function () { return styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), css_1.globalStyle()); };
exports.globalStyleCreator = globalStyleCreator;
exports.default = styled;
var templateObject_1;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/styled/css.ts [***]
    "use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var classnames_1 = __importDefault(require("classnames"));
var utils_1 = require("~/utils");
var styles = [];
var globals = [];
function cssToString(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var mergedCss = '';
    _styles.forEach(function (_css, index) {
        mergedCss += _css + (args[index] || '');
    });
    return mergedCss
        .replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ' ')
        .replace(/\s+/g, ' ')
        .replace(/(\r\n|\n|\r)/gm, ' ');
}
function css(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var _css = cssToString.apply(void 0, __spreadArrays([_styles], args));
    var className = utils_1.makeid(9);
    styles.push({ className: className, css: _css });
    return className;
}
function globalCss(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    globals.push(cssToString.apply(void 0, __spreadArrays([_styles], args)));
}
function keyframes(_styles) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // eslint-disable-next-line
    var _keyframe = styled_components_1.keyframes.apply(void 0, __spreadArrays([_styles], args));
    var _keyframeCss = _keyframe.rules.join('');
    globals.push(_keyframeCss);
    return _keyframe.getName();
}
css.styled = styled_components_1.css;
css.global = globalCss;
css.cx = classnames_1.default;
css.keyframes = keyframes;
var globalStyle = function () { return "\n" + styles.map(function (style) { return "." + style.className + "{" + style.css + "}"; }).join('') + "\n" + globals.join('\n') + "\n"; };
exports.globalStyle = globalStyle;
var _css = css;
exports.css = _css;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/pages/home/index.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var ui_1 = require("~/components/ui");
/* Home Style Constants */
/* Home Styles */
var HomeWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var a = styled_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: red;\n"], ["\n  color: red;\n"])));
/* Home Component  */
function Home(props) {
    return (React.createElement(ui_1.Container, null,
        React.createElement(HomeWrapper, { className: a }, "Hello")));
}
var _Home = Home;
exports.Home = _Home;
var templateObject_1, templateObject_2;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/popup.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var portal_1 = require("../common/portal");
var hooks_1 = require("~/utils/hooks");
var icon_1 = require("./icon");
/*
  Popup Colors // TODO : move theme.json
*/
exports.PopupColors = {
    wrapperBackground: 'transparent',
    overlayBackground: 'rgba(0, 0, 0, 0.3)',
};
/*
  Popup Styles
*/
var StyledPopupOverlay = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), exports.PopupColors.overlayBackground);
var StyledPopup = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  z-index: 100;\n  position: relative;\n"], ["\n  background-color: ", ";\n  z-index: 100;\n  position: relative;\n"])), exports.PopupColors.wrapperBackground);
var iconStyle = styled_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n"])));
var PopupDefaultProps = {
    hideOnOverlayClicked: true,
    shouldShowCloseIcon: true,
};
var _Popup = function (props) {
    var _a = hooks_1.useStateFromProp(props.isShown), isShown = _a[0], setIsShown = _a[1];
    var _b = __assign(__assign({}, PopupDefaultProps), props), children = _b.children, hideOnOverlayClicked = _b.hideOnOverlayClicked, onClose = _b.onClose, shouldShowCloseIcon = _b.shouldShowCloseIcon;
    var __ = (React.createElement(portal_1.Portal, null,
        React.createElement(StyledPopupOverlay, { onClick: hideOnOverlayClicked &&
                (function () {
                    closePopup();
                }) },
            React.createElement(StyledPopup, { onClick: function (e) {
                    e.stopPropagation();
                } },
                shouldShowCloseIcon && React.createElement(icon_1.UIIcon, { name: "close", size: 12, className: iconStyle, onClick: closePopup }),
                children))));
    /*
    Popup Lifecycle
    */
    /*
    Popup Functions
    */
    function closePopup() {
        setIsShown(false);
        onClose();
    }
    return React.createElement(portal_1.Portal, null, isShown ? __ : null);
};
var Popup = _Popup;
exports.Popup = Popup;
var templateObject_1, templateObject_2, templateObject_3;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/loading.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var LOADING_DEFAULT_COLOR = 'currentColor';
var ldsRollerKeyframes = styled_1.css.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"], ["\n  0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"])));
var LdsRoller = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", "px;\n  height: ", "px;\n  &:after {\n    content: ' ';\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    margin: 1px;\n    border-radius: 50%;\n    border: ", "px solid ", ";\n    border-color: ", " transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"], ["\n  display: inline-block;\n  width: ", "px;\n  height: ", "px;\n  &:after {\n    content: ' ';\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    margin: 1px;\n    border-radius: 50%;\n    border: ", "px solid ", ";\n    border-color: ", " transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.size * 0.71875; }, function (props) { return props.size * 0.71875; }, function (props) { return props.size * 0.078125; }, function (props) { return props.color; }, function (props) { return props.color; }, ldsRollerKeyframes);
var Loading = function (props) {
    return React.createElement(LdsRoller, { color: props.color || LOADING_DEFAULT_COLOR, size: props.size || 20, className: props.className });
};
exports.Loading = Loading;
var templateObject_1, templateObject_2;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/checkbox.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importDefault(require("~/styled"));
// TODO: refactor css
var primaryColor = '#0075ff';
var deactiveColor = '#5a5358';
var StyledLabel = styled_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: ", "px;\n  margin-right: ", "px;\n  cursor: pointer;\n"], ["\n  margin-left: ", "px;\n  margin-right: ", "px;\n  cursor: pointer;\n"])), function (props) { return (props.poition === 'right' ? 8 : 0); }, function (props) { return (props.poition === 'left' ? 8 : 0); });
var StyledCheckboxWrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var StyledCheckbox = styled_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  flex-shrink: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  cursor: pointer;\n  width: 32px;\n  height: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n\n  ::before {\n    content: ' ';\n    position: absolute;\n    transition: all 0.1s;\n    top: 2px;\n    right: 18px;\n    bottom: 2px;\n    left: 2px;\n    border-radius: 50%;\n    background: ", ";\n  }\n  :checked {\n    border-color: ", ";\n    ::before {\n      right: 2px;\n      left: 18px;\n      background: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  flex-shrink: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n  cursor: pointer;\n  width: 32px;\n  height: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n\n  ::before {\n    content: ' ';\n    position: absolute;\n    transition: all 0.1s;\n    top: 2px;\n    right: 18px;\n    bottom: 2px;\n    left: 2px;\n    border-radius: 50%;\n    background: ", ";\n  }\n  :checked {\n    border-color: ", ";\n    ::before {\n      right: 2px;\n      left: 18px;\n      background: ", ";\n    }\n  }\n"])), function (props) { return (props.isAlwaysHighlighted ? primaryColor : deactiveColor); }, function (props) { return (props.isAlwaysHighlighted ? primaryColor : deactiveColor); }, primaryColor, primaryColor);
function UICheckbox(props) {
    var id = props.id, label = props.label, unCheckedlabel = props.unCheckedlabel;
    return (React.createElement(StyledCheckboxWrapper, { className: props.className },
        unCheckedlabel && React.createElement(StyledLabel, { poition: "left" }, unCheckedlabel),
        React.createElement(StyledCheckbox, { checked: props.value, isAlwaysHighlighted: props.alwaysHighlighted, type: "checkbox", id: id, onChange: function (e) {
                if (props.onChange) {
                    props.onChange(e.target.checked);
                }
            } }),
        React.createElement(StyledLabel, { poition: "right" }, label)));
}
exports.UICheckbox = UICheckbox;
var templateObject_1, templateObject_2, templateObject_3;
 

  

   // [***] /mnt/c/Users/yasin/Documents/projects/word-memoizer/src/components/ui/table.tsx [***]
    "use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_1 = __importStar(require("~/styled"));
var ui_1 = require("~/components/ui");
/*
  UiTable Colors // TODO : move theme.json
*/
exports.UiTableColors = {
    primary: '#0075ff',
    white: '#fff',
    text: '#808080',
    tableBoxShadow: '#ccc',
    tableBodyEvenChild: '#f5f5f5',
};
/*
  UiTable Styles
*/
var StyledUiTable = styled_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  max-height: 150px;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  max-height: 150px;\n"])));
var StyledHeadTr = styled_1.default.tr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 50px;\n  background: ", ";\n  color: ", ";\n"], ["\n  height: 50px;\n  background: ", ";\n  color: ", ";\n"])), exports.UiTableColors.primary, exports.UiTableColors.white);
var StyledHeadTh = styled_1.default.th(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  font-size: 18px;\n  padding-left: 8px;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"], ["\n  text-align: left;\n  font-size: 18px;\n  padding-left: 8px;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"])));
var StyledBodyTd = styled_1.default.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 15px;\n  padding-left: 8px;\n  text-align: left;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"], ["\n  font-size: 15px;\n  padding-left: 8px;\n  text-align: left;\n  :first-child {\n    padding-left: 40px;\n  }\n  :last-child {\n    padding-right: 40px;\n  }\n"])));
var StyledBodyTr = styled_1.default(StyledHeadTr)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  height: 50px;\n"], ["\n  background: ", ";\n  color: ", ";\n  height: 50px;\n"])), exports.UiTableColors.white, exports.UiTableColors.text);
var StyledTHead = styled_1.default.thead(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  > tr th {\n    :first-child {\n      border-top-left-radius: 10px;\n    }\n    :last-child {\n      border-top-right-radius: 10px;\n    }\n  }\n"], ["\n  > tr th {\n    :first-child {\n      border-top-left-radius: 10px;\n    }\n    :last-child {\n      border-top-right-radius: 10px;\n    }\n  }\n"])));
var StyledTableBody = styled_1.default.tbody(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", " {\n    :nth-child(even) {\n      background-color: ", ";\n    }\n    :last-child {\n      ", " {\n        :first-child {\n          border-bottom-left-radius: 10px;\n        }\n        :last-child {\n          border-bottom-right-radius: 10px;\n        }\n      }\n    }\n  }\n"], ["\n  ", " {\n    :nth-child(even) {\n      background-color: ", ";\n    }\n    :last-child {\n      ", " {\n        :first-child {\n          border-bottom-left-radius: 10px;\n        }\n        :last-child {\n          border-bottom-right-radius: 10px;\n        }\n      }\n    }\n  }\n"])), StyledBodyTr, exports.UiTableColors.tableBodyEvenChild, StyledBodyTd);
var UiTableWrapper = styled_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""])));
var PaginationButtonsWrapper = styled_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0;\n"], ["\n  color: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 0;\n"])), exports.UiTableColors.text);
var StyledPageInfoSpan = styled_1.default.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  user-select: none;\n"], ["\n  user-select: none;\n"])));
var iconStyle = styled_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 2px;\n  margin: 0 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 2px;\n  margin: 0 8px;\n"])), exports.UiTableColors.primary);
function UITable(props) {
    var hasRowCount = typeof props.rowCount === 'number';
    var rowCount = hasRowCount ? props.rowCount : props.data.length;
    var _a = React.useState(1), pageIndex = _a[0], setPageIndex = _a[1];
    var dataWithEmptyRow = React.useMemo(function () {
        if (hasRowCount && props.data.length) {
            var data = Array.from(props.data);
            while (data.length % rowCount !== 0 || data.length === 0) {
                data.push(null);
            }
            return data;
        }
        if (props.data.length === 0 && hasRowCount) {
            var data = [];
            while (data.length % rowCount !== 0 || data.length === 0) {
                data.push(null);
            }
            return data;
        }
        return [];
    }, [hasRowCount, props.data, rowCount]);
    var tableData = React.useMemo(function () {
        return dataWithEmptyRow.slice((pageIndex - 1) * rowCount, pageIndex * props.rowCount);
    }, [dataWithEmptyRow, pageIndex, rowCount, props.rowCount]);
    var pageCount = dataWithEmptyRow.length / rowCount;
    /*
    UiTable Lifecycle
    */
    function setPageIndexCallback(index) {
        var nextPage = Math.max(1, Math.min(pageCount, index));
        if (pageIndex !== nextPage) {
            setPageIndex(nextPage);
            if (props.onChangePage) {
                props.onChangePage(nextPage, pageCount);
            }
        }
    }
    React.useEffect(function () {
        setPageIndex(1);
    }, [props.id]);
    return (React.createElement(UiTableWrapper, { className: props.className },
        React.createElement(StyledUiTable, null,
            React.createElement(StyledTHead, null,
                React.createElement(StyledHeadTr, null, props.columns.map(function (_a, index) {
                    var title = _a.title;
                    return (React.createElement(StyledHeadTh, { key: index }, title));
                }))),
            React.createElement(StyledTableBody, null, tableData.map(function (item, index) { return (React.createElement(StyledBodyTr, { key: index }, props.columns.map(function (_a, indexNested) {
                var itemRenderer = _a.itemRenderer;
                if (!item) {
                    return React.createElement(StyledBodyTd, { key: indexNested });
                }
                return (React.createElement(StyledBodyTd, { key: indexNested }, typeof itemRenderer === 'function' ? itemRenderer(item) : itemRenderer));
            }))); }))),
        hasRowCount && !props.hidePagination && (React.createElement(PaginationButtonsWrapper, null,
            React.createElement(ui_1.UIIcon, { name: "chevronLeft", size: 24, className: iconStyle, color: exports.UiTableColors.white, onClick: function () { return setPageIndexCallback(pageIndex - 1); } }),
            React.createElement(StyledPageInfoSpan, null,
                pageIndex,
                " / ",
                pageCount || 1),
            React.createElement(ui_1.UIIcon, { name: "chevronRight", size: 24, className: iconStyle, color: exports.UiTableColors.white, onClick: function () { return setPageIndexCallback(pageIndex + 1); } })))));
}
exports.UITable = UITable;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
 

  