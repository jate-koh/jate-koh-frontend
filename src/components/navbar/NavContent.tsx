import { NavButton } from "@/components/navbar/NavButton";

export function NavContent() {
    return(
        <div className="flex pl-20 justify-center text-lg font-medium">
            <ul className="flex items-center h-24">
                <NavButton href="#" margin="m-6" hoverColor="text-red-600" hoverScale="125">
                    About Me
                </NavButton>
                <NavButton href="#" margin="m-6" hoverColor="text-orange-600" hoverScale="125">
                    Files
                </NavButton>
                <NavButton href="/contact" margin="m-6" hoverColor="text-yellow-600" hoverScale="125">
                    Contact
                </NavButton>
            </ul>
        </div>
    );
}