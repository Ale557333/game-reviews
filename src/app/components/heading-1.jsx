import { montserrat } from '../fonts'

const Heading1 = ({ children }) => {
    return <h1 className={`${montserrat.className}`}>{ children }</h1>
}

export default Heading1