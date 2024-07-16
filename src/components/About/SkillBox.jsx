import React from 'react';

function SkillBox({ icon, className }) {
    return (
        <div
            // style={{ borderColor: color, backgroundColor: color, Opacity: '10%'}}
            className={`relative border rounded-tl-custom-large rounded-br-custom-large rounded-tr-custom-small rounded-bl-custom-small bg-opacity-10 hover:bg-opacity-20 p-4 flex items-center justify-center w-32 h-32 md:w-44 transition-all duration-300 ease-in-out ${className}`}
        >
            <img src={icon} alt="Skill Icon" />
        </div>
    );
}

export default SkillBox;
