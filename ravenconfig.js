import Raven from 'raven-js'

export const sentry_url =
`https://${process.env.REACT_APP_SENTRY_KEY}@sentry.io/${process.env.REACT_APP_SENTRY_APP}`;

export function logException(ex, context) {
	Raven.captureException(ex, { extra: context });
	console.error && console.error(ex);
}

export const debug2 = (msg) => {
	Raven.captureMessage(msg);
}


/*
the last line is to check if the console is supported or not in browser
can pass the error object from catch or include some other data as used above
 Raven.captureException(e)

To log additional informtion
logException(new Error('text'),{
	//attach anything like
	email:user.email}
);

//won't display as error but to check if it went in your undesired block
Raven.captureMessage('Write your message');

//for feedback from user or like that
Raven.showReportDialog();

*/
