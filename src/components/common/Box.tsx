import { joinClassNames } from "@/utils/String";

type BoxProps = {
    children: string | JSX.Element | JSX.Element[],
    basis?: string,
    className?: string,
    onClick?: () => void,
};

type State = {
    initAnim: boolean,
    isHovered: boolean,
}

const boxClass = {
    base: 'inline-flex items-center justify-center',
};

export function Box({ children, basis, className, onClick }: BoxProps) {

    return (
        <div
            className={joinClassNames(
                boxClass.base,
                basis && `${basis}`,
                className && `${className}`
            )}
        >
            {children}
        </div>
    );
}