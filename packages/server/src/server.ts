import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Enable CORS middleware
app.use(cors());

app.get('/api/data', (req: Request, res: Response) => {
    const data = { message: 'Hello from server!' };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
