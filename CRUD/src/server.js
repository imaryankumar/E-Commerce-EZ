import {app} from './app.js'
import router from '../routes/uploader.route.js'

app.use("/api/v1",router);

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`)
})


