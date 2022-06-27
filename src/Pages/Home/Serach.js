import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Serach = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='my-16 md:px-16 px-3'>
            <div className='my-8'>
                <div class="text-center divider">
                    <h3 class="animate-charcter text-3xl">  রক্তদাতা খুজে নিন এখান থেকে</h3>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div class="form-control w-full max-w-xs">
                    <label className='label' htmlFor=""><span className='label-text'>রক্তের গ্রুপ</span></label>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className='label' htmlFor=""><span className='label-text'>জেলা</span></label>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Distric</option>
                        <option>Dhaka</option>
                        <option>Faridpur</option>
                        <option>Gazipur</option>
                        <option>Gopalganj</option>
                        <option>Jamalpur</option>
                        <option>Kishoreganj</option>
                        <option>Madaripur</option>
                        <option>Manikganj</option>
                        <option>Munshiganj</option>
                        <option>Mymensingh</option>
                        <option>Narayanganj</option>
                        <option>Narsingdi</option>
                        <option>Netrokona</option>
                        <option>Rajbari</option>
                        <option>Shariatpur</option>
                        <option>Sherpur</option>
                        <option>Tangail</option>
                        <option>Bogra</option>
                        <option>Joypurhat</option>
                        <option>Naogaon</option>
                        <option>Natore</option>
                        <option>Nawabganj</option>
                        <option>Pabna</option>
                        <option>Rajshahi</option>
                        <option>Sirajgonj</option>
                        <option>Dinajpur</option>
                        <option>Gaibandha</option>
                        <option>Kurigram</option>
                        <option>Lalmonirhat</option>
                        <option>Nilphamari</option>
                        <option>Panchagarh</option>
                        <option>Rangpur</option>
                        <option>Thakurgaon</option>
                        <option>Barguna</option>
                        <option>Barisal</option>
                        <option>Bhola</option>
                        <option>Jhalokati</option>
                        <option>Patuakhali</option>
                        <option>Pirojpur</option>
                        <option>Bandarban</option>
                        <option>Brahmanbaria</option>
                        <option>Chandpur</option>
                        <option>Chittagong</option>
                        <option>Comilla</option>
                        <option>Cox</option>''s Bazar
                        <option>Feni</option>
                        <option>Khagrachari</option>
                        <option>Lakshmipur</option>
                        <option>Noakhali</option>
                        <option>Rangamati</option>
                        <option>Habiganj</option>
                        <option>Maulvibazar</option>
                        <option>Sunamganj</option>
                        <option>Sylhet</option>
                        <option>Bagerhat</option>
                        <option>Chuadanga</option>
                        <option>Jessore</option>
                        <option>Jhenaidah</option>
                        <option>Khulna</option>
                        <option>Kushtia</option>
                        <option>Magura</option>
                        <option>Meherpur</option>
                        <option>Narail</option>
                        <option>Satkhira</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className='label' htmlFor=""><span className='label-text'>যে তারিখ রক্ত লাগবে</span></label>
                    <DatePicker className='input input-bordered w-full max-w-xs' selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label className='label' htmlFor=""><span className='label-text'>রক্তদাতার ধরণ</span></label>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select</option>
                        <option>সকল রক্তদাতা</option>
                        <option>রক্তদানে সমর্থ</option>

                    </select>
                </div>

            </div>
        </div>
    );
};

export default Serach;

