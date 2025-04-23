// Optional: Click to copy email
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const email = link.href.replace('mailto:', '');
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard: " + email);
  });
});
