import express from "express"
import { VehicleRouter } from "./routes/vehicleRoutes";
import { UserRouter } from "./routes/userRoutes";

const app = express()

app.use(express.json())


app.use('/vehicles',VehicleRouter)
app.use('/users', UserRouter)

app.listen(3333, () => {
    console.log('Server listening on port 3333');
});