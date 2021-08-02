import dotenv from "dotenv";
import app from './app'


app.listen(3000, () => {
  logger.info('Server listening on port 3000');
});