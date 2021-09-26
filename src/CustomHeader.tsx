//css imports
import './CustomHeader.css'

// icon imports
import LeftArrowBack from './LeftArrowBack'

//defining props
type props={
    heading:string,
    desc:string
}

const CustomHeader = (props:props) => {
    return ( 
            <div className="headerContainer">
              <LeftArrowBack/>
                <div>
                    <h1>{props.heading}</h1>
                    {props.desc && <span className="desc">{props.desc}</span>}
                </div>
            </div>
     );
}
export default CustomHeader;









 
