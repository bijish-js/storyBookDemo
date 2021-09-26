"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//css imports
require("./CustomHeader.css");
// icon imports
var LeftArrowBack_1 = __importDefault(require("./LeftArrowBack"));
var CustomHeader = function (props) {
    return (<div className="headerContainer">
              <LeftArrowBack_1.default />
                <div>
                    <h1>{props.heading}</h1>
                    {props.desc && <span className="desc">{props.desc}</span>}
                </div>
            </div>);
};
exports.default = CustomHeader;
