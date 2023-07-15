
import { RainbowLogoWord } from '@/components/navbar/RainbowLogoWord';

export function NavLogo() {
    return (
        <div className='flex flex-row items-center justify-center transform transition duration-500 hover:cursor-pointer hover:scale-105'>
            <div className='flex-none transform transition duration-500 hover:scale-105 hover:-translate-x-1 hover:translate-y-1'>
                <a href='/'>
                    <img src='/dashie1.png' alt='Dashie Logo' className='w-13 h-24'/>
                </a>
            </div>
            <div className='shrink pl-2'>
                <RainbowLogoWord 
                    href='/' 
                    colorSequences={['hover:dashie-red', 'hover:dashie-orange', 'hover:dashie-amber', 
                        'hover:dashie-green', 'hover:dashie-sky', 'hover:dashie-purple', 
                        'hover:dashie-orange', 'hover:dashie-amber', 'hover:dashie-green',
                    ]}
                    hoverScale='scale-105'
                    className='transition duration-500 text-3xl hover:translate-x-1 hover:translate-y-1 font-semibold'
                >
                    J/a/t/e/-/K/o/h
                </RainbowLogoWord>
            </div>
        </div>
    );
}
/* <span className='text-4xl pl-2 pr-5 font-semibold text-white '>Jate-Koh</span> */
