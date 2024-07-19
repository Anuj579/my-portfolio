import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

function CustomButton({ text, icon, to, onClick, className }) {

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };
  return (
    <Button onClick={handleClick} variant="outlined" className="custom-btn flex items-center gap-3 text-white rounded-md outline-none px-5 py-1.5 active:opacity-100 hover:opacity-100 border-white hover:bg-secondary hover:border-secondary md:bg-transparent hover:shadow-btn-glow focus:shadow-btn-glow focus:bg-secondary focus:ring-0 focus:border-secondary transition-all duration-300">
      <p className='text-sm font-semibold'>{text}</p>
      {icon && <img src={icon} alt="icon" className={className} />}
    </Button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton
