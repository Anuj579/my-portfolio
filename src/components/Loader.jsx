function Loader(props) {
  
   if (props.load){
    return (
        <div className='min-h-screen flex flex-col justify-center items-center fixed top-0 left-0 overflow-hidden w-screen bg-primary'>
            <p className='text-white text-lg'>Loading Masterpiece...</p>
            <div className="loader w-2/5"></div>
        </div>
    )
   }
//    return null;
}

export default Loader
