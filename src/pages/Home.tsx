import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 10vw;
`;

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <StyledButton variant="contained" onClick={() => history.push('Login')}>
        Login
      </StyledButton>
      Home
    </div>
  );
};

export default Home;
