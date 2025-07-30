import { Link } from "lucide-react";
import styled from "styled-components";

export const COntainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:24px 80px;
    background-color: #FFEBD9;

    
`
export const Logo = styled.img`
    padding-left: 30px;
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