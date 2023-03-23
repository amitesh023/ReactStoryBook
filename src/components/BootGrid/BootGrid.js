import React from 'react'
import PropTypes from "prop-types"
//import './BootGrid.css'
const BootGrid = (props) => {
    const {children, justify = 'justify-content-center', align='align-items-center', ...rest } = props
    return (
        <div style={{ height: "200px", background:"#ededed" }} className={`d-flex ${justify} ${align}`} {...rest}>
            {/* <div class="badge bg-primary">Box</div>
            <div class="badge bg-primary">Box</div> */}
            {children}
        </div>
            )
}

BootGrid.propTypes = {
    // spacing: PropTypes.number,
    // wrap: PropTypes.bool,
    //custify: PropTypes.oneOf(["justify-content-start", "justify-content-end", "justify-content-center", "justify-content-between"]),
    
  }

export default BootGrid
