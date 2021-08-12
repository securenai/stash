// import React, { useEffect } from 'react';


// export interface IframeProps {
    
// }
 
// const Iframe: React.FC<IframeProps> = () => {

//     useEffect(() => {
//         window.iframely && iframely.load();
//     }, [])

//     const getIframelyHtml = () => {
//         // If you use embed code from API
//         return {__html: iframelyEmbedHtmlCode};
    
//         // Alternatively, if you use plain embed.js approach without API calls:
//         // return {__html: '<a href="' + this.url + '" data-iframely-url></a>'};
//         // no title inside <a> eliminates the flick
    
//         // but getting actual HTML from our APIs is still recommended 
//         // as it will have better sizing initially
//     },

//     return ( <div dangerouslySetInnerHTML={getIframelyHtml()} /> );
// }
 
// export default Iframe;