import styled from 'styled-components';

export const RowContainer = styled.div<{ backgroundImg?: string }>`
	width: 100vw;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px max(calc((100vw - 1100px) / 2), 5vw);
	background-image: url(${(props) => props.backgroundImg});
`;

export const Title = styled.div`
	font-family: 'YoonGothic';
	font-weight: 500;
	font-size: 3rem;
	padding: 2rem 0px;
	@media screen and (max-width: 800px) {
		font-size: 26px;
	}
`;

export const SubTitle = styled.div`
	font-family: 'YoonGothic';
	font-weight: 400;
	font-size: 2rem;
	@media screen and (max-width: 800px) {
		font-size: 26px;
	}
`;

export const Content = styled.div`
	font-family: 'YoonGothic';
	font-weight: 400;
	font-size: 1.5rem;
`;

export const SubContent = styled.div`
	font-family: 'YoonGothic';
	font-weight: 300;
	font-size: 1rem;
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}
`;
