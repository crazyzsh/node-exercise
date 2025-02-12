
import yaml from 'js-yaml';
import fs from 'fs';
import axios from 'axios';
import schedule from 'node-schedule';

const yamlFile = fs.readFileSync('config.yaml', 'utf8');
const config = yaml.load(yamlFile);
// axios.defaults.headers.common['Authorization'] = `Bearer ${config.token}`;
schedule.scheduleJob('30 29 9 * * *', () => {
  axios.post(config.check_url, {
      headers: {
          Referer: config.url,
          Cookie: config.cookie
      },
  }).then(res => {
      console.log(res.data)
  }).catch(err => {
      console.log('------->',err)
  })
})