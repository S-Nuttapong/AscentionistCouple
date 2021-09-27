import {React} from "react"
import { styled } from "@stitches/react"

export const Switcher = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',

    '> * ': {
        flexGrow: 1,
        flexBasis: 'calc((30rem - 100%) * 999)'
    },
    
    //targets any elements that are more than 4 from the end of the set
    '> :nth-last-child(n + 4)': {
        flexBasis: '100%'
    },

     //applies the same rule to anything below the 4th element
     //if 4th does not exists then this rule won't apply
     '> :nth-last-child(n + 4) ~ *': {
        flexBasis: '100%'
    }
})