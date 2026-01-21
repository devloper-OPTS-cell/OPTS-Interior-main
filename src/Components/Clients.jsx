import React from 'react'
const Logo1 = 'https://ail-india.b-cdn.net/1.png';
const Logo2 = 'https://ail-india.b-cdn.net/2.png';
const Logo4 = 'https://ail-india.b-cdn.net/4.png';
const Logo5 = 'https://ail-india.b-cdn.net/5.png';
const Logo6 = 'https://ail-india.b-cdn.net/6.png';
const Logo7 = 'https://ail-india.b-cdn.net/7.png';
const Logo8 = 'https://ail-india.b-cdn.net/8.png';
const Logo9 = 'https://ail-india.b-cdn.net/9.png';
const Logo10 = 'https://ail-india.b-cdn.net/10.png';
const Logo11 = 'https://ail-india.b-cdn.net/11.png';

function Clients() {



  return (
    <div className='w-screen -mt-10  flex flex-col items-center'>
        <h1 className=' font-grotesk text-[6rem]'>Our Clients</h1>
<div className=' flex flex-col items-center justify-center'>
        <div className='flex justify-between gap-5 items-center'>
            <img className='w-60 h-45 object-cover' src={Logo1} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo2} alt="" />
            <img className='w-60 h-45 object-cover ' src={Logo11} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo4} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo5} alt="" />
        </div>
        <div className='flex justify-between gap-5 items-center -mt-10'>
            <img className='w-60 h-45 object-cover' src={Logo6} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo7} alt="" />
            <img className='w-60 h-45 h-20 object-cover' src={Logo8} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo9} alt="" />
            <img className='w-60 h-45 object-cover' src={Logo10} alt="" />
        </div>
</div>




    </div>
  )
}

export default Clients