import { joinClassNames } from '@/utils/String';

type NavButtonProps = {
    children: string | JSX.Element | JSX.Element[],
    href?: string,
    hoverScale?: string,
    hoverGrow?: string,
    className?: string,
    margin?: string,
}

const navButtonClass = {
    common: 'transform transition duration-500 hover:cursor-pointer',
};

export function NavButton({ children, href, hoverScale, hoverGrow, className, margin }: NavButtonProps ) {
    return (
        <div className={joinClassNames(
            navButtonClass.common,
            className && `${className}`,
            hoverScale && `hover:${hoverScale}`,
            hoverGrow && `hover:${hoverGrow}`
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
