import { joinClassNames } from "@/utils/String";

type BoxProps = {
    children: string | JSX.Element | JSX.Element[],
    colorSet?: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
    basis?: string,
    className?: string,
    onClick?: () => void,
};

const boxClass = {
    base: `inline-flex items-center justify-center
        hover:ring-blue-500
        hover:ring-2`,
    colorSet: {
        primary: 'main-box-b1',
        secondary: 'main-box-b2',
        tertiary: 'main-box-b3',
        quaternary: 'main-box-b4',
    },
};

export function Box({ children, colorSet, basis, className, onClick }: BoxProps) {
    return (
        <div
            className={joinClassNames(
                boxClass.base,
                colorSet && `${boxClass.colorSet[colorSet]}`,
                basis && `${basis}`,
                className && `${className}`
            )}
        >
            {children}
        </div>
    );
}