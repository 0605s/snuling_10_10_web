import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
	width: 100vw;
	height: 100px;
	margin: 0px;
	box-sizing: border-box;
	padding: 0px 10vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const SnulingLogo = styled.img`
	width: 200px;
	height: auto;
	opacity: 1;
`;

const LoginButton = styled(Button)`
	width: 50px;
`;

const Header = () => {
	const history = useHistory();
	return (
		<HeaderContainer>
			<SnulingLogo
				src={`${process.env.PUBLIC_URL}/img/snuling_logo.png`}
				alt=""
				onClick={() => history.push('/')}
			/>
			<LoginButton variant="text" onClick={() => history.push('/login')}>
				Login
			</LoginButton>
		</HeaderContainer>
	);
};

export default Header;
