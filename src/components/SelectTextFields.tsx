import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { SERVICE_DATA } from '../constants'

type SelectFieldProps = {
    service: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SelectTextFields(props: SelectFieldProps) {

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					id="outlined-select-currency"
					select
					label="Select"
					value={props.service}
					onChange={props.onChange}
				>
					{SERVICE_DATA.map((el) => (
						<MenuItem key={el.mark} value={el.mark}>
							{el.mark}
						</MenuItem>
					))}
				</TextField>
			</div>
		</Box>
	);
}
