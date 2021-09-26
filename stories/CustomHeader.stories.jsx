"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleHeader = void 0;
var react_1 = __importDefault(require("react"));
var CustomHeader_1 = __importDefault(require("./CustomHeader"));
exports.default = {
    component: CustomHeader_1.default,
    title: 'Components/Custom Header',
};
var Template = function (args) { return <CustomHeader_1.default {...args}/>; };
exports.SimpleHeader = Template.bind({});
exports.SimpleHeader.args = {
    heading: "this is a test :)",
    desc: "helooo"
};
