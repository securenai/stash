import React, {useState} from 'react';
import Input from '../../../../../Widgets/Input/Input';
import InputTitleChanger from '../../../../../Widgets/Input/InputTitleChanger';
import styled from 'styled-components';
import Iframe from 'react-iframe'

const TextItemContainer = styled.div`
    width: 400px;
    border: 1px solid white;
`;

export interface TextItemProps {
    fetchIframe: (url: string) => any;
}
 
const TextItem: React.FC<TextItemProps> = ({fetchIframe}) => {

    // const [inputValue, setInputValue] = useState('')
    const [title, setTitle] = React.useState('Title');
	const [enableTitleEdit, setEnableTitleEdit] = React.useState(false);
    const [embeded, setEmbeded] = useState('')
    const [iframe, setIframe] = useState(<div>hello</div>)

    // const processUrl = () => {
    //     let str = '';
    //     str = 'https://www.youtube.com/embed/xDMP3i36naA'
    //     setEmbeded(str);
    //     return embeded
    // }

    const renderIframe = async (embeded: string) => {

        const result = await fetchIframe(embeded)
        // console.log(result.html)
        if(result) {
            console.log(result.html)
            // setIframe(<div>{result.html}</div>)
            setIframe(<div dangerouslySetInnerHTML={{ __html: result.html}} />)
        }
        // const result = fetchIframe(embeded).then((data)=>{
        //     console.log(data)
        //     return <div><div>kkk</div>{data}</div>
        // })
        
        // setTimeout(() => {
        //     console.log(aaa)
        // }, 5000);
        // console.log(result)
        // return <div>{result.html}</div>
    }

    return ( 
        <TextItemContainer>
            <InputTitleChanger
                enableTitleEdit={enableTitleEdit}
                title={title}
                onChangeValue={(e) => {setTitle(e.target.value)}}
                onClickEdit={() => setEnableTitleEdit(!enableTitleEdit)}
            />
            <InputTitleChanger
                enableTitleEdit={enableTitleEdit}
                title={embeded}
                onChangeValue={(e) => {
                    setEmbeded(e.target.value)
                    if(e.target.value.length > 10 && /^https?:\/\//i.test(e.target.value)) {
                        renderIframe(e.target.value)
                    }
                }}
                onClickEdit={() => setEnableTitleEdit(!enableTitleEdit)}
            />
            {iframe}
            {/* {embeded && renderIframe(embeded)} */}
            {/* {embeded.length > 10 && renderIframe(embeded)} */}
        </TextItemContainer>
    );
}
 
export default TextItem;