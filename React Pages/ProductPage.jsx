import React, { useState } from 'react';

const ProductPage =() =>{

    const [images ,setImages] = useState({
        img1 : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2b514a6e-7236-44fc-8e5c-7d00f5323a36/air-jordan-1-mid-se-womens-shoes-0k55l8.pnghttps://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f2ff3b94-82fa-4fd2-97a7-72851b73ebfe/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png",
        img2 : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a1417b64-5279-4e04-a010-0a5c5e504d05/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png",
        img3 : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eed06a38-dc83-4bd6-a4f3-209d70980736/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png",
        img4 : "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f78fa9ac-c1fa-486b-8795-6f49b046ad6a/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png",
    })

    const [activateImg , setActivateImages={}] = useState(images.img1)
    const [amount ,setAmount] = useState(1);

    return (
             <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                    <div className='flex flex-col gap-6 lg:w-2/4'>
                        <img src ={activateImg} alt ="" className='w-full h-full aspect-aquare object-cover rounded'/>
                        <div className='flex flex-row justify-between  h-24'>
                            <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActivateImages(images.img1)}/>
                            <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActivateImages(images.img2)}/>  
                            <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActivateImages(images.img3)}/>
                            <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActivateImages(images.img4)}/>  
                        </div>     
                    </div>
                    {/*ABOUT */}
                    <div className='flex flex-col gap-4 lg:w-2/4'>
                        <div>
                            <span className='text-violet-600 font-semibold'> Special Sneakers</span>
                            <h1 className='text-3xl font-bold'>Air Jordan 1 Zoom CMFT 2</h1>
                        </div>
                        <p className='text-gray-700d'> 
                        Premium suede and Jordan Brand's signature Formula 23 foam come together to give you an extra luxurious (and extra cozy) AJ1. 
                        You don't need to play "either or" when it comes to choosing style or comfort with this one—which is nice, 'cause you deserve both.
                        </p>
                         <h6 className='text-2xl font-semibiold'>$149.99</h6> 
                         <div className='flex-flex-row itens-center gap-12'>
                            <div className='flex flex-row items-center'>
                                <button className=' bg-gray-200 py-2 px-5 rounded-1g text-violet-800 text-3xl' onclick={() =>setAmount((prev) => prev - 1)}>-</button>
                                 <span className=' py-4 px-6 rounded-lg '>{amount}</span>
                                 <button className='bg-gray-100 py-4 px-6 rounded-lg text-green-800 text-2xl' onClick={()=> setAmount((prev) => prev+1)}>+</button>
                            </div>
                            <button className='bg-violet-800 text-white font-semibold py-3 px-3 rounded-x h-full'> Add To Cart </button>
                        </div>
                 </div>   
             </div>
        )
    }
export default ProductPage;