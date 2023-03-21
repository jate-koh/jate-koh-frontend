import { joinClassNames } from "@/utils/String";

type RainbowLogo = {
    children: string,
    active?: boolean,
    disabled?: boolean,
    href?: string,
    hoverScale?: string,
    hoverGrow?: string,
    className?: string,
    spanClassName?: string,
    colorSequences?: string[],
}

const RainbowLogoClass = {
    common: 'transform transition duration-500 hover:cursor-pointer',
};

export function RainbowLogoWord({ 
    children, active, disabled, href, 
    hoverScale, hoverGrow, className,
    spanClassName, colorSequences 
}: RainbowLogo) {
    return(
        <div
            className={joinClassNames(
                hoverScale && `hover:${hoverScale}`,
                hoverGrow && `hover:${hoverGrow}`,
                className && `${className}`,
                RainbowLogoClass.common,
            )}
        >
            <a href={href}>
                {
                    children.split('/').map((word, index) => {
                        return(
                            <span key={index} className={joinClassNames(
                                colorSequences && `${colorSequences[index]}`,
                                spanClassName && `${spanClassName}`,
                            )}>
                                {word.trim()}
                            </span>
                        );
                    })
                }
            </a>
        </div>
    );
}