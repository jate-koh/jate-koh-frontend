
export function NavLogo() {
    return (
        <div className="flex flex-row items-center justify-center hover:cursor-pointer">
            <div className="flex-none">
                <a href="/">
                    <img src="/dashie1.png" alt="Dashie Logo" className="w-13 h-24"/>
                </a>
            </div>
            <div className="shrink">
                <a href="/">    
                    <span className="text-4xl pl-2 pr-5 font-semibold text-white ">Jate-Koh</span>
                </a>
            </div>
        </div>
    );
}
