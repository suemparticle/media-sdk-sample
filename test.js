import MediaSession from '@mparticle/web-media-sdk'
import mParticle from '@mparticle/web-sdk'
import GoogleAnalytics from '@mparticle/web-google-analytics-kit';
import appboy from '@mparticle/web-appboy-kit';

console.log("success");

function myIdentityCallback(result) {
   console.log(result)
}
var mParticleConfig = {
   isDevelopmentMode: true,
   logLevel: "verbose",
   identifyRequest: {
      userIdentities: { email: 'h.jekyll.md@example.com', customerid: 'h.jekyll.md' }
   },
   identityCallback: myIdentityCallback
};

mParticle.init('APPKEY', mParticleConfig)

  GoogleAnalytics.register(mParticleConfig);
  appboy.register(mParticleConfig);


  mParticle.logPageView(
	"screenViewEvent",
	{},
	{} // if you're using Google Analytics to track page views
);

mParticle.logEvent(
  'Video Watched',
  mParticle.EventType.Navigation,
  {'category':'Destination Intro','title':'Paris'}
);

const mediaSession = new MediaSession(
    mParticle,                    // mParticle SDK Instance
    '1234567',                    // Custom media ID
    'Funny Internet cat video',   // Custom media Title
    120000,                       // Duration in milliseconds
    'Video',                      // Content Type (Video or Audio)
    'OnDemand',                    // Stream Type (OnDemand, Live, etc.)
    true
);

window.logplay = function () {
  var currentUser = mParticle.Identity.getCurrentUser();

  mediaSession.logPlay();

  document.getElementById('status').innerHTML = "Logged Play";
}

window.startsession = function () {
  var currentUser = mParticle.Identity.getCurrentUser();

  mediaSession.logMediaSessionStart();

  document.getElementById('status').innerHTML = "Started Session";
}
