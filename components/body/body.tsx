import {ReactNode} from 'react';

interface BodyType {
    children?: ReactNode;
}

export function Body({children}:BodyType) {
    return (
        <main>
            {children ? children : ' '}
        </main>
    )
}