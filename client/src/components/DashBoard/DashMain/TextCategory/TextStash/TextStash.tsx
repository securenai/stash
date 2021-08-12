import React from 'react';
import styled from 'styled-components';
import TextItem from './TextItem/TextItem';

const TextStashContainer = styled.div`
    padding: 20px;
`;

export interface TextStashProps {
    fetchIframe: (url: string) => any;
}
 
const TextStash: React.FC<TextStashProps> = ({fetchIframe}) => {
    return ( 
        <TextStashContainer>
            <TextItem fetchIframe={fetchIframe}/>
        </TextStashContainer>
    );
}
 
export default TextStash;