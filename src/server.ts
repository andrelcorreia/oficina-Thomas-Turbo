import express from 'express';
import { VehicleRouter } from './routes/vehicleRoutes';
import { UserRouter } from './routes/userRoutes';
import { SessionRouter } from './routes/sessionRoutes';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());

app.use('/vehicles', VehicleRouter);
app.use('/users', UserRouter);
app.use('/session', SessionRouter);

app.listen(3333, () => {
	console.log('Server listening on port 3333');
});
