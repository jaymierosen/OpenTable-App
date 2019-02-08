import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3em;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const SubTitle = styled.h2`
  font-size: 1.2em;
  color: palevioletred;
  font-weight: 600;
    @media (max-width: 420px) {
      margin: 2em 0;
      display: block;
    }
`;

export const Paragraph = styled.p`
  font-size: 1em;
  color: dimgray;
`;

export const Link = styled.a`
  font-size: 1em;
  color: white;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  font-size: 1em;
  color: dimgray;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  font-size: 16px;
  border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
    @media (max-width: 420px) {
      margin: 1em 0;
      display: block;
    }
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  size: props => (props.small ? 5 : undefined),
})`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

export const Label = styled.label`
  font-size: 1em;
  color: palevioletred;
  font-weight: 600;
`;

export const MainFooter = styled.footer`
  position: fixed;
  width: 100%;
  background: palevioletred;
  bottom: 0;
  left: 0;
    p {
      color: white;
      margin: 0.5em;
    }
`;