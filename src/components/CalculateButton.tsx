import Button from "@mui/material/Button";
import { useState } from "react";
import { SERVICE_DATA } from "../constants";

type ButtonProps = {
	bill: number;
	people: number;
	service: string;
};

export const CalculateButton = (props: ButtonProps) => {
    
	const [displayTip, setDisplayTip] = useState(0);
	const [displayBillPlusTip, setDisplayBillPlusTip] = useState(0);
	const [displayBillPerPerson, setDisplayBillPerPerson] = useState(0);

	const calculateBill = () => {

		let tip = 0;
		let billPlusTip = 0;
		let billPerPerson = 0;

		if (props.service === "Excellent") {
			tip = +(props.bill * SERVICE_DATA[0].percent).toFixed(2);
			billPlusTip = props.bill + tip;
			billPerPerson = +(billPlusTip / props.people).toFixed(2);
		} else if (props.service === "Good") {
			tip = +(props.bill * SERVICE_DATA[1].percent).toFixed(2);
			billPlusTip = props.bill + tip;
			billPerPerson = +(billPlusTip / props.people).toFixed(2);
		} else if (props.service === "Middling") {
			tip = +(props.bill * SERVICE_DATA[2].percent).toFixed(2);
			billPlusTip = props.bill + tip;
			billPerPerson = +(billPlusTip / props.people).toFixed(2);
		} else if (props.service === "Bad") {
			tip = +(props.bill * SERVICE_DATA[3].percent).toFixed(2);
			billPlusTip = props.bill + tip;
			billPerPerson = +(billPlusTip / props.people).toFixed(2);
		}

		setDisplayTip(tip);
		setDisplayBillPlusTip(billPlusTip);
		setDisplayBillPerPerson(billPerPerson);
	};

	return (
		<div className="button-padding">
			<Button variant="outlined" onClick={calculateBill}>
				Calculate
			</Button>
			{displayBillPlusTip > 0 ? (
				<div className="d-flex flex-column">
					<h3>The tip is: 
                        <span>{displayTip}</span>
                    </h3>
					<h3>The bill with the tip is: 
                        <span>{displayBillPlusTip}</span>
                    </h3>
					<h3>The bill with the tip per person: 
                        <span>{displayBillPerPerson}</span>
                    </h3>
				</div>
			) : (
				""
			)}
		</div>
	);
};
