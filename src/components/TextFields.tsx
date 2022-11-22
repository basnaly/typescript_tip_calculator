import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

type BillFieldProps = {
	label: string;
	value: number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextFields = (props: BillFieldProps) => {
	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				variant="outlined"
				type="number"
				label={props.label}
				value={props.value}
				onChange={props.onChange}
			/>
		</Box>
	);
};
