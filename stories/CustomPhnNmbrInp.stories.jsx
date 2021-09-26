"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSelectAndInput = void 0;
var react_1 = __importDefault(require("react"));
var CustomPhnNmbrInp_1 = __importDefault(require("./CustomPhnNmbrInp"));
exports.default = {
    component: CustomPhnNmbrInp_1.default,
    title: 'Components/Custom phone number input',
};
var Template = function (args) { return <CustomPhnNmbrInp_1.default {...args}/>; };
exports.CustomSelectAndInput = Template.bind({});
exports.CustomSelectAndInput.args = {};
