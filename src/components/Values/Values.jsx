import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: 157px;
`;

const Description = styled.p`
  max-width: 560px;
  text-align: center;
`;

const Values = () => (
  <Section>
    <h3>Wyróżniki, wartości, X-factory organizacji</h3>
    <Description>
      Nie koniecznie musimy tu dawać tekst, ale jak jest potrzeba i przestrzeń można rozwinąć
      nagłówek.
    </Description>
  </Section>
);

export default Values;
