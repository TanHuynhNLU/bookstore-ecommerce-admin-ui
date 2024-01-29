import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    const [isCollapse, setIsCollapse] = useState(false);

    const handlePaddingContent = (isCollapse) => {
        setIsCollapse(isCollapse);
    };
    return (
        <div className="min-h-screen bg-[#f1f1f1] text-slate-800 dark:bg-slate-800">
            <Sidebar handlePaddingContent={handlePaddingContent} />
            <div className={isCollapse ? 'pl-[--sidebar-collapse-width]' : 'pl-[--sidebar-width]'}>
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
