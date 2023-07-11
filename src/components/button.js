import propTypes from "prop-types";
import { classNames} from './classNames';
import React from 'react'

function Button (className, children, rounded, variant, ...props) {
    <button className={classNames("rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none", className)} {...props}>{children}</button>
}
export default Button;