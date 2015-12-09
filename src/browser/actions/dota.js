import {getLeague as getLeagueService} from '../services/dota';
import {League} from '../constants/dota';

const DotaActions = {
    getLeague() {
        let leagueId = 3671;

        getLeagueService(leagueId).then(response => {
            this.dispatch(League.FETCH_SUCCEEDED, response.result);
        });
    }
};

module.exports = DotaActions;
