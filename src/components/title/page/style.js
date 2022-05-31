
import { styled } from "@mui/styles";
import { theme } from "../../../assets/style/customTheme";
const Wrap = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	paddingBottom: '16px',
}))
const Item = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
	'& button': {
		border: 'none',
		width: '20px',
		height: '20px',
		padding: 1,
		backgroundColor: 'transparent',
		cursor: 'pointer',
	},
}))
const Button = styled('button')<{ active: boolean }>(({ theme, active }) =>
	active
		? {
				'& svg': {
					'& path': {
						fill: `${theme.palette.primary.main}`,
					},
				},
		  }
		: ``,
)
export { Wrap, Item, Button }
