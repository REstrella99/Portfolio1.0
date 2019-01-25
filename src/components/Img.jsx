import styled from 'styled-components';

const Img = styled.img`
	width: ${(props) => props.sizeX};
	height: ${(props) => props.sizeY};
	max-width: ${(props) => props.max};
`;



export default Img;
