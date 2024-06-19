import React from 'react'

function ServiceCard({ image, title, description }) {
    return (
        <div
            className="service-card relative overflow-hidden h-[300px] w-[300px] rounded-3xl border md:hover:shadow-btn-glow transition-all duration-300"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h3 className="text-3xl underline font-bold mb-2  ">{title}</h3>
                <p className="text-base mx-2">{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard
