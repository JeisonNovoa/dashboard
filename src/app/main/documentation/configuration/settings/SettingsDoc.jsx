import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import settingsConfigRaw from 'app/configs/settingsConfig.js?raw';

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
/**
 * Theme Layouts Doc
 * This document provides information on how to use theme layouts.
 */
function SettingsDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Default Settings
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To set the default layout and theme settings for your app, navigate to the file:
				<code>app/configs/settingsConfig.ts</code>
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{settingsConfigRaw}
			</FuseHighlight>
		</>
	);
}

export default SettingsDoc;
