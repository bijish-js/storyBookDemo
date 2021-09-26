"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//css imports
require("./CustomPhnNmbrInp.css");
//hooks imports
var react_1 = require("react");
//icon imports
var countryCodes = [
    {
        country: "US",
        code: '+202',
        flag: '🇺🇸'
    },
    {
        country: "IN",
        code: '+91',
        flag: '🇮🇳'
    },
    {
        country: "SP",
        code: '+977',
        flag: '🇪🇸'
    },
    {
        country: "FR",
        code: '+94',
        flag: '🇫🇷'
    }
];
var PhoneNumberInput = function () {
    var _a = (0, react_1.useState)('+202'), countryCode = _a[0], setCountryCode = _a[1];
    var HandleChange = function (e) {
        setCountryCode('');
        setCountryCode(e.target.value);
    };
    return (<div className="phoneNumberInput">

            <span className="phoneNumberInputSpan">
                <select className="countryCodeSelect" onChange={function (e) { return HandleChange(e); }}>
                    {countryCodes.map(function (country, id) {
            return (<option value={country.code} key={id}> 
                                                {country.flag + " " + country.country} 
                                            </option>);
        })}
                 </select>

                <p className="countryCodeText">{countryCode}</p>

                <input className="numberInput" type="text"/>
            </span>

        </div>);
};
exports.default = PhoneNumberInput;
