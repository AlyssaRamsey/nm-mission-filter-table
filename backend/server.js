const { getTVSchedule } = require('./services/tvScheduleService');
const { setupCommunication, app } = require('./services/communicationService');

const main = async () => {
  try {
    const tvSchedule = await getTVSchedule();
    const tvshows = tvSchedule.data;
    setupCommunication(tvshows);
    app.listen(5000);
  } catch (e) {
    console.error('Error occured while running backend service', e);
  }
}

main();
