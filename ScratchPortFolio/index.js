document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Attempting to fetch helloworld.html');
        const response = await fetch('helloworld.html');
        if (!response.ok) {
            throw new Error(`Failed to load helloworld.html: ${response.status} ${response.statusText}`);
        }
        const html = await response.text();
        console.log('Successfully fetched helloworld.html');
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('content').innerHTML = '<p>Error loading content. Please check the console for details.</p>';
    }
});