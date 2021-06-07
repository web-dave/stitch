var express = require('express');
var router = express.Router();
const db = require('../db')
const steps = db.RECOMMENDATIONS;
const versions = db.versions

const  getVersion = (newVersion) => {
  // falschangaben abfangen
  // falsche versionen find best match
  return versions.find((version) => version.name === newVersion);
}


const createUpdatePath = (from, to)=>  {
  const beforeRecommendations = [];
  const duringRecommendations = [];
  const afterRecommendations = [];

  if (to.number < from.number) {
    return 'We do not support downgrading versions of Angular.';
  }
    // Find applicable steps and organize them into before, during, and after upgrade
    for (const step of steps) {
      if (step.level <= 3 && step.necessaryAsOf > from.number) {

        // Check Options
        // Only show steps that don't have a required option
        // Or when the user has a matching option selected
        // let skip = false;
        // for (const option of this.optionList) {
        //   if (step[option.id] && !this.options[option.id]) {
        //     skip = true;
        //   }
        // }
        // if (skip) {
        //   continue;
        // }

        // If you could do it before now, but didn't have to finish it before now
        if (step.possibleIn <= from.number && step.necessaryAsOf >= from.number) {
          beforeRecommendations.push(step);
          // If you couldn't do it before now, and you must do it now
        } else if (step.possibleIn > from.number && step.necessaryAsOf <= to.number) {
          duringRecommendations.push(step);
        } else if (step.possibleIn <= to.number) {
          afterRecommendations.push(step);
        } else {
        }
      }
    }
    return  {beforeRecommendations,duringRecommendations,afterRecommendations}
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(versions.map(obj => obj.name));
});
router.get('/:fromV/:toV', function(req, res, next) {
  const from = getVersion(req.params.fromV)
  const to = getVersion(req.params.toV)
  console.log(from, to)
  let msg = ''
  if(from && to){
msg = createUpdatePath(from, to)
res.send(msg);
  } else {
    if(!from){
      msg += `Requested from Version: ${req.params.fromV}  was not found. `
    }
    if(!to){
      msg += `Requested to Version: ${req.params.toV}  was not found. `
    }
    msg += 'Typo? check /update for available versions'
    res.status(404).send({msg})
  }
});
router.get('/hps', function(req, res, next) {
  res.send('Moin hpsteiner');
});

module.exports = router;
