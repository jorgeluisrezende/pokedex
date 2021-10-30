
import { config } from "./config"
import { app } from "./src/app"


app.listen(config.port, () => {
    console.log(`App started successfuly on PORT ${config.port}`)
})