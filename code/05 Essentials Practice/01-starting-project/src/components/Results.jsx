import { calculateInvestmentResults } from "../../src/util/investment"
export default function Results({userInput}){
    const resultsData = calculateInvestmentResults(userInput);

    console.log(resultsData);
    return <p>Results...</p>
}