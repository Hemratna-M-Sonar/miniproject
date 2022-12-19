import React, {useState} from 'react';
import { useBookingInfoMutation } from '../services/userAuthApi';

const RideOrDrive = ({title, type1, type2, name1, name2, id1, id2, ph1, ph2, btn1, btn2}) => {
    const [error, setError] = useState({
        status:false,
        msg:"",
        type:""
    });

    // const navigate = useNavigate();
    const [bookingInfo, {isLoading}] = useBookingInfoMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=new FormData(e.currentTarget);
        const actualData = {
            source: data.get('source'),
            destination: data.get('destination')
        }
        console.log(actualData);
        if (actualData.source && actualData.destination){
                 
                const res = await bookingInfo(actualData);
                console.log(res)
                if (res.data.status === "Success"){
                    // token store krna hai
                    // storeToken(res.data.token)
                    // navigate('/'); 
                    console.log("booking done");
                    document.getElementById('rideordrive').reset();
                } 
                if (res.data.status === "failed") {
                    setError({status:true, msg: res.data.message, type:"error"}) 
                }

        } else {
            setError({status:true, msg: 'All fields are required', type:"error"})
        }
    }
  return (
    <>
        <div className="py-[2rem] px-[3rem]">
          <h1 className="text-5xl font-semibold mt-3 titleText">{title}</h1>
          <form action="" className="mt-10" method="post" onSubmit={handleSubmit} id="rideordrive">
          <input type={type1} name={name1} id={id1} className="block w-full p-3" placeholder={ph1}/>
          <input type={type2} name={name2} id={id2} className="block w-full p-3 mt-4" placeholder={ph2}/>

            <input className="px-5 py-3 mt-4 bg-black text-white rounded-xl hover:bg-slate-900 transition ease-in-out cursor-pointer" type="submit" value={btn1} />
            <input className="px-5 py-3 mt-4 bg-slate-200 ml-5 rounded-xl hover:bg-slate-300 transition ease-in-out cursor-pointer" type="submit" value={btn2} />
            {
              error ? <span className="flex items-center my-3 justify-center border py-1">{error.msg} </span> : ""
            }
          </form>
        </div>
    </>
  )
}

export default RideOrDrive;