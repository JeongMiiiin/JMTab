import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TabBtn from "./Btn";
var Tab = function (_a) {
    var initIdx = _a.initIdx, TabList = _a.TabList;
    var _b = useState(initIdx), tabIdx = _b[0], setTabIdx = _b[1];
    var Content = TabList[tabIdx].contents;
    var changeIdx = function (idx) {
        Content = TabList[idx].contents;
        setTabIdx(function () { return idx; });
    };
    var btnList = [];
    for (var i = 0; i < TabList.length; i++) {
        btnList.push(TabList[i].title);
    }
    return (_jsxs("div", { children: [_jsx("div", { children: btnList.map(function (item, index) { return (_jsx(TabBtn, { idx: index, title: item, activeFlag: tabIdx == index, changeTab: changeIdx }, index)); }) }), _jsx("div", { children: Content })] }));
};
export default Tab;
