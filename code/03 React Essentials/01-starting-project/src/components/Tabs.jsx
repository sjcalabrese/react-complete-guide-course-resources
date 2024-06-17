export default function Tabs({ children, buttons, ButtonsContainer }) {
  // Using a capitalized prop - you don't need to set a variable with a capital letter
  //Also make sure when you're setting the prop (example.jxs) you use a capital B there as well
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
