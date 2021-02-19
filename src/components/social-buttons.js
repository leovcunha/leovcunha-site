import React from 'react'
import styled from "@emotion/styled"
import { Twitter , LinkedIn, GitHub} from "@material-ui/icons"

const PositionedBar = styled.div`
    position: absolute;
    top: 10px;
    right: 50px;
    ${'a'} { 
        box-shadow: none;
        padding-right: 10px;
    }
`
const SocialButtons = (props) => {
    return (
        <PositionedBar>
            <a href={props.twitter}><Twitter/></a>
            <a href={props.linkedin}><LinkedIn/></a>
            <a href={props.github}><GitHub/></a>

        </PositionedBar>
    )
}

export default SocialButtons
