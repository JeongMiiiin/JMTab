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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
var TabBtn = function (_a) {
    var idx = _a.idx, title = _a.title, activeFlag = _a.activeFlag, changeTab = _a.changeTab;
    return (_jsx(_Fragment, { children: activeFlag ? (_jsx("div", __assign({ className: "active" }, { children: title }))) : (_jsx("div", __assign({ onClick: function () { return changeTab(idx); } }, { children: title }))) }));
};
export default TabBtn;
