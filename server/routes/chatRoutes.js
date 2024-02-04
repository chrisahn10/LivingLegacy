const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require("openai");
dotenv.config();
const router = express.Router();
console.log(process.env.OPENAI_API_KEY); // Check if the API key is loaded correctly


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  
});
router.get('/test', (req, res) => {
  console.log('Test route hit');
  res.send('Test route is working');
});

router.post('/', async(req, res) => {
    const {prompt} = req.body;
    try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              "role": "assistant",
              "content": prompt
            }
          ],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        res.send(response.data.choices[0].message.content);

      } catch(err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ error: 'An internal server error occurred' });
    }
    
});

module.exports = router;