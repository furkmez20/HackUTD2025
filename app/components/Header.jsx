import React from 'react';

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-cb-border-light dark:border-cb-border-dark px-8 py-4 bg-cb-card-light dark:bg-cb-card-dark sticky top-0 z-10">
            {/* Search Bar */}
            <div className="flex items-center gap-8 w-full max-w-xl">
                <label className="flex flex-col w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                        <div className="text-cb-text-secondary-light dark:text-cb-text-secondary-dark flex bg-cb-light-gray dark:bg-background-dark items-center justify-center pl-3 rounded-l-lg">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                        </div>
                        <input
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-cb-text-primary-light dark:text-cb-text-primary-dark focus:outline-0 focus:ring-0 border-none bg-cb-light-gray dark:bg-background-dark h-full placeholder:text-cb-text-secondary-light dark:placeholder:text-cb-text-secondary-dark px-2 text-sm font-normal leading-normal"
                            placeholder="Search properties, tenants, documents..."
                            defaultValue=""
                        />
                    </div>
                </label>
            </div>
            
            {/* Action Buttons and User Profile */}
            <div className="flex items-center justify-end gap-4">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-cb-green text-white text-sm font-bold leading-normal tracking-[-0.01em] hover:bg-opacity-90">
                    <span className="truncate">Add Property</span>
                </button>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-cb-neutral dark:bg-cb-card-dark border border-cb-border-light dark:border-cb-border-dark text-cb-text-primary-light dark:text-cb-text-primary-dark text-sm font-bold leading-normal tracking-[-0.01em] hover:bg-opacity-80">
                    <span className="truncate">Generate Report</span>
                </button>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-cb-text-secondary-light dark:text-cb-text-secondary-dark gap-2 text-sm font-bold leading-normal min-w-0 px-2.5 hover:bg-cb-neutral dark:hover:bg-cb-card-dark">
                    <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>notifications</span>
                </button>
                
                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
                        data-alt="User avatar of Alex Grim" 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwe23Xd8CGbRj1v9J2hPOJrGt3W3ipcbTC-C-bfkjx3iGM3YwHCgC8t7_4co57zyfHBFBZ2QQYZNKiWCNHujf-2BHvTudWpJuPxT9r130GpbBRRfia7K_2hw4a5nuG3p8w4aeXNZ_VgdmU1isMmfVVb57gkp42FjrJfSVPUxXhe61XagaxHd5oK_QiGWKd-bv-VX8MGrrKP_7ApgZeLl7owDnufJpzCrbbje4s5W2O_uwQ9RdBlE4JyndMKeLoRj35B-IJuuV2Yo4")' }}
                    />
                    <div className="flex flex-col text-right">
                        <p className="text-cb-text-primary-light dark:text-cb-text-primary-dark text-sm font-medium">Alex Grim</p>
                        <p className="text-cb-text-secondary-light dark:text-cb-text-secondary-dark text-xs">Portfolio Manager</p>
                    </div>
                </div>
            </div>
        </header>
    );
}