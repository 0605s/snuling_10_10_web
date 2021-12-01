import { RowContainer } from 'lib/constant/Components';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled(RowContainer)`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 70vh;
	/* background-image: url('${process.env.PUBLIC_URL}/img/snu_image_1.jpeg'); */
`;

const LeftContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SnulingLogo = styled.img`
	width: 300px;
	height: auto;
`;

const RightContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 40px;
`;
/* border: 1px solid ${SNUBLUE}; */

interface Props {
	children: ReactNode;
}

const LoginTemplate = ({ children }: Props) => {
	return (
		<Container>
			<LeftContainer>
				<SnulingLogo
					src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
					alt="snuling_logo"
				/>
			</LeftContainer>
			<RightContainer>{children}</RightContainer>
		</Container>
	);
};

export default LoginTemplate;
