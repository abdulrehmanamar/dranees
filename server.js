import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from public and root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    doctor: 'Dr. Syed Anees ur Rehman Shah',
    specialty: 'Cardiac Surgeon',
    location: 'Lahore, Pakistan'
  });
});

// Consultation Booking API
app.post('/api/consultation', (req, res) => {
  const { name, phone, email, date, message } = req.body;
  if (!name || (!phone && !email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name and either a phone number or email address.'
    });
  }

  // Record consultation request
  console.log('[Consultation Request]', {
    name,
    phone,
    email,
    date: date || 'Not specified',
    message: message || '',
    receivedAt: new Date().toISOString()
  });

  return res.json({
    success: true,
    message: `Thank you, ${name}. Your consultation request has been received. Our clinical coordinator will contact you shortly to confirm your appointment.`
  });
});

// Route mapping for clean URLs
const routes = {
  '/': 'index.html',
  '/index': 'index.html',
  '/home': 'index.html',
  '/about': 'about.html',
  '/expertise': 'expertise.html',
  '/procedures': 'expertise.html',
  '/stories': 'stories.html',
  '/patient-stories': 'stories.html',
  '/contact': 'contact.html',
  '/consultation': 'contact.html',
  '/privacy': 'privacy.html',
  '/privacy-policy': 'privacy.html',
  '/terms': 'terms.html',
  '/terms-of-service': 'terms.html'
};

for (const [routePath, htmlFile] of Object.entries(routes)) {
  app.get(routePath, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', htmlFile));
  });
}

// Fallback to index.html for any unmatched route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Dr. Syed Anees ur Rehman Shah - Web server running on http://0.0.0.0:${PORT}`);
});
