import React from 'react';
import {IoLocationOutline} from 'react-icons/io5'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import Kayaking from '../../../assets/kayakingimage1.png'
import Ship from '../../../assets/Shipimg.png'
import Boat from '../../../assets/boatimg.png'

const Package = () => {
    return (

        <div className='m-10'>
            <h1 className='text-center text-5xl font-bold mb-4'>Best Packages For You</h1>
            <p className='text-center text-xl mb-12'>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6'>
                <button className="px-3 py-5 text-lg font-bold rounded" style={{ backgroundColor: '#3282AD', color: 'white' }}>Maldives</button>
                <button className="px-3 py-5 text-lg font-bold rounded" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Samudram</button>
                <button className="px-3 py-5 text-lg font-bold rounded" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Cordelia</button>
                <button className="px-3 py-5 text-lg font-bold rounded" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Agatti</button>
                <button className="px-3 py-5 text-lg font-bold rounded" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>More</button>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly mt-16 flex-wrap lg'>
                <div className='md:w-1/4 shadow-xl  rounded-xl border-2'>
                    <img className='h-96' src={Kayaking} alt='kayaking'/>
                    <div className='flex justify-between mt-4'>
                        <div>
                            <IoLocationOutline size={30} className="inline ml-2" />
                            <span className='text-2xl ml-2'>Indonesia</span>
                        </div>
                        <div className='mr-4'>
                            <AiFillStar size={20}color='blue' className='inline'/>
                            <span className='ml-2 text-lg'>4.5</span>
                        </div>
                    </div>
                    <p className='ml-4 mt-2'>Explore the Beauty of the island for 3 days,<br/>
                      and 2 nights with our travel agency...</p>
                      <div className='text-center my-6'>
                      <button className='bg-blue-200 text-lg font-medium px-4 py-2 rounded'>Book Now</button>
                      </div>
                </div>
                <div className='md:w-1/4 shadow-xl rounded-xl border-2' >
                   <img className='h-96' src={Ship} alt='ship'/>
                   <div className='flex justify-between mt-4'>
                        <div>
                            <IoLocationOutline size={30} className="inline ml-2" />
                            <span className='text-2xl ml-2'>Indonesia</span>
                        </div>
                        <div className='mr-4'>
                            <AiFillStar size={20}color='blue' className='inline'/>
                            <span className='ml-2 text-lg'>4.5</span>
                        </div>
                    </div>
                    <p className='ml-4 mt-2'>Explore the Beauty of the island for 3 days,<br/>
                      and 2 nights with our travel agency...</p>
                      <div className='text-center my-6'>
                      <button className='bg-blue-200 text-lg font-medium px-4 py-2 rounded'>Book Now</button>
                      </div>
                </div>
                <div className='md:w-1/4 shadow-xl rounded-xl border-2'>
                <img className='h-96' src={Boat} alt='boat'/>
                <div className='flex justify-between mt-4'>
                        <div>
                            <IoLocationOutline size={30} className="inline ml-2" />
                            <span className='text-2xl ml-2'>Indonesia</span>
                        </div>
                        <div className='mr-4'>
                            <AiFillStar size={20}color='blue' className='inline'/>
                            <span className='ml-2 text-lg'>4.5</span>
                        </div>
                    </div>
                    <p className='ml-4 mt-2'>Explore the Beauty of the island for 3 days,<br/>
                      and 2 nights with our travel agency...</p>
                      <div className='text-center my-6'>
                      <button className='bg-blue-200 text-lg font-medium px-4 py-2 rounded'>Book Now</button>
                      </div>
                </div>
            </div>
            <div className='flex justify-center mt-8 gap-4'>
            <div className='w-10 h-10 border-2 border-blue-200 rounded-full'></div>
            <div className='w-10 h-10 border-2  border-blue-200 bg-blue-500 rounded-full'></div>
            <div className='w-10 h-10 border-2   border-blue-200 rounded-full'></div>
            </div>
            <div className='text-center mt-8'>
                <button className='border-blue-500 text-xl text-blue-500 px-8 py-4 border-2 rounded-sm'>Discover More</button>
            </div>
      </div>
    );
}

export default Package;