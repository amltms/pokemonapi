import styled from 'styled-components';

const Container = styled.div`
	animation: spin 3s linear infinite;
	opacity: 0.05;
	height: 80vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Loading = () => {
	return (
		<Container>
			<p>Loading...</p>
		</Container>
	);
};

export default Loading;
