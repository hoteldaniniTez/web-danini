'use client';
import Script from 'next/script';

export const Widget = () => {
    return (
        <div className="w-full flex justify-center">
            <div id="widget-395614" style={{ width: '100%', color: 'black' }}></div>
            <Script
                src="https://reservations.easy-rez.com/v2/hotel-danini/es/widgets/flat-horizontal/boot.js?id=widget-395614"
                strategy="afterInteractive"
            />
        </div>
    )
}
