export default class GameService {
    baseurl: string;
    constructor();
    ping(): string;
    getGameInfo(gameId: string): Promise<any>;
    getScheduleForDate(formattedDate: string): Promise<any>;
}
