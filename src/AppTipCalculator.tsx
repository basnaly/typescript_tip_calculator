import { useState } from "react";
import "./App.css";
import { CalculateButton } from "./components/CalculateButton";
import SelectTextFields from "./components/SelectTextFields";
import { TextFields } from "./components/TextFields";
import { SERVICE_DATA } from "./constants";

function AppTipCalculator() {

    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(1)
    const [service, setService] = useState(SERVICE_DATA[0].mark);

	return (

    <div className="App">
        <h2>Tip Calculator</h2>

        <TextFields 
            label='How much was your bill?'
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
        />

        <TextFields 
            label='How many people sharing the bill?'
            value={people}
            onChange={(e) => setPeople(+e.target.value)}
        />

        <h3>How was the service?</h3>

        <SelectTextFields 
            service={service}
            onChange={(e) => setService(e.target.value)}
        />

        <CalculateButton 
            bill={bill} people={people} service={service}
        />
    </div>
    )
}

export default AppTipCalculator;
