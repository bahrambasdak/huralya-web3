import React from 'react';
import ReactLoading from 'react-loading';
 
const LoaderAnimation = ({ type, color }) => (
    <div style={{position:'' ,left:'0',top:'0' }}>
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);
 
export default LoaderAnimation;