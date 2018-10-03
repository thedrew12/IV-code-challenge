import * as React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import enterpriseIcon from '../icons/enterprise.svg';

type Props = {
  handleSubmit: () => void
}

type State = {
  firstName: string,
  lastName: string,
  jobTitle: string,
  companyName: string,
  workEmail: string,
  phoneNumber: string
}

class Demo extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    workEmail: '',
    phoneNumber: ''
  };
  onChange = (key: string, value: string): void =>
    this.setState({ [key]: value });
  onSubmit = async (e: Object) => {
    e.preventDefault();
    // post values in state to API
    await fetch('http://localhost:8080', {
      method: 'POST',
      body: this.state
    }).then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
  };
  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      companyName,
      workEmail,
      phoneNumber
    } = this.state;
    return (
      <StyledCard>
        <img src={enterpriseIcon} alt="" />
        <Title>Get a demo of InVision Enterprise</Title>
        <Content>
          <Subtitle>
            The world’s best companies use InVision Enterprise to build better
            products, faster.
          </Subtitle>
          <form onSubmit={this.onSubmit}>
            <Grid>
              <Input
                id="firstName"
                label="First Name"
                placeholder="John"
                type="text"
                onChange={e => this.onChange('firstName', e.target.value)}
                value={firstName}
              />
              <Input
                placeholder="Smith"
                label="Last Name"
                type="text"
                onChange={e => this.onChange('lastName', e.target.value)}
                value={lastName}
              />
              <Input
                placeholder="Designer"
                label="Job Title"
                type="text"
                onChange={e => this.onChange('jobTitle', e.target.value)}
                value={jobTitle}
              />
              <Input
                placeholder="Apple"
                label="Company Name"
                type="text"
                onChange={e => this.onChange('companyName', e.target.value)}
                value={companyName}
              />
              <Input
                placeholder="name@email.com"
                label="Work Email"
                type="email"
                onChange={e => this.onChange('workEmail', e.target.value)}
                value={workEmail}
              />
              <Input
                placeholder="555-123-4567"
                label="Phone Number"
                type="text"
                onChange={e => this.onChange('phoneNumber', e.target.value)}
                value={phoneNumber}
              />
            </Grid>
            <Margin>
              <Button.Primary onClick={this.onSubmit} type="submit">
                Request a demo
              </Button.Primary>
            </Margin>
          </form>
        </Content>
      </StyledCard>
    );
  }
}

const StyledCard = styled(Card)`
  @media (min-width: 768px) {
    width: 1000px;
  }
`;

const Content = styled.div`
  @media (min-width: 768px) {
    width: 600px;
    margin: 1rem auto;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 3rem;
  @media (min-width: 550px) {
    text-align: center;
  }
`;

const Subtitle = styled.p`
  margin: 2rem auto;
  line-height: 32px;
  @media (min-width: 550px) {
    max-width: 23rem;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  label {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    label {
      margin: 0;
    }
  }
`;

const Margin = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export default Demo;
