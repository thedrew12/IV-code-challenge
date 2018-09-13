import * as React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Flex from './components/Flex';
import Button from './components/Button';
import Modal from './components/Modal';
import Demo from './components/Demo';
import './App.css';
import companyLogos from './icons/companylogos.svg';
import rolesIcon from './icons/rolesIcon.svg';
import playIcon from './icons/playIcon.svg';

type State = {
  isDemoModalOpen: boolean,
  isVideoModalOpen: boolean
}

class App extends React.Component<State> {
  state = {
    isDemoModalOpen: false,
    isVideoModalOpen: false
  };
  render() {
    const { isDemoModalOpen, isVideoModalOpen } = this.state;
    return (
      <React.Fragment>
        <Header
          handleRequestDemo={() => this.setState({ isDemoModalOpen: true })}
        />
        <Content>
          <Title>Design & collaborate at scale</Title>
          <Subtitle>
            The world&#39;s best companies use InVision Enterprise to make the
            products you love
          </Subtitle>
          <StyledFlex alignItems="center" shouldWrap>
            <Button.Primary
              onClick={() => this.setState({ isDemoModalOpen: true })}
            >
              Request a Demo
            </Button.Primary>
            <VideoButton
              onClick={() => this.setState({ isVideoModalOpen: true })}
            >
              <Flex alignItems="center">
                <PlayIcon src={playIcon} alt="" />
                Watch Video
              </Flex>
            </VideoButton>
          </StyledFlex>
          <Image src={companyLogos} alt="" />
          <Image src={rolesIcon} alt="" />
          <SubTextWrapper>
            <TransformText>
              Transform how design drives your business
            </TransformText>
            <StyledSubtitle>
              Create experiences customers love—and deliver your most
              competitive products. The most successful companies practice
              design principles across teams, transforming business outcomes.
              The InVision Enterprise platform powers this connected workflow,
              every step of the way.
            </StyledSubtitle>
          </SubTextWrapper>
        </Content>
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => this.setState({ isDemoModalOpen: false })}
        >
          <Demo />
        </Modal>
        <Modal
          isOpen={isVideoModalOpen}
          onClose={() => this.setState({ isVideoModalOpen: false })}
        >
          <iframe
            title="Bugaboo intro video"
            width={800}
            height={450}
            src="https://www.youtube.com/embed/_m3VSgYXjEg?autoplay=1&rel=0&controls=1&showinfo=0"
            frameBorder="0"
            allowFullScreen
          />
        </Modal>
      </React.Fragment>
    );
  }
}

const Content = styled.div`
  padding: 1rem;
  @media (min-width: 550px) {
    padding: 4rem 5rem;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-top: 0;
  @media (min-width: 550px) {
    text-align: center;
  }
`;

const StyledFlex = styled(Flex)`
  justify-content: start;
  @media (min-width: 550px) {
    justify-content: center;
  }
`;

const VideoButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  margin-top: 1rem;
  :hover {
    opacity: 0.8;
  }
  @media (min-width: 550px) {
    margin-top: 0;
    margin-left: 1.5rem;
    text-align: center;
  }
`;

const PlayIcon = styled.img`
  margin-right: 5px;
`;

const TransformText = styled.div`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 550px) {
    padding: 0 2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 3rem;
  line-height: 32px;
  @media (min-width: 550px) {
    text-align: center;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  margin: 3rem 0;
`;

const SubTextWrapper = styled.div`
  @media (min-width: 767px) {
    width: 700px;
    margin: 3rem auto;
  }
`;

export default App;
