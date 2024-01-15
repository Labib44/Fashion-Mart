import { Icon } from '@iconify/react';

const Subscribe = () => {
    return (
        <div>
            <h1 className="text-center text-gray-700 text-4xl sm:text-xl font-bold font-serif">Subscribe Newsletter.</h1>
            <p className="text-center text-gray-700 font-serif py-2">You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>

            <div>
                <div className="flex justify-center items-center my-10">
                    <input type="text" className="border-l border-t border-b outline-none border-[#FB3C60] rounded-l-full w-[500px] h-12 text-base md:text-lg px-5 py-2" placeholder="Enter Your Email" />
                    <button className="h-12 bg-[#FB3C60] hover:bg-red-700 text-white font-bold capitalize px-3 py-2 -ml-10 text-base md:text-lg rounded-full border-t border-r border-b border-orange-500">subscribe</button>
                </div>
                <div className="flex justify-center space-x-3 px-16 lg:px-0 md:px-0 sm:px-0">
                    <div className="w-10 h-10 bg-white hover:bg-secondary text-secondary hover:text-white rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                        <a href="https://www.facebook.com/md.labib.9/" target="_blank" rel="noreferrer"><Icon icon="ic:round-facebook" className="text-2xl  " /></a>
                    </div>
                    <div className="w-10 h-10 bg-white hover:bg-secondary text-secondary hover:text-white rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                        <a href="https://www.linkedin.com/in/labibur-rahman/" target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" className="text-2xl" /></a>
                    </div>
                    <div className="w-10 h-10 bg-white hover:bg-secondary text-secondary hover:text-white rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                        <a href="https://github.com/Labib44" target="_blank" rel="noreferrer"><Icon icon="uiw:github" className="text-2xl" /></a>
                    </div>
                    <div className="w-10 h-10 bg-white hover:bg-secondary text-secondary hover:text-white rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                        <Icon icon="mdi:twitter" className="text-2xl" />
                    </div>

                    <div className="w-10 h-10 bg-white hover:bg-secondary text-secondary hover:text-white rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                        <Icon icon="mdi:pinterest" className="text-2xl" />
                    </div>
                </div>
                <div className='py-20'>
                    <hr />
                    <div className='p-10 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xxl:divide-x xl:divide-x lg:divide-x sm:divide-y'>
                        
                        <div className='flex items-center gap-3 px-5'>
                            <div>
                                <Icon icon="emojione-monotone:rocket" className='text-7xl text-secondary'/>
                            </div>
                            <div>
                                <h1 className='text-center text-2xl font-serif font-bold'>Free Delivery</h1>
                                <p className='text-center font-serif px-1'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 px-5 sm:pt-5'>
                            <div>
                                <Icon icon="game-icons:take-my-money" className='text-7xl text-secondary'/>
                            </div>
                            <div>
                                <h1 className='text-center text-2xl font-serif font-bold'>Money Guarantee</h1>
                                <p className='text-center font-serif px-1'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 px-5 sm:pt-5'>
                            <div>
                                <Icon icon="fluent:person-support-24-regular" className='text-7xl text-secondary'/>
                            </div>
                            <div>
                                <h1 className='text-center text-2xl font-serif font-bold'>Online Support</h1>
                                <p className='text-center font-serif px-1'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.</p>
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;