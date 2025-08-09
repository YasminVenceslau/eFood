import { Link } from "lucide-react";
import styled from "styled-components";

export const COntainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:32px 132px;
    
    

`

export const Logo = styled.img`
    padding-left: 50px;
     
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: #e66767;
    text-decoration: none;
    font-weight: bold;
    
    svg {
        height: 20px;
        width: 20px;
    }

    &:hover {
        text-decoration: underline;
    }
`