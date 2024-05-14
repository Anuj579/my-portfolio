function Loader({ load }) {

    if (load) {
        return (
            <div className=' flex flex-col items-center p-3 fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full'>
                <p className='text-white text-lg mb-2'>Loading Masterpiece...</p>
                <div className="loader w-2/5"></div>
            </div>
        )
    }
    //    return null;
}

export default Loader
