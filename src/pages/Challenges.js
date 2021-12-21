import Challenge from "../components/Challenge";

function Challenges()
{
    return (
        <div>
          <h1>
            Challenges
          </h1>
          <Challenge name="Challenge 1"/>
          <Challenge name="XSS"/>
          <Challenge name="SQLi"/>
        </div>
    );
}

export default Challenges;