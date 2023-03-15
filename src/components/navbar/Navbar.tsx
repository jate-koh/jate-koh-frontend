import { useState } from 'react';

import { NavLogo } from '@/components/navbar/NavLogo';
import { NavContent } from '@/components/navbar/NavContent';

function NavigationBar() {

    return(
        <nav className="text-white bg-slate-900 h-30">
            <div className="flex flex-row items-center justify-center h-24 w-full">
                <div className="flex-none">
                    <NavLogo />
                </div>
                <div className="lg:block hidden flex-none">
                    <NavContent />
                </div>
                <div className="sm:hidden">
                    Dropdown
                </div>
            </div>
        </nav>
    );
}


export default NavigationBar;