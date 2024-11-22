import LandingPageNavbar from '@/src/app/(website)/components/navbar';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col py-10 px-10 xl:px-0 container'>
            <LandingPageNavbar />
            {children}
        </div>
    );
};

export default Layout;
