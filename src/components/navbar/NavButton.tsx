import { joinClassNames } from '@/utils/String';

type NavButtonProps = {
    children: string | JSX.Element | JSX.Element[],
    href?: string,
    hoverScale?: string,
    hoverGrow?: string,
    hoverColor?: string,
    margin?: string,
}

const navButtonClass = {
    common: 'transform transition duration-500 hover:cursor-pointer',
};

export function NavButton({ children, href, hoverScale, hoverGrow, hoverColor, margin }: NavButtonProps ) {
    return (
        <div className={joinClassNames(
            navButtonClass.common,
            hoverColor && `hover:${hoverColor}`,
            hoverScale && `hover:scale-${hoverScale}`,
            hoverGrow && `hover:grow-${hoverGrow}`
        )}>
            <li className={joinClassNames(margin && `${margin}`)}>
                <a  href={href} 
                > 
                    {children}
                </a>
            </li>
        </div>
    );
}
