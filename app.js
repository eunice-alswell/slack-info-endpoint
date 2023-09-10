const express = require("express");
const moment = require("moment-timezone")

const app = express();

const HOST = "localhost";
const PORT = "8080";

app.get("/api",(req,res)=>{
    const slackName = req.query.slack_name || "Eunice Gyau";
    const track = req.query.track || "backend";

    const dayOfWeek = moment().tz("UTC").format("dddd");
    const currentUTCtime = moment().tz('UTC').format("YYYY-MM-DDTHH:mm:ss[Z]")

    const githubFileURL = "https://github.com/eunice-alswell/slack-info-endpoint/blob/main/app.js";
    const githubRepoURL = "https://github.com/eunice-alswell/slack-info-endpoint.git";

    const data = {
        "slack_name" : slackName,
        "current_day" : dayOfWeek,
        "utc_time" : currentUTCtime,
        "track" : track,
        "github_file_url":githubFileURL,
        "github_repo_url" : githubRepoURL,
        "status" : 200
    };
    
    return res.status(200).json(data);
    
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${HOST}: ${PORT}`)
})