const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Server is running!',
        status:'OK'
    });
});

app.use('/api/fruits', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});