import React from 'react';

interface Props {
    id: string;
}

export const MaserCard = ({id}: Props) => {
    switch (id){
        case 'svg':
            return (
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="47"
                        height="36"
                        fill="none"
                        viewBox="0 0 47 36"
                    >
                        <path
                            fill="#231F20"
                            d="M8.773 35.801v-2.383c.04-.795-.508-1.47-1.29-1.51H7.29c-.508-.04-1.016.238-1.329.675-.274-.437-.742-.715-1.25-.675-.43-.04-.86.198-1.095.556v-.477h-.781v3.814h.82v-2.105c-.078-.477.274-.954.743-.993h.156c.547 0 .82.357.82.993V35.8h.821v-2.105c-.078-.477.274-.954.743-.993h.156c.547 0 .82.357.82.993V35.8h.86zm12.153-3.774h-1.329v-1.152h-.82v1.152h-.743v.755h.742v1.748c0 .874.352 1.39 1.29 1.39.352 0 .703-.119 1.016-.278l-.235-.715c-.234.12-.468.199-.703.199-.39 0-.547-.238-.547-.636v-1.748h1.329v-.715zm6.916-.12c-.39 0-.782.2-.977.557v-.477h-.82v3.814h.82v-2.145c0-.636.274-.993.782-.993.156 0 .351.04.507.08l.235-.795c-.156 0-.352-.04-.547-.04zm-10.472.398a2.916 2.916 0 00-1.524-.397c-.938 0-1.563.477-1.563 1.231 0 .636.469.994 1.29 1.113l.39.04c.43.08.664.198.664.397 0 .278-.312.477-.86.477-.43 0-.898-.12-1.25-.397l-.39.635c.468.318 1.055.517 1.602.477 1.094 0 1.719-.517 1.719-1.232s-.508-1.033-1.29-1.152l-.39-.04c-.352-.04-.626-.119-.626-.357 0-.239.274-.437.704-.437.43 0 .82.119 1.172.318l.352-.676zm21.765-.397c-.391 0-.782.198-.977.556v-.477h-.821v3.814h.82v-2.145c0-.636.274-.993.782-.993.156 0 .352.04.508.08l.234-.795c-.156 0-.351-.04-.546-.04zm-10.473 1.986c-.039 1.073.782 1.947 1.798 1.987h.195c.47.04.977-.12 1.329-.437l-.391-.675a2.081 2.081 0 01-.977.357c-.664-.04-1.133-.636-1.094-1.311a1.186 1.186 0 011.094-1.112c.352 0 .704.119.977.357l.39-.675c-.39-.318-.859-.477-1.328-.437-1.055-.08-1.914.755-1.993 1.788v.158zm7.62 0v-1.907h-.82v.477a1.455 1.455 0 00-1.173-.556c-1.094 0-1.953.874-1.953 1.986 0 1.113.86 1.987 1.953 1.987.47 0 .899-.199 1.172-.556v.476h.821v-1.907zm-3.048 0a1.143 1.143 0 011.212-1.072c.625.04 1.094.596 1.055 1.231a1.128 1.128 0 01-1.134 1.073c-.625 0-1.133-.477-1.133-1.112v-.12zm-9.808-1.986c-1.094 0-1.953.914-1.914 2.026.039 1.113.898 1.987 1.992 1.947a2.259 2.259 0 001.563-.517l-.39-.595c-.313.238-.704.397-1.094.397a1.074 1.074 0 01-1.133-.914h2.774v-.318c0-1.231-.743-2.026-1.798-2.026zm0 .755c.508 0 .938.397.938.914H22.41c.04-.517.508-.954 1.016-.914zm20.358 1.231v-3.416h-.781v1.986a1.456 1.456 0 00-1.172-.556c-1.095 0-1.954.874-1.954 1.986 0 1.113.86 1.987 1.954 1.987.468 0 .898-.199 1.172-.556v.476h.781v-1.907zm1.368 1.351c.04 0 .117 0 .156.04.04 0 .078.04.117.08.04.04.079.079.079.119a.345.345 0 010 .278c-.04.04-.04.08-.078.119-.04.04-.079.08-.118.08-.039.04-.078.04-.156.04-.156 0-.273-.08-.352-.24a.344.344 0 010-.277c.04-.04.04-.08.079-.12.038-.04.078-.079.117-.079.078-.04.117-.04.156-.04zm0 .676c.04 0 .078 0 .117-.04.04 0 .078-.04.078-.08a.268.268 0 000-.397l-.078-.08c-.039 0-.078-.039-.117-.039-.04 0-.078 0-.117.04-.04 0-.078.04-.078.08a.268.268 0 000 .396c.039.04.078.04.078.08.039.04.078.04.117.04zm.04-.477c.038 0 .077 0 .116.04.04.04.04.04.04.08 0 .039 0 .039-.04.078-.039.04-.039.04-.078.04l.117.12h-.078l-.117-.12h-.04v.12h-.077v-.358h.156zm-.08.08v.079h.118v-.08H45.113zm-4.297-1.63a1.143 1.143 0 011.211-1.072c.625.04 1.094.596 1.055 1.231a1.128 1.128 0 01-1.133 1.073c-.625 0-1.133-.477-1.133-1.112-.04-.04 0-.08 0-.12zm-27.47 0v-1.907h-.82v.477a1.455 1.455 0 00-1.173-.556c-1.094 0-1.953.874-1.953 1.986 0 1.113.86 1.987 1.953 1.987.47 0 .899-.199 1.172-.556v.476h.821v-1.907zm-3.009 0a1.144 1.144 0 011.212-1.072c.625.04 1.094.596 1.055 1.231a1.128 1.128 0 01-1.133 1.073c-.626 0-1.134-.477-1.134-1.112v-.12z"
                        />
                        <path fill="#FF5F00" d="M29.405 3.063H17.097V25.55h12.308V3.062z" />
                        <path
                            fill="#EB001B"
                            d="M17.878 14.306c0-4.37 1.993-8.542 5.392-11.243C17.135-1.824 8.305-.752 3.498 5.486c-4.806 6.238-3.75 15.177 2.384 20.064 5.119 4.092 12.27 4.092 17.388 0-3.4-2.701-5.392-6.834-5.392-11.244z"
                        />
                        <path
                            fill="#F79E1B"
                            d="M46.012 14.306c0 7.907-6.291 14.304-14.067 14.304a13.778 13.778 0 01-8.675-3.06c6.096-4.887 7.151-13.866 2.345-20.064a13.873 13.873 0 00-2.384-2.423c6.096-4.887 14.966-3.815 19.772 2.423 1.954 2.503 3.01 5.602 3.01 8.82zM44.684 23.168v-.477h.195v-.08h-.469v.08h.196v.477h.078zm.898 0v-.557h-.156l-.156.398-.157-.398h-.117v.557h.117v-.398l.157.358h.117l.156-.358v.437l.04-.04z"
                        />
                    </svg>
                </div>
            );
        default:
            return <svg></svg>
            break;
    }
}


export default MaserCard;