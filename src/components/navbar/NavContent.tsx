import { NavButton } from '@/components/navbar/NavButton';

export function NavContent() {
    return(
        <div className="flex pl-20 justify-center text-lg font-medium">
            <ul className="flex items-center h-24">
                <NavButton href="#" margin="m-6" className="hover:dashie-red" hoverScale="scale-125">
                    About Me
                </NavButton>
                <NavButton href="#" margin="m-6" className="hover:dashie-orange" hoverScale="scale-125">
                    Files
                </NavButton>
                <NavButton href="/contact" margin="m-6" className="hover:dashie-amber" hoverScale="scale-125">
                    Contact
                </NavButton>
            </ul>
        </div>
    );
}
/* <div className="transform transition duration-500 hover:cursor-pointer hover:scale-125 hover:dashie-amber">
        <li>
            <a>Test</a>
        </li>
</div>  */