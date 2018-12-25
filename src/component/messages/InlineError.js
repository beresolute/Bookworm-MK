import React from 'react';
import PropTypes from "prop-types";


const InlineError = ({text}) => 
(
<span style={{color:"#922c27"}}>
    {text}
</span>
);

InlineError.PropTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;