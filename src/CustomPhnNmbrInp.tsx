//css imports
import './CustomPhnNmbrInp.css'

//hooks imports
import {useState} from 'react'

//icon imports
const countryCodes=[
    {
        country:"US",
        code:'+202',
        flag:'🇺🇸'
    },
    {
        country:"IN",
        code:'+91',
        flag:'🇮🇳'
    },
    {
        country:"SP",
        code:'+977',
        flag:'🇪🇸'
    },
    {
        country:"FR",
        code:'+94',
        flag:'🇫🇷'
    }
]
const PhoneNumberInput = () => {

    const [countryCode,setCountryCode]=useState('+202')
    const HandleChange=(e:any)=>{
        setCountryCode('')
        setCountryCode(e.target.value)
    }
    return ( 
        <div className="phoneNumberInput">

            <span className="phoneNumberInputSpan">
                <select className="countryCodeSelect" onChange={(e)=>HandleChange(e)} >
                    {
                        countryCodes.map((country,id)=>
                            {
                                return(
                                            <option value={country.code} key={id} > 
                                                {`${country.flag} ${country.country}`} 
                                            </option>
                                        )
                            }
                        )
                    }
                 </select>

                <p className="countryCodeText">{countryCode}</p>

                <input className="numberInput" type="text"/>
            </span>

        </div>
     );
}
 
export default PhoneNumberInput;