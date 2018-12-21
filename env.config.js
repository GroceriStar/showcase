// Yeah, Yeah, it's a bad name and bad approach.
// it'll crash any default scripts on heroku, travis, netlify, etc.
// BUT! it give us more flexibility.
// some of key later will be easily moved into .env file
// please propose a better way in github repo issues.

//raven( Sentry keys )
const REACT_APP_SENTRY_KEY='77aa2ee9a7ce484497f56278982a0809';
const REACT_APP_SENTRY_APP='305339';
const REACT_APP_SENTRY_URL='https://${REACT_APP_SENTRY_KEY}@sentry.io/${REACT_APP_SENTRY_APP}';
//# not working right now.
//#REACT_APP_SENTRY_URL=https://$REACT_APP_SENTRY_KEY@sentry.io/$REACT_APP_SENTRY_APP


// server
//REACT_APP_BACKEND_HOST - maybe it's a better name, because if we'll add version later, this wouldn't be a real api url
const REACT_APP_SERVER_API_URL='https://xxx.herokuapp.com';

// frontend
const REACT_APP_FRONTEND_URL='https://xxx.netlify.com/';
const REACT_APP_FRONTEND_LOCAL_URL='http://localhost:3000';


// ------- this part can be moved into a separated file.
// i just keep it here because it's easy to manage


let backendHost;


const hostname = window && window.location && window.location.hostname;

if( hostname === REACT_APP_FRONTEND_URL ) {
  backendHost = REACT_APP_SERVER_API_URL;
}

if( hostname === REACT_APP_FRONTEND_LOCAL_URL ) {
  backendHost = 'http://localhost:3000';
}
// else if( hostname === 'staging.realsite.com' ) {
//   backendHost = 'https://staging.api.realsite.com';
//
// }
// else if(/^qa/.test(hostname)) {
//   backendHost = `https://api.${hostname}`;
//
// }
//  else {
//   backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
//
// }

const API_ROOT = `${backendHost}`;


export {
  REACT_APP_SENTRY_URL,
  REACT_APP_SERVER_API_URL,
  REACT_APP_FRONTEND_URL,
  REACT_APP_FRONTEND_LOCAL_URL,

  API_ROOT
}
