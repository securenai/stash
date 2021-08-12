import React from 'react';
// import { selectUser } from '../../slices/userSlice';
import { useSelector } from 'react-redux';
import { selectCurrentStash } from '../../slices/appSlice';
import DashMainHeader from '../../components/DashBoard/DashMain/DashMainHeader/DashMainHeader';
import TextStash from '../../components/DashBoard/DashMain/TextCategory/TextStash/TextStash';
import { fetchApi } from '../../api/fetchApi/fetchApi';

export interface TextStashHeaderProps {
    
}
 
const TextStashHeader: React.FC<TextStashHeaderProps> = () => {

    const handleFetchIframe = (url: string): Promise<any> => {
        return new Promise(function (resolve, reject) {
            const keyHashed = '738465f425d6ce9747860070d16a37a7'
            const iframelyUrl = `https://iframe.ly/api/iframely?url=${url}&key=${keyHashed}`
            // const result = await fetch(iframelyUrl)
            fetch(iframelyUrl)
                .then(checkStatus)
                .then((res) => {
                    return res.json();
                })
                .then((result) => {
                    console.log(result);
                    resolve(result);
                });
        });
    };

    const checkStatus = (response) => {
        if (response.ok) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    };
    // const handleFetchIframe = async (url: string) => {
    //     console.log('sss')
    //     // let iFrame = null
    //     const keyHashed = '738465f425d6ce9747860070d16a37a7'
    //     const iframelyUrl = `https://iframe.ly/api/iframely?url=${url}&key=${keyHashed}&iframe=1`
    //     const result = await fetch(iframelyUrl)
    //     .then(response => {
    //         console.log(response)
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         if(data){
    //             // iFrame = data.html
    //             // console.log(iFrame)
    //             return data.html
    //         }
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //     console.log(result)
    //     return result
    // }

    const currStash = useSelector(selectCurrentStash);
    return ( 
        <>
            <DashMainHeader
                stashType={currStash.type}
                stashName={currStash.name}
            />
            {/* {updateComplete === false && startUpdate === true ? <Processing /> : null} */}
            <TextStash fetchIframe={handleFetchIframe}/>
        </>
    );
}
 
export default TextStashHeader;