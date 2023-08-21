import { Button, WrapperButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  options,
  goodeedback,
  neutraleedback,
  badeedback,
}) => {
  const [good, neutral, bad] = options;
  return (
    <>
      <WrapperButton>
        <Button onClick={() => goodeedback(good)}>Good</Button>
        <Button onClick={() => neutraleedback(neutral)}>Neutral</Button>
        <Button onClick={() => badeedback(bad)}>Bad</Button>
      </WrapperButton>
    </>
  );
};
