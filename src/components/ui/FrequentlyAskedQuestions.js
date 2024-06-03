import styled from "styled-components";

const questionData = [
  {
    id: 1,
    questions: ["General", "FrequentlyAskedQuestions"],
  },
  {
    id: 2,
    questions: ["How long are the average projects?"],
  },
  {
    id: 3,
    questions: ["How does the payment works?"],
  },
  {
    id: 4,
    questions: ["How much can I earn?"],
  },
  {
    id: 5,
    questions: [
      "Genral",
      "Joining Process",
      "I want to work part-time, is that possible",
    ],
  },
  {
    id: 6,
    questions: ["How long are the average projects?"],
  },
  {
    id: 7,
    questions: ["How long are the average projects?"],
  },
  {
    id: 8,
    questions: ["How much can I earn?"],
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <Main>
      <h1>Freqently asked questions</h1>
      <Container>
        {/* <ul className="quest_ech">
          <li>General</li>
          <li>I want to work part time, is that possible</li>
        </ul>
        <ul className="quest_ech">
          <li>I want to work part time, is that possible</li>
        </ul>
        <ul className="quest_ech">
          <li>General</li>
          <li>Joining Process</li>
          <li>I want to work part time, is that possible</li>
        </ul> */}
        <Table>
          <tbody>
            {questionData.map(({ id, questions }) => (
              <tr key={id}>
                {questions.map((question, index) => (
                  <td key={index}>
                    {question}
                    {index === questions.length - 1 && (
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 25 15"
                        fill="#ffbe2e"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
                          fill="#ffbe2e"
                        />
                        <path
                          d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
                          fill="#ffbe2e"
                        />
                      </svg>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  & h1 {
    font-family: switzerBold;
    font-size: 40px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

const Container = styled.section`
  width: 100%;
  margin-top: 50px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    padding: 20px;
    border: 1px solid #e0e0e0;
    font-size: 15px;
    cursor: pointer;
    font-family: switzerMedium;
    position: relative;

    & svg {
      position: absolute;
      top: 40%;
      right: 15px;
      display: none;
    }

    &:hover svg {
      display: block;

      @media (max-width: 480px) {
        display: none;
      }
    }
  }

  td:hover {
    background-color: #e9e9ef;
  }

  tbody tr {
    display: flex;
  }

  tbody tr td {
    flex: 0 0 auto;
    text-align: center;
    width: 200px;

    @media (max-width: 480px) {
      width: 150px;
      font-size: 13px;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  tbody tr td:last-child {
    flex: 2;
    font-family: switzer;
    text-align-last: end;
    padding-right: 600px;
    color: #666;

    @media (max-width: 1440px) {
      padding-right: 400px;
    }
    @media (max-width: 980px) {
      padding-right: 40px;
    }
  }

  tbody tr td:only-child {
    flex: 1;
    text-align: center;
  }
`;

export default FrequentlyAskedQuestions;
