import { joinClassNames } from '@/utils/String';

type ButtonProps = {
    children: string | JSX.Element | JSX.Element[],
    color?: string,
    active?: boolean,
    disabled?: boolean,
    hoverScale?: string,
    hoverGrow?: string,
    hoverColor?: string,
    onClick?: () => void,
};

const buttonClass = {
    base: 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2',
};

export function Button({ 
    children, color, active, 
    disabled, hoverScale, hoverGrow, 
    hoverColor, onClick }: ButtonProps ) 
{

    return(
        <button
            className={joinClassNames(
                buttonClass.base
            )}
        >
            {children}
        </button>
    );
}