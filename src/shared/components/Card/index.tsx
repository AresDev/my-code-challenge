import React, { ReactNode } from "react";

import {css} from "@emotion/css";

import styled from '@emotion/styled'
import { Card, CardContent, CardHeader } from "@mui/material";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const PostDate = styled.div`
    border: 1px solid red;
    margin:100px;
    color:red;
    font-size: 1rem;
`;

const StyledCard = styled(Card)`
    border: 1px solid red;
    margin:100px;
`;



const PostCard = ({title, content, date}:any)=>{
    return (
    <StyledCard>
      <label>{title}</label>
      <CardContent>
                {content}
      </CardContent>
      <PostDate>{date}</PostDate>
    </StyledCard>
    )
}

export default PostCard;