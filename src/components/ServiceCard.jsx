const ServiceCard = ({ imgURL, label, subtext,url }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        </div> */}
          <a href={url}>
          <img src={imgURL} alt={label} />
          </a>
      </div>
    );
  };
  
  export default ServiceCard;