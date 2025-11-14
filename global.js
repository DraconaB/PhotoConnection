// Sharing Functionality
document.addEventListener('DOMContentLoaded', () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  // Facebook
  document.getElementById('share-facebook')?.addEventListener('click', () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    window.open(fbUrl, 'facebook-share', 'width=600,height=400');
  });

  // Twitter
  document.getElementById('share-twitter')?.addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    window.open(twitterUrl, 'twitter-share', 'width=600,height=400');
  });

  // Web Share API
  document.getElementById('share-native')?.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share canceled or failed:', err);
      }
    } else {
      alert('Native sharing not supported. Use Facebook or Twitter buttons.');
    }
  });
});
