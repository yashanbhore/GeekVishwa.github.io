const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        </div> */}
          <img src={imgURL} alt={label} style={{width:"width: 50% !important",maxWidth:"100%"}} />
      </div>
    );
  };
  
  export default ServiceCard;