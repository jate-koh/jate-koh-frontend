import { useState } from "react";

import { NavLogo } from "@/components/navbar/NavLogo";
import { NavContent } from "@/components/navbar/NavContent";

function NavigationBar() {

    return(
        <nav className="text-white bg-slate-900 h-30">
            <div className="flex flex-row items-center justify-center h-24 w-full">
                <div className="flex-none">
                    <NavLogo />
                </div>
                <div className="flex-none">
                    <NavContent />
                </div>
            </div>
        </nav>
    );
}


export default NavigationBar;